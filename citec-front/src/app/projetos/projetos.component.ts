import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "../backend.service";
import swal from "sweetalert";

@Component({
  selector: "app-projetos",
  templateUrl: "./projetos.component.html",
  styleUrls: ["./projetos.component.css"]
})
export class ProjetosComponent implements OnInit {
  @ViewChild("cursoFiltro") cursoFiltro: ElementRef;
  public tipo;
  public projetosFiltro = [];
  public projetos = [];
  public projetosInicial = [];
  public projetoAtual = [];
  public filtro;
  public files: Set<File>;
  public etapa;
  public idusuario;
  public documentacaoPlanejamento = [];
  public documentacaoDesenvolvimento = [];
  public documentacaoHomologacao = [];
  public documentacaoDetalhamento = [];
  public documentacaoTestes = [];
  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {
    // Verifica se o usuário está logado no sistema
    if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
      this.router.navigate([""]);
    } else {
      this.idusuario = localStorage.getItem("010101");
      this.tipo = localStorage.getItem("0000");
    }
    // Seleciona as candidaturas que estão em desenvolvimento
    this.service.selectCandidaturasEmDesenvolvimento().subscribe(res => {
      if (res.json().status !== 200) {
        swal(
          "ERRO",
          "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
      } else {
        res.json().result.forEach(projetos => {
          const date = projetos.dataAprovacao.split("T");
          projetos.dataAprovacao = date[0];
          this.projetos.push(projetos);
          this.projetosInicial.push(projetos);
        });
      }
    });
  }

  /**
   * Desloga o usuário do sistema
   */
  sair() {
    localStorage.removeItem("010101");
    localStorage.removeItem("0000");
    this.router.navigate(['']);
  }

  /**
   * Filtro
   */
  filtroFunc() {
    if (this.cursoFiltro.nativeElement.value == "Todos") {
      var curso = undefined;
    } else {
      var curso = this.cursoFiltro.nativeElement.value;
    }
    if (curso === undefined) {
      if (this.filtro != null) {
        this.filtro = this.filtro.trim();
      }
      if (!this.filtro) {
        this.projetos = this.projetosInicial;
      } else {
        this.projetosFiltro = [];
        this.projetosInicial.forEach(projeto => {
          if (projeto.nomeProjeto.includes(this.filtro)) {
            this.projetosFiltro.push(projeto);
          }
        });
        this.projetos = this.projetosFiltro;
      }
    } else {
      if (this.filtro != null) {
        this.filtro = this.filtro.trim();// retira os espaços em branco na frente da frase/palavra
      }
      this.projetosFiltro = [];
      this.projetosInicial.forEach(projeto => {
        if (curso === "Projeto Externo") {// verifica se é projeto externo, pois o tipo de procura é diferente se ele for
          if (!this.filtro) {
            if (projeto.TipoProj === "Projeto Externo") {
              this.projetosFiltro.push(projeto);
            }
          } else {
            if (
              projeto.nomeProjeto.includes(this.filtro) &&
              projeto.TipoProj === "Projeto Externo"
            ) {
              this.projetosFiltro.push(projeto);
            }
          }
        } else if (projeto.curso) {
          if (!this.filtro) {
            if (projeto.curso.includes(curso)) {
              this.projetosFiltro.push(projeto);
            }
          } else {
            if (
              projeto.nomeProjeto.includes(this.filtro) &&
              projeto.curso.includes(curso)
            ) {
              this.projetosFiltro.push(projeto);
            }
          }
        }
      });
      this.projetos = this.projetosFiltro;
    }
  }

  /**
     * Muda o modal atual para o modal da documentação
     */
  modalDocumentacao(etapa) {
    this.etapa = etapa;
    document.getElementById("fecharModalAtual").click();
    document.getElementById("modalDocumentacaoBtn").click();
  }

  /**
     * Define o projeto que irá aparecer no modal e sua documentação
     */
  modal(projeto) {
    this.projetoAtual = [];
    this.projetoAtual.push(projeto);
    this.service.selectAllDocumentacao(projeto.id).subscribe(res => {
      if (res.json().status !== 200) {
        swal(
          "ERRO",
          "Não foi possivel carregar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
      } else {
        this.documentacaoPlanejamento = [];
        this.documentacaoDesenvolvimento = [];
        this.documentacaoHomologacao = [];
        this.documentacaoDetalhamento = [];
        this.documentacaoTestes = [];
        // Verifica e define qual etapa vai ficar cada arquivo
        res.json().result.forEach(documentos => {
          console.log(documentos);
          if (documentos.etapa == "Planejamento") {
            this.documentacaoPlanejamento.push(documentos);
          }
          if (documentos.etapa == "Desenvolvimento") {
            this.documentacaoDesenvolvimento.push(documentos);
          }
          if (documentos.etapa == "Homologação") {
            this.documentacaoHomologacao.push(documentos);
          }
          if (documentos.etapa == "Detalhamento de requisitos") {
            this.documentacaoDetalhamento.push(documentos);
          }
          if (documentos.etapa == "Testes") {
            this.documentacaoTestes.push(documentos);
          }
        });
      }
    });
  }

  /**
     * Ao selecionar algo no input essa função já é chamada,
     * definindo os arquivos que serão passados na hora do upload
     */
  onChange(event) {
    const selectedFiles = <FileList>event.srcElement.files; // define os arquivos passados através do event

    const fileNames = [];// seta um array de nome de arquivos
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);//adiciona o arquivo no files
    }// Tratamento para n bugar quanto tiver mais que 1 arquivo selecionado
    document.getElementById("customFileLabel").innerHTML = fileNames.join(", ");
  }

  /**
     * Envia os arquivos que foram definidos na função onChange
     */
  onUpload(etapa, id, idusuario) {//
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, id, etapa, idusuario).subscribe(res => {
        if (res.json().status == 500) {
          swal(
            "ERRO",
            "Não foi possivel fazer o upload (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
            res.json().status +
            ", erro: " +
            res.json().result.code +
            ": " +
            res.json().result.errno,
            "error"
          );
        } else if (res.json().status == 200) {
          swal("SUCESSO", "Upload concluído com sucesso", "success").then(
            () => {
              window.location.reload();
            }
          );
        }
      });
    } else {
      swal("ERRO", "Selecione um arquivo", "warning");
    }
  }

  /**
    * Realiza download dos arquivos
    */
  onDownload(id, etapa, nomeArquivo) {
    let data = {
      id: id,
      etapa: etapa,
      nomeArquivo: nomeArquivo
    };
    this.service.download(data).subscribe((res: any) => {
      if (res.type != "application/json") {
        const file = new Blob([res._body], {
          type: res._body.type
        });// instancia o Blob
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = blob;
        link.download = nomeArquivo;
        link.click();
        window.URL.revokeObjectURL(blob);
        link.remove();
        // tudo que eu fiz acima usa apenas JS puro, se trata de um modo de download via link
      } else {
        swal("ERRO", "Impossivel localizar o arquivo", "error");
      }
    });
  }

  /**
   * Exclui o arquivo passado
   */
  excluirArquivo(id, caminho) {
    while (caminho.includes("/")) {
      caminho = caminho.replace("/", "+");
    }//altera o caminho para conseguir passar por parametro.
    this.service.excluirArquivo(id, caminho).subscribe(res => {
      if (res.json().status == 500) {
        swal(
          "ERRO",
          "Não foi possivel excluir o arquivo (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
      } else {
        swal("SUCESSO", "Arquivo excluido com sucesso", "success").then(
          function () {
            window.location.reload();
          }
        );
      }
    });
  }

}
