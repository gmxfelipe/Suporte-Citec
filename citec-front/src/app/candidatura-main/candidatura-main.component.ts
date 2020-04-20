import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import swal from 'sweetalert';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-candidatura-main',
  templateUrl: './candidatura-main.component.html',
  styleUrls: ['./candidatura-main.component.css']
})
export class CandidaturaMainComponent implements OnInit {

  @ViewChild('regular') regular: ElementRef;
  @ViewChild('mediotec') mediotec: ElementRef;

  public tcc = {
    iduser: parseInt(localStorage.getItem('010101')),
    curso: null,
    periodo: null,
    modulo: null,
    turma: null,
    modalidade: null,
    nomeProjeto: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null,
    nomeResponsavel: null,
  };

  public interno = {
    iduser: parseInt(localStorage.getItem('010101')),
    curso: null,
    nomeProjeto: null,
    nomeResponsavel: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null
  };

  public externo = {
    iduser: parseInt(localStorage.getItem('010101')),
    solicitante: null,
    filiacao: null,
    nomeResponsavel: null,
    telefoneResponsavel: null,
    emailResponsavel: null,
    nomeProjeto: null,
    orcamentoProjeto: null,
    tipo: null,
    resumo: null,
    descricao: null,
    equipe: null
  };

  public userForm = new FormGroup({
    regular: new FormControl(),
    mediotec: new FormControl()
  });

  public tipo
  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {

    if (!localStorage.getItem('010101') && !localStorage.getItem('0000')) {
      this.router.navigate(['']);
    } else {
      this.tipo = localStorage.getItem('0000')
    }

  }

  sair() {
    localStorage.removeItem("010101");
    localStorage.removeItem("0000");
    this.router.navigate([""]);
  }

  /**
  * Verifica qual modalidade foi selecionada
  */
  validarRadio() {

    if (this.mediotec.nativeElement.checked == true) {
      this.tcc.modalidade = this.mediotec.nativeElement.value;
    } else if (this.regular.nativeElement.checked == true) {
      this.tcc.modalidade = this.regular.nativeElement.value;
    }

  }

  /**
  * Envia a candidatura do tcc
  */
  candidaturaTCC() {

    this.validarRadio();

    if (this.tcc.curso && this.tcc.descricao && this.tcc.equipe && this.tcc.modalidade &&
      this.tcc.modulo && this.tcc.nomeProjeto && this.tcc.nomeResponsavel &&
      this.tcc.periodo && this.tcc.resumo && this.tcc.tipo && this.tcc.turma) {

      const data = this.tcc;

      this.service.candidaturaTCC(data).subscribe(res => {

        if (res.json().status !== 200) {
          swal('ERRO', 'Não foi possivel realizar a candidatura do TCC Startup (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
        } else {
          swal('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
            window.location.replace('/avaliacao');
          });
        }

      });

    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }

    console.log(this.tcc);

  }

  /**
  *
  */
  candidaturaINTERNO() {

    if (this.interno.curso && this.interno.descricao && this.interno.equipe && this.interno.nomeProjeto &&
      this.interno.nomeResponsavel && this.interno.resumo && this.interno.tipo) {

      const data = this.interno;

      this.service.candidaturaINTERNO(data).subscribe(res => {
        if (res.json().status !== 200) {
          swal('ERRO', 'Não foi possivel realizar a candidatura do Projeto Interno (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
        } else {
          swal('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
            window.location.replace('/avaliacao');
          });
        }

      });

    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }

  }

  candidaturaEXTERNO() {

    if (this.externo.descricao && this.externo.emailResponsavel && this.externo.equipe && this.externo.filiacao
      && this.externo.iduser && this.externo.nomeProjeto && this.externo.nomeResponsavel && this.externo.orcamentoProjeto
      && this.externo.resumo && this.externo.solicitante && this.externo.telefoneResponsavel && this.externo.tipo) {

      const data = this.externo;

      this.service.candidaturaEXTERNO(data).subscribe(res => {

        // tslint:disable-next-line: triple-equals
        if (res.json().status !== 200) {
          swal('ERRO', 'Não foi possivel realizar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
            + res.json().result.code + ": " + res.json().result.errno, 'error');
        } else {
          // tslint:disable-next-line: space-before-function-paren only-arrow-functions
          swal('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
            window.location.replace('/avaliacao');
          });
        }

      });

    } else {
      swal('ERRO', 'Preencha todos os campos', 'warning');
    }
  }



}
