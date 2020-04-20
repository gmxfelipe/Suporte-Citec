// tslint:disable: space-before-function-paren only-arrow-functions no-string-literal
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "../backend.service";
import swal from "sweetalert";

@Component({
  selector: "app-avaliacao",
  templateUrl: "./avaliacao.component.html",
  styleUrls: ["./avaliacao.component.css"]
})
export class AvaliacaoComponent implements OnInit {
  // UPDATE EXTERNO VARIAVEIS
  @ViewChild("solicitante") solicitante: ElementRef;
  @ViewChild("filiacao") filiacao: ElementRef;
  @ViewChild("nomeResponsavel") nomeResponsavel: ElementRef;
  @ViewChild("telefoneResponsavel") telefoneResponsavel: ElementRef;
  @ViewChild("emailResponsavel") emailResponsavel: ElementRef;
  @ViewChild("nomeProjeto") nomeProjeto: ElementRef;
  @ViewChild("orcamentoProjeto") orcamentoProjeto: ElementRef;
  @ViewChild("tipo") tipo: ElementRef;
  @ViewChild("resumo") resumo: ElementRef;
  @ViewChild("descricao") descricao: ElementRef;
  @ViewChild("descricao") equipe: ElementRef;
  // /UPDATE EXTERNO VARIAVEIS

  // UPDATE INTERNO VARIVEIS
  @ViewChild("curso") curso: ElementRef;
  // /UPDATE INTERNO VARIVEIS

  // UPDATE TCC VARIAVEIS
  @ViewChild("periodo") periodo: ElementRef;
  @ViewChild("modulo") modulo: ElementRef;
  @ViewChild("turma") turma: ElementRef;
  @ViewChild("modalidade") modalidade: ElementRef;
  // /UPDATE TCC VARIAVEIS
  public revisao = {
    leis: false,
    objetivo_info: false,
    orcamento: false,
    outro_recomen: null
  };
  public tipoUser;
  public candidaturas = [];
  public emRevisao = [];
  public emDesenvolvimento = [];
  public candidaturasAtual = [];
  public reprovados = [];
  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {
    if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
      this.router.navigate([""]);
    } else {
      this.tipoUser = localStorage.getItem("0000");
    }
    // SELECIONA OS PROJETOS REPROVADOS
    this.service.selectCandidaturasReprovados().subscribe(res => {
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
          this.reprovados.push(projetos);
        });
      }
    });
    // /SELECIONA OS PROJETOS REPROVADOS
    // SELECIONA OS PROJETOS QUE ESTÃO EM AVALIÇÃO
    this.service.selectCandidaturas().subscribe(res => {
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
        res.json().result.forEach(candidatura => {
          this.candidaturas.push(candidatura);
        });
      }
    });
    // /SELECIONA OS PROJETOS QUE ESTÃO EM AVALIÇÃO
    // SELECIONA OS PROJETO QUE ESTÃO EM DESENVOLVIMENTO
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
          this.emDesenvolvimento.push(projetos);
        });
      }
    });
    // /SELECIONA OS PROJETO QUE ESTÃO EM DESENVOLVIMENTO
    // SELECIONA OS PROJETOS QUE FORAM ENVIADOS PARA REVISÃO
    this.service.selectCandidaturasEmRevisao().subscribe(res => {
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
          this.emRevisao.push(projetos);
        });
      }
    });
    // /SELECIONA OS PROJETOS QUE FORAM ENVIADOS PARA REVISÃO
  }

  sair() {
    localStorage.removeItem("010101");
    localStorage.removeItem("0000");
    this.router.navigate([""]);
  }

  modal(candidatura) {
    this.candidaturasAtual = [];
    this.candidaturasAtual.push(candidatura);
    console.log("candidaturaModal");
    console.log(this.candidaturasAtual);
  }

  modalRevisao() {
    document.getElementById("fecharModalAtual").click();
    document.getElementById("modalRevisaobtn").click();
  }
  modalReprovacao() {
    document.getElementById("fecharModalAtual").click();
    document.getElementById("modalReprovacaobtn").click();
  }

  reprovarCandidatura(candidatura) {
    if (this.revisao.outro_recomen != null) {
      this.revisao.outro_recomen = this.revisao.outro_recomen.trim();
    }
    if (this.revisao.outro_recomen) {
      swal({
        title: "Você tem certeza?",
        text: 'Ao apertar "OK" você irá mandar o reprovar o projeto',
        icon: "warning",
        dangerMode: true,
        buttons: ["Não", true]
      }).then(willReprove => {
        if (willReprove) {
          const data = {
            revisao: this.revisao.outro_recomen.trim(),
            id: candidatura.id
          };
          this.service.reprovarCandidatura(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal(
                "ERRO",
                "Não foi possivel reprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                res.json().status +
                ", erro: " +
                res.json().result.code +
                ": " +
                res.json().result.errno,
                "error"
              );
              console.log(res);
            } else {
              swal("SUCESSO", "Projeto reprovado", "success").then(function () {
                window.location.reload();
              });
            }
          });
        }
      });
    } else {
      swal("ERRO", "Preencha todos os campos", "warning");
    }
  }

  aprovarCandidatura(candidatura) {
    console.log(candidatura);
    swal({
      title: "Você tem certeza?",
      // tslint:disable-next-line: quotemark
      text:
        "Ao apertar 'OK' você irá aprovar o projeto, essa ação é irreversível",
      icon: "warning",
      dangerMode: true,
      buttons: ["Não", true]
    }).then(willAprove => {
      if (willAprove) {
        const data = {
          id: candidatura.id,
          date: new Date()
        };
        this.service.aproveCandidatura(data).subscribe(res => {
          if (res.json().status !== 200) {
            swal(
              "ERRO",
              "Não foi possivel aprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
              res.json().status +
              ", erro: " +
              res.json().result.code +
              ": " +
              res.json().result.errno,
              "error"
            );
            console.log(res);
          } else {
            swal("SUCESSO", "Projeto aprovado com sucesso", "success").then(
              function () {
                window.location.reload();
              }
            );
          }
        });
      }
    });
  }

  enviarRevisao(candidatura) {
    if (this.revisao.outro_recomen != null) {
      this.revisao.outro_recomen = this.revisao.outro_recomen.trim();
    }
    if (
      this.revisao.leis ||
      this.revisao.objetivo_info ||
      this.revisao.orcamento ||
      this.revisao.outro_recomen
    ) {
      swal({
        title: "Você tem certeza?",
        text: 'Ao apertar "OK" você irá mandar o projeto para a revisão',
        icon: "warning",
        dangerMode: true,
        buttons: ["Não", true]
      }).then(willAprove => {
        if (willAprove) {
          var texto = "";
          if (this.revisao.leis == true) {
            texto += "Infringe leis";
            if (this.revisao.objetivo_info == true) {
              texto +=
                ", objetivo do projeto incompreendido/Poucas informações";
              if (this.revisao.orcamento == true) {
                texto += ", valor do orçamento fora dos parâmetros";
                if (this.revisao.outro_recomen) {
                  texto += ", " + this.revisao.outro_recomen;
                }
              }
            } else if (this.revisao.orcamento == true) {
              texto += ", valor do orçamento fora dos parâmetros";
              if (this.revisao.outro_recomen) {
                texto += ", " + this.revisao.outro_recomen;
              }
            } else if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen;
            }
          } else if (this.revisao.objetivo_info == true) {
            texto += "Objetivo do projeto incompreendido/Poucas informações";
            if (this.revisao.orcamento == true) {
              texto += ", valor do orçamento fora dos parâmetros";
              if (this.revisao.outro_recomen) {
                texto += ", " + this.revisao.outro_recomen;
              }
            } else if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen;
            }
          } else if (this.revisao.orcamento == true) {
            texto += "Valor do orçamento fora dos parâmetros";
            if (this.revisao.outro_recomen) {
              texto += ", " + this.revisao.outro_recomen;
            }
          } else if (this.revisao.outro_recomen) {
            texto += this.revisao.outro_recomen;
          }
          const data = {
            revisao: texto,
            id: candidatura.id
          };
          this.service.revisaoCandidatura(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal(
                "ERRO",
                "Não foi possivel enviar o projeto para revisão (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                res.json().status +
                ", erro: " +
                res.json().result.code +
                ": " +
                res.json().result.errno,
                "error"
              );
              console.log(res);
            } else {
              swal("SUCESSO", "Projeto enviado para revisão", "success").then(
                function () {
                  window.location.reload();
                }
              );
            }
          });
        }
      });
    } else {
      swal("ERRO", "Preencha todos os campos", "warning");
    }
  }

  reenviarExterno() {
    let data = {
      id: this.candidaturasAtual[0].id,
      solicitante: this.solicitante.nativeElement.value,
      filiacao: this.filiacao.nativeElement.value,
      nomeResponsavel: this.nomeResponsavel.nativeElement.value,
      telefoneResponsavel: this.telefoneResponsavel.nativeElement.value,
      emailResponsavel: this.emailResponsavel.nativeElement.value,
      nomeProjeto: this.nomeProjeto.nativeElement.value,
      orcamentoProjeto: this.orcamentoProjeto.nativeElement.value,
      tipo: this.tipo.nativeElement.value,
      resumo: this.resumo.nativeElement.value,
      descricao: this.descricao.nativeElement.value,
      equipe: this.equipe.nativeElement.value
    };
    if (
      data.id &&
      data.solicitante &&
      data.filiacao &&
      data.nomeResponsavel &&
      data.telefoneResponsavel &&
      data.emailResponsavel &&
      data.nomeProjeto &&
      data.orcamentoProjeto &&
      data.tipo &&
      data.resumo &&
      data.descricao &&
      data.equipe
    ) {
      this.service.reenviarExterno(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal(
            "ERRO",
            "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
            res.json().status +
            ", erro: " +
            res.json().result.code +
            ": " +
            res.json().result.errno,
            "error"
          );
          console.log(res);
        } else {
          swal("SUCESSO", "Candidatura reenviada com sucesso", "success").then(
            function () {
              window.location.reload();
            }
          );
        }
      });
    } else {
      swal("ERRO", "Preencha todos os campos", "warning");
    }
  }

  reenviarInterno() {
    if (
      this.curso.nativeElement.value &&
      this.nomeProjeto.nativeElement.value &&
      this.nomeResponsavel.nativeElement.value &&
      this.tipo.nativeElement.value &&
      this.resumo.nativeElement.value &&
      this.resumo.nativeElement.value &&
      this.descricao.nativeElement.value &&
      this.equipe.nativeElement.value
    ) {
      let data = {
        id: this.candidaturasAtual[0].id,
        curso: this.curso.nativeElement.value,
        nomeProjeto: this.nomeProjeto.nativeElement.value,
        nomeResponsavel: this.nomeResponsavel.nativeElement.value,
        tipo: this.tipo.nativeElement.value,
        resumo: this.resumo.nativeElement.value,
        descricao: this.descricao.nativeElement.value,
        equipe: this.equipe.nativeElement.value
      };
      this.service.reenviarInterno(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal(
            "ERRO",
            "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
            res.json().status +
            ", erro: " +
            res.json().result.code +
            ": " +
            res.json().result.errno,
            "error"
          );
          console.log(res);
        } else {
          swal("SUCESSO", "Candidatura reenviada com sucesso", "success").then(
            function () {
              window.location.reload();
            }
          );
        }
      });
    } else {
      swal("ERRO", "Preencha todos os campos", "warning");
    }
  }

  reenviarTcc() {
    if (
      this.curso.nativeElement.value &&
      this.periodo.nativeElement.value &&
      this.modulo.nativeElement.value &&
      this.turma.nativeElement.value &&
      this.modalidade.nativeElement.value &&
      this.nomeProjeto.nativeElement.value &&
      this.tipo.nativeElement.value &&
      this.resumo.nativeElement.value &&
      this.descricao.nativeElement.value &&
      this.equipe.nativeElement.value &&
      this.nomeResponsavel.nativeElement.value
    ) {
      let data = {
        id: this.candidaturasAtual[0].id,
        curso: this.curso.nativeElement.value,
        periodo: this.periodo.nativeElement.value,
        modulo: this.modulo.nativeElement.value,
        turma: this.turma.nativeElement.value,
        modalidade: this.modalidade.nativeElement.value,
        nomeProjeto: this.nomeProjeto.nativeElement.value,
        tipo: this.tipo.nativeElement.value,
        resumo: this.resumo.nativeElement.value,
        descricao: this.descricao.nativeElement.value,
        equipe: this.equipe.nativeElement.value,
        nomeResponsavel: this.nomeResponsavel.nativeElement.value
      };
      this.service.reenviarTcc(data).subscribe(res => {
        if (res.json().status !== 200) {
          console.log(res.json().result);
          swal(
            "ERRO",
            "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
            res.json().status +
            ", erro: " +
            res.json().result.code +
            ": " +
            res.json().result.errno,
            "error"
          );
          console.log(res);
        } else {
          swal("SUCESSO", "Candidatura reenviada com sucesso", "success").then(
            function () {
              window.location.reload();
            }
          );
        }
      });
    } else {
      swal("ERRO", "Preencha todos os campos", "warning");
    }
  }
}
