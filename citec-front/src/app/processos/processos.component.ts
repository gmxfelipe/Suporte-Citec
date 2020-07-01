import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import swal from "sweetalert";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-processos",
  templateUrl: "./processos.component.html",
  styleUrls: ["./processos.component.css"]
})
export class ProcessosComponent implements OnInit {
  public tipo;
  public modelos = {
    modeloPlanejamento: [],
    modeloDesenvolvimento: [],
    modeloHomologacao: [],
    modeloDetalhamento: [],
    modeloTestes: []
  }
  public files: Set<File>;
  public modeloAtual;
  public etapa;
  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {
    if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
      this.router.navigate([""]);
    } else {
      this.tipo = localStorage.getItem("0000");
      this.service.selectAllmodelos().subscribe(res => {
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
          res.json().result.forEach(modelo => {
            console.log(modelo);
            if (modelo.etapa == "Planejamento") {
              this.modelos.modeloPlanejamento.push(modelo);
            }
            if (modelo.etapa == "Desenvolvimento") {
              this.modelos.modeloDesenvolvimento.push(modelo);
            }
            if (modelo.etapa == "Homologação") {
              this.modelos.modeloHomologacao.push(modelo);
            }
            if (modelo.etapa == "Detalhamento de requisitos") {
              this.modelos.modeloDetalhamento.push(modelo);
            }
            if (modelo.etapa == "Testes") {
              this.modelos.modeloTestes.push(modelo);
            }
          });
        }
      })
    }
  }
  /**
   * Desloga o usuário do sistema
   */
  sair() {
    localStorage.removeItem("010101");
    localStorage.removeItem("0000");
    this.router.navigate([""]);
  }

  /**
  * Define o modelo a ser enviado
  */
  onChange(event) {
    const selectedFiles = <FileList>event.srcElement.files;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById("customFileLabel").innerHTML = fileNames.join(", ");
  }

  /**
  * Envia o modelo
  */
  onUpload(etapa) {
    if (this.files && this.files.size > 0) {
      this.service.uploadModelo(this.files, etapa).subscribe(res => {
        if (res.json().status == 500) {
          // swal(
          //   "ERRO",
          //   "Não foi possivel fazer o upload (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          //   res.json().status +
          //   ", erro: " +
          //   res.json().result.code +
          //   ": " +
          //   res.json().result.errno,
          //   "error"
          // );
          console.log(res.json());
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
  * Abre o modal de atualizaçao dos modelos da etapa selecionada
  */
  modalModelo(etapa, modelos) {
    this.modeloAtual = modelos;
    this.etapa = etapa;
    document.getElementById('modalBtn').click();
    console.log(this.modeloAtual);
  }

  /**
  * Baixa o modelo selecionado
  */
  onDownload(id, nomeArquivo) {

    this.service.downloadModelo(id).subscribe((res: any) => {
      if (res.type != "application/json") {
        const file = new Blob([res._body], {
          type: res._body.type
        });
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = blob;
        link.download = nomeArquivo;
        link.click();
        window.URL.revokeObjectURL(blob);
        link.remove();
      } else {
        swal("ERRO", "Impossivel localizar o arquivo", "error");
      }
    });
  }

  /**
    * Deleta o modelo selecionado
    */
  deleteModelo(modelo) {
    while (modelo.caminho.includes("/")) {
      modelo.caminho = modelo.caminho.replace("/", "+");
    }
    this.service.excluirModelo(modelo.id, modelo.caminho).subscribe(res => {
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
        swal('SUCCESS', 'Arquivo excluido com sucesso', 'success').then(() => {
          window.location.reload();
        })
      }
    })
  }
}
