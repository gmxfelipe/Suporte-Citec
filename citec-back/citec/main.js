(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_main_home_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-main/home-main.component */ "./src/app/home-main/home-main.component.ts");
/* harmony import */ var _candidatura_main_candidatura_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidatura-main/candidatura-main.component */ "./src/app/candidatura-main/candidatura-main.component.ts");
/* harmony import */ var _avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avaliacao/avaliacao.component */ "./src/app/avaliacao/avaliacao.component.ts");
/* harmony import */ var _processos_processos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./processos/processos.component */ "./src/app/processos/processos.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_main_home_main_component__WEBPACK_IMPORTED_MODULE_4__["HomeMainComponent"] },
    { path: 'candidatura', component: _candidatura_main_candidatura_main_component__WEBPACK_IMPORTED_MODULE_5__["CandidaturaMainComponent"] },
    { path: 'avaliacao', component: _avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_6__["AvaliacaoComponent"] },
    { path: 'processos', component: _processos_processos_component__WEBPACK_IMPORTED_MODULE_7__["ProcessosComponent"] },
    { path: 'projetos', component: _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_8__["ProjetosComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/pt-PT */ "./node_modules/@angular/common/locales/pt-PT.js");
/* harmony import */ var _angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_main_home_main_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-main/home-main.module */ "./src/app/home-main/home-main.module.ts");
/* harmony import */ var _candidatura_main_candidatura_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./candidatura-main/candidatura-main.component */ "./src/app/candidatura-main/candidatura-main.component.ts");
/* harmony import */ var _avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./avaliacao/avaliacao.component */ "./src/app/avaliacao/avaliacao.component.ts");
/* harmony import */ var _processos_processos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./processos/processos.component */ "./src/app/processos/processos.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_14___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _candidatura_main_candidatura_main_component__WEBPACK_IMPORTED_MODULE_17__["CandidaturaMainComponent"],
                _avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_18__["AvaliacaoComponent"],
                _processos_processos_component__WEBPACK_IMPORTED_MODULE_19__["ProcessosComponent"],
                _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_20__["ProjetosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _home_main_home_main_module__WEBPACK_IMPORTED_MODULE_16__["HomeMainModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_12__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_backend_service__WEBPACK_IMPORTED_MODULE_9__["BackendService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avaliacao/avaliacao.component.css":
/*!***************************************************!*\
  !*** ./src/app/avaliacao/avaliacao.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhbGlhY2FvL2F2YWxpYWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F2YWxpYWNhby9hdmFsaWFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/avaliacao/avaliacao.component.html":
/*!****************************************************!*\
  !*** ./src/app/avaliacao/avaliacao.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"home\">CITEC</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n    aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/home' ]\">Agendas</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/candidatura' ]\">Candidatura</a>\n      <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/avaliacao' ]\">Avaliação<span\n          class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" href=\"http://cronograma.fiecdev.kinghost.net/#/login\">Gestão de projetos</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/processos' ]\">Processos</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/projetos' ]\">Projetos</a>\n      <a (click)=\"sair()\" class=\"material-icons nav-item nav-link\">\n        exit_to_app\n      </a>\n    </div>\n  </div>\n</nav>\n<nav>\n  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\" style=\"justify-content: center;\">\n    <a class=\"nav-item nav-link active\" id=\"nav-emAvaliacao-tab\" data-toggle=\"tab\" href=\"#nav-emAvaliacao\" role=\"tab\"\n      aria-controls=\"nav-emAvaliacao\" aria-selected=\"true\">Em avaliação</a>\n    <a class=\"nav-item nav-link\" id=\"nav-avaliados-tab\" data-toggle=\"tab\" href=\"#nav-avaliados\" role=\"tab\"\n      aria-controls=\"nav-avaliados\" aria-selected=\"false\">Em desenvolvimento</a>\n    <a href=\"#nav-revisao\" class=\"nav-item nav-link\" id=\"nav-revisao-tab\" data-toggle=\"tab\" role=\"tab\"\n      aria-controls=\"nav-controls\" aria-selected=\"false\">Em revisão</a>\n    <a class=\"nav-item nav-link\" id=\"nav-reprovados-tab\" *ngIf=\"tipoUser == 'A'\" data-toggle=\"tab\"\n      href=\"#nav-reprovados\" role=\"tab\" aria-controls=\"nav-reprovados\" aria-selected=\"true\">Reprovados</a>\n  </div>\n</nav>\n<div class=\"tab-content mt-4\" id=\"nav-tabContent\" style=\"justify-content: center;\">\n  <!-- Em avaliação -->\n  <div class=\"tab-pane fade show active\" id=\"nav-emAvaliacao\" role=\"tabpanel\" aria-labelledby=\"nav-emAvaliacao-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card bg-light border-0\">\n          <div class=\"card-header bg-light\">\n            <h4 class=\"mb-0 text-center\">\n              <a class=\"underline h2\">Em avaliação</a>\n            </h4>\n          </div>\n          <div class=\"card-body bg-light table-responsive\">\n            <table class=\"table table-bordered text-dark table-hover text-center\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\">Nome do Projeto</th>\n                <th scope=\"col\">Tipo de Projeto</th>\n                <th scope=\"col\">Proposta</th>\n                <th scope=\"col\">Origem</th>\n              </thead>\n              <tbody *ngFor=\"let candidatura of candidaturas\">\n                <tr>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalDescricao\">\n                    {{candidatura.nomeProjeto}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalDescricao\">\n                    {{candidatura.tipo}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalDescricao\">\n                    {{candidatura.descricao}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalDescricao\">\n                    {{candidatura.tipoProjeto}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n            <!-- Modal Projeto Declinado -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" hidden id=\"modalReprovacaobtn\"\n              data-target=\"#modalReprovacao\">\n            </button>\n            <div class=\"modal fade\" *ngFor=\"let candidatura of candidaturasAtual\" id=\"modalReprovacao\" tabindex=\"-1\"\n              role=\"dialog\" aria-labelledby=\"modalReprovacaoLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"modalReprovacaoLabel\">Motivo da reprovação</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <h5>Projeto: {{candidatura.nomeProjeto}}</h5>\n                    <form class=\"font120\">\n                      <div class=\"form-group\">\n                        <textarea class=\"form-control\" id=\"textAreaRevisao\" [(ngModel)]=\"revisao.outro_recomen\"\n                          [ngModelOptions]=\"{standalone: true}\" rows=\"3\"></textarea>\n                      </div>\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-danger\"\n                      (click)=\"reprovarCandidatura(candidatura)\">Reprovar</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /Modal Projeto Declinado -->\n\n            <!-- Modal Projeto Revisão -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" hidden id=\"modalRevisaobtn\"\n              data-target=\"#modalRevisao\">\n            </button>\n            <div class=\"modal fade\" *ngFor=\"let candidatura of candidaturasAtual\" id=\"modalRevisao\" tabindex=\"-1\"\n              role=\"dialog\" aria-labelledby=\"modalRevisaoLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"modalRevisaoLabel\">Motivo da revisão</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <h5>Projeto: {{candidatura.nomeProjeto}}</h5>\n                    <form class=\"font120\">\n                      <div class=\"form-group form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"revisao.leis\"\n                          [ngModelOptions]=\"{standalone: true}\" id=\"check1\">\n                        <label class=\"form-check-label\" for=\"check1\">Infringe leis</label>\n                      </div>\n                      <div class=\"form-group form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"revisao.objetivo_info\"\n                          [ngModelOptions]=\"{standalone: true}\" id=\"check2\">\n                        <label class=\"form-check-label\" for=\"check2\">Objetivo do projeto incompreendido/Poucas\n                          informações</label>\n                      </div>\n                      <div class=\"form-group form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"revisao.orcamento\"\n                          [ngModelOptions]=\"{standalone: true}\" id=\"check3\">\n                        <label for=\"check3\" class=\"form-check-label\">Valor do orçamento</label>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"textAreaRevisao\">Outro/Recomendações</label>\n                        <textarea class=\"form-control\" id=\"textAreaRevisao\" [(ngModel)]=\"revisao.outro_recomen\"\n                          [ngModelOptions]=\"{standalone: true}\" rows=\"3\"></textarea>\n                      </div>\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-warning text-white\" (click)=\"enviarRevisao(candidatura)\">Mandar\n                      para a\n                      revisão</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /Modal Projeto Revisão -->\n\n            <!-- Modais -->\n            <div *ngFor=\"let candidatura of candidaturasAtual\" class=\"modal fade\" id=\"modalDescricao\" tabindex=\"-1\"\n              role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n              <!-- Modal TCC Startup -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'TCC Startup'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (TCC Startup)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\"\n                        aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-curso\" class=\"text-dark\">Curso FIEC</label>\n                            <select class=\"form-control text-dark font100\" id=\" select-curso\" disabled>\n                              <option>{{candidatura.curso}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-periodo-curso\" class=\"text-dark\">\n                              Periodo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-periodo-curso\" disabled>\n                              <option>{{candidatura.periodo}}</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-modulo-curso\" class=\"text-dark \">\n                              Módulo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-modulo-curso\" disabled>\n                              <option>{{candidatura.modulo}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-turma-curso\" class=\"text-dark \">\n                              Turma\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-turma-curso\" disabled>\n                              <option>{{candidatura.turma}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"input-nome-responsavel-projeto\" class=\"text-dark \">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Resumo do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-projeto \" rows=\"3\"\n                            maxlength=\"500\" placeholder=\"Nome completo de cada integrante\"\n                            disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\" *ngIf=\"tipoUser == 'A'\">\n                      <button class=\"btn btn-danger\" (click)=\"modalReprovacao()\">Reprovar</button>\n                      <button class=\"btn btn-warning text-white\" (click)=\"modalRevisao()\">Revisão</button>\n                      <button class=\"btn btn-primary\" (click)=\"aprovarCandidatura(candidatura)\">Aprovar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal TCC Startup -->\n              <!-- Modal Projeto Interno -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Interno'\">\n                <div class=\"modal-dialog modal-lg\" role=\" document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Interno)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\"\n                        aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"form-group\">\n                          <label for=\"curso-fiec\" class=\"text-dark\">Curso FIEC</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-curso-fiec\" disabled>\n                            <option>{{candidatura.curso}}</option>\n                          </select>\n                        </div>\n\n\n                        <div class=\"form-group\">\n                          <label for=\"nome-responsavel\" class=\"text-dark\">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-Projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\" *ngIf=\"tipoUser == 'A'\">\n                      <button class=\"btn btn-danger\" (click)=\"modalReprovacao()\">Reprovar</button>\n                      <button class=\"btn btn-warning text-white\" (click)=\"modalRevisao()\">Revisão</button>\n                      <button class=\"btn btn-primary\" (click)=\"aprovarCandidatura(candidatura)\">Aprovar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Interno -->\n              <!-- Modal Projeto Externo -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Externo'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Externo)\n                      </h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\"\n                        aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"solicitante\" class=\"text-dark \">Solicitante</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"solicitante\" rows=\"1\"\n                              disabled>{{candidatura.solicitante}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"tipo-solicitante\" class=\"text-dark \">Filiação</label>\n                            <select class=\"form-control text-dark font100\" id=\"select-tipo-solicitante\" disabled>\n                              <option>{{candidatura.filiacao}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"nome-responsavel\" class=\"text-dark \">Nome do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.nomeResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"telefone-responsavel\" class=\"text-dark \">Telefone do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"telefone-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.telefoneResponsavel}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col-sm-6\">\n                            <label for=\"email-responsavel\" class=\"text-dark \">E-mail do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"email-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.emailResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"orcamentoProjeto\" class=\"text-dark \">Orçamento do projeto</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"orcamentoProjeto\" rows=\"1\"\n                              disabled>R$ {{candidatura.orcamentoProjeto}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do projeto</label>\n                          <select class=\"form-control  text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\" *ngIf=\"tipoUser == 'A'\">\n                      <button class=\"btn btn-danger\" (click)=\"modalReprovacao()\">Reprovar</button>\n                      <button class=\"btn btn-warning text-white\" (click)=\"modalRevisao()\">Revisão</button>\n                      <button class=\"btn btn-primary\" (click)=\"aprovarCandidatura(candidatura)\">Aprovar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Externo -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Em avaliação -->\n  <!-- Avaliados -->\n  <div class=\"tab-pane fade\" id=\"nav-avaliados\" role=\"tabpanel\" aria-labelledby=\"nav-avaliados-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card bg-light border-0\">\n          <div class=\"card-header bg-light\">\n            <h4 class=\"mb-0 text-center\">\n              <a class=\"underline h2\">Avaliados/Em desenvolvimento</a>\n            </h4>\n          </div>\n          <div class=\"card-body bg-light table-responsive\">\n            <table class=\"table text-dark table-bordered table-hover text-center\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\">Nome do Projeto</th>\n                <th scope=\"col\">Tipo de Projeto</th>\n                <th scope=\"col\">Proposta</th>\n                <th scope=\"col\">Origem</th>\n                <th scope=\"col\">Data Aprovação</th>\n              </thead>\n              <tbody *ngFor=\"let projetos of emDesenvolvimento\">\n                <tr>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\"\n                    data-target=\"#modalEmDesenvolvimento\">\n                    {{projetos.nomeProjeto}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\"\n                    data-target=\"#modalEmDesenvolvimento\">\n                    {{projetos.tipo}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\"\n                    data-target=\"#modalEmDesenvolvimento\">\n                    {{projetos.descricao}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\"\n                    data-target=\"#modalEmDesenvolvimento\">\n                    {{projetos.tipoProjeto}}\n                  </td>\n                  <td class=\"pointer\" data-toggle=\"modal\" data-target=\"#modalEmDesenvolvimento\"\n                    (click)=\"modal(projetos)\">\n                    {{projetos.dataAprovacao}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <div *ngFor=\"let candidatura of candidaturasAtual\" class=\"modal fade\" id=\"modalEmDesenvolvimento\"\n              tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n              <!-- Modal TCC Startup -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'TCC Startup'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (TCC Startup)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-curso\" class=\"text-dark\">Curso FIEC</label>\n                            <select class=\"form-control text-dark font100\" id=\" select-curso\" disabled>\n                              <option>{{candidatura.curso}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-periodo-curso\" class=\"text-dark\">\n                              Periodo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-periodo-curso\" disabled>\n                              <option>{{candidatura.periodo}}</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-modulo-curso\" class=\"text-dark \">\n                              Módulo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-modulo-curso\" disabled>\n                              <option>{{candidatura.modulo}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-turma-curso\" class=\"text-dark \">\n                              Turma\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-turma-curso\" disabled>\n                              <option>{{candidatura.turma}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"input-nome-responsavel-projeto\" class=\"text-dark \">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Resumo do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-projeto \" rows=\"3\"\n                            maxlength=\"500\" placeholder=\"Nome completo de cada integrante\"\n                            disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal TCC Startup -->\n              <!-- Modal Projeto Interno -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Interno'\">\n                <div class=\"modal-dialog modal-lg\" role=\" document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Interno)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"form-group\">\n                          <label for=\"curso-fiec\" class=\"text-dark\">Curso FIEC</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-curso-fiec\" disabled>\n                            <option>{{candidatura.curso}}</option>\n                          </select>\n                        </div>\n\n\n                        <div class=\"form-group\">\n                          <label for=\"nome-responsavel\" class=\"text-dark\">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-Projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            placeholder=\"Nome completo de cada integrante\" disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Interno -->\n              <!-- Modal Projeto Externo -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Externo'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Externo)\n                      </h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"solicitante\" class=\"text-dark \">Solicitante</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"solicitante\" rows=\"1\"\n                              disabled>{{candidatura.solicitante}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"tipo-solicitante\" class=\"text-dark \">Filiação</label>\n                            <select class=\"form-control text-dark font100\" id=\"select-tipo-solicitante\" disabled>\n                              <option>{{candidatura.filiacao}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"nome-responsavel\" class=\"text-dark \">Nome do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.nomeResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"telefone-responsavel\" class=\"text-dark \">Telefone do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"telefone-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.telefoneResponsavel}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col-sm-6\">\n                            <label for=\"email-responsavel\" class=\"text-dark \">E-mail do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"email-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.emailResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"remuneracao\" class=\"text-dark \">Remuneração</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"remuneracao\" rows=\"1\"\n                              disabled>R$ {{candidatura.remuneracao}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do projeto</label>\n                          <select class=\"form-control  text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            placeholder=\"Nome completo de cada integrante\" disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Externo -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Avaliados -->\n  <!-- Revisão -->\n  <div class=\"tab-pane fade\" id=\"nav-revisao\" role=\"tabpanel\" aria-labelledby=\"nav-revisao-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card bg-light border-0\">\n          <div class=\"card-header bg-light\">\n            <h4 class=\"mb-0 text-center\">\n              <a class=\"underline h2\">Em revisão</a>\n            </h4>\n          </div>\n          <div class=\"card-body bg-light table-responsive\">\n            <table class=\"table table-bordered text-dark table-hover text-center\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\">Nome do Projeto</th>\n                <th scope=\"col\">Tipo de Projeto</th>\n                <th scope=\"col\">Proposta</th>\n                <th scope=\"col\">Origem</th>\n              </thead>\n              <tbody *ngFor=\"let candidatura of emRevisao\">\n                <tr>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalEmRevisao\">\n                    {{candidatura.nomeProjeto}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalEmRevisao\">\n                    {{candidatura.tipo}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalEmRevisao\">\n                    {{candidatura.descricao}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(candidatura)\" class=\"pointer\" data-target=\"#modalEmRevisao\">\n                    {{candidatura.tipoProjeto}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let candidatura of candidaturasAtual\" class=\"modal fade\" id=\"modalEmRevisao\" tabindex=\"-1\"\n        role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n        <!-- Modal TCC Startup -->\n        <div *ngIf=\"candidatura.tipoProjeto == 'TCC Startup'\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (TCC Startup)</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\" aria-label=\"Fechar\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form class=\"font120\">\n                  <div class=\"row form-group\">\n                    <div class=\"col\">\n                      <label for=\"select-curso\" class=\"text-dark\">Curso FIEC</label>\n                      <select class=\"form-control text-dark font100\" #curso id=\"select-curso\">\n                        <option [value]=\"candidatura.curso\">{{candidatura.curso}}</option>\n                        <option value=\"Administração\">Administração</option>\n                        <option value=\"Edificações\">Edificações</option>\n                        <option value=\"Enfermagem\">Enfermagem</option>\n                        <option value=\"Informática\">Informática</option>\n                        <option value=\"Farmácia\">Farmácia</option>\n                        <option value=\"Logística\">Logística</option>\n                        <option value=\"Design de interiores\">Design de Interiores</option>\n                        <option value=\"Nutrição\">Nutrição</option>\n                        <option value=\"Cozinha\">Cozinha</option>\n                        <option value=\"Química\">Química</option>\n                        <option value=\"Tecnólogo em processos químicos\">Tecnólogo em processos químicos</option>\n                        <option value=\"Mecânica\">Mecânica</option>\n                        <option value=\"Mecatrônica\">Mecatrônica</option>\n                        <option value=\"Segurança do trabalho\">Segurança do trabalho</option>\n                        <option value=\"Analises Clínicas\">Analises Clínicas</option>\n                      </select>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"select-periodo-curso\" class=\"text-dark \">\n                        Periodo\n                      </label>\n                      <select class=\"form-control text-dark font100\" #periodo id=\"select-periodo-curso\">\n                        <option [value]=\"candidatura.periodo\">{{candidatura.periodo}}</option>\n                        <option value=\"Vespertino\">Vespertino</option>\n                        <option value=\"Noturno\">Noturno</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"row form-group\">\n                    <div class=\"col\">\n                      <label for=\"select-modulo-curso\" class=\"text-dark \">\n                        Módulo\n                      </label>\n                      <select class=\"form-control text-dark font100\" #modulo id=\"select-modulo-curso\">\n                        <option [value]=\"candidatura.modulo\">{{candidatura.modulo}}</option>\n                        <option value=\"1\">1</option>\n                        <option value=\"2\">2</option>\n                        <option value=\"3\">3</option>\n                        <option value=\"4\">4</option>\n                        <option value=\"5\">5</option>\n                        <option value=\"6\">6</option>\n                      </select>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"select-modulo-curso\" class=\"text-dark \">\n                        Modalidade\n                      </label>\n                      <select class=\"form-control text-dark font100\" #modalidade id=\"select-modulo-curso\">\n                        <option [value]=\"candidatura.modalidade\">{{candidatura.modalidade}}</option>\n                        <option value=\"Regular\">Regular</option>\n                        <option value=\"Mediotec\">Mediotec</option>\n                      </select>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"select-turma-curso\" class=\"text-dark \">\n                        Turma\n                      </label>\n                      <select class=\"form-control text-dark font100\" #turma id=\"select-turma-curso\">\n                        <option [value]=\"candidatura.turma\">{{candidatura.turma}}</option>\n                        <option value=\"1\">1</option>\n                        <option value=\"2\">2</option>\n                        <option value=\"3\">3</option>\n                        <option value=\"A\">A</option>\n                        <option value=\"B\">B</option>\n                        <option value=\"C\">C</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"nome-rojeto\" class=\"text-dark\">Nome do Projeto </label>\n                    <input type=\"text\" class=\"form-control text-dark font100\" id=\"input-nome-Projeto \" #nomeProjeto\n                      [value]=\"candidatura.nomeProjeto\" />\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"nome-rojeto\" class=\"text-dark \">Nome do Responsável</label>\n                    <input type=\"text\" class=\"form-control text-dark font100\" id=\"input-nome-responsavel-Projeto \"\n                      #nomeResponsavel [value]=\"candidatura.nomeResponsavel\" />\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto </label>\n                    <select class=\"form-control text-dark font100\" id=\"select-tipo-Projeto \" #tipo>\n                      <option [value]=\"candidatura.tipo\">{{candidatura.tipo}}</option>\n                      <option value=\"Software\">Software</option>\n                      <option value=\"Design\">Design</option>\n                      <option value=\"Jogo\">Jogo</option>\n                      <option value=\"Remédio\">Remédio</option>\n                      <option value=\"Máquina\">Máquina</option>\n                      <option value=\"Produto\">Produto</option>\n                      <option value=\"Serviço\">Serviço</option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"desc-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                    <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-Projeto \" rows=\"3\"\n                      maxlength=\"1000\" #resumo>{{candidatura.resumo}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                    <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-Projeto \" rows=\"3\"\n                      #descricao>{{candidatura.descricao}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"desc-Projeto \" class=\"text-dark \">Equipe do Projeto </label>\n                    <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-Projeto \" rows=\"3\"\n                      maxlength=\"500\" #equipe>{{candidatura.equipe}}</textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"motivo\" class=\"text-dark\">Motivo da revisão/Dicas</label>\n                    <textarea class=\"form-control text-dark font100\" id=\"motivo\" rows=\"3\"\n                      disabled>{{candidatura.revisaoReprovacao}}</textarea><small id=\"motivoHelp\"\n                      class=\"form-text text-muted\">Este campo te da dicas e o motivo do porque o projeto foi enviado\n                      para revisão!</small>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"reenviarTcc()\">Reenviar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Modal TCC Startup -->\n        <!-- Modal Projeto Interno -->\n        <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Interno'\">\n          <div class=\"modal-dialog modal-lg\" role=\" document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Interno)</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\" aria-label=\"Fechar\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form class=\"font120\">\n                  <div class=\"form-group\">\n                    <label for=\"curso-fiec\" class=\"text-dark\">Curso FIEC</label>\n                    <select class=\"form-control text-dark font100\" #curso id=\"select-curso-fiec\">\n                      <option [value]=\"candidatura.curso\">{{candidatura.curso}}</option>\n                      <option value=\"Administração\">Administração</option>\n                      <option value=\"Edificações\">Edificações</option>\n                      <option value=\"Enfermagem\">Enfermagem</option>\n                      <option value=\"Informática\">Informática</option>\n                      <option value=\"Farmácia\">Farmácia</option>\n                      <option value=\"Logística\">Logística</option>\n                      <option value=\"Design de interiores\">Design de Interiores</option>\n                      <option value=\"Nutrição\">Nutrição</option>\n                      <option value=\"Cozinha\">Cozinha</option>\n                      <option value=\"Química\">Química</option>\n                      <option value=\"Tecnólogo em processos químicos\">Tecnólogo em processos químicos</option>\n                      <option value=\"Mecânica\">Mecânica</option>\n                      <option value=\"Mecatrônica\">Mecatrônica</option>\n                      <option value=\"Segurança do trabalho\">Segurança do trabalho</option>\n                      <option value=\"Analises Clínicas\">Analises Clínicas</option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"nome-projeto\" class=\"text-dark\">Nome do Projeto</label>\n                    <input type=\"text\" class=\"form-control text-dark font100\" #nomeProjeto id=\"nome-projeto\"\n                      [value]=\"candidatura.nomeProjeto\" />\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"nome-responsavel\" class=\"text-dark\">Nome do Responsável</label>\n                    <input type=\"text\" class=\"form-control text-dark font100\" #nomeResponsavel id=\"nome-responsavel\"\n                      [value]=\"candidatura.nomeResponsavel\" />\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto </label>\n                    <select class=\"form-control text-dark font100\" #tipo id=\"select-tipo-Projeto\">\n                      <option [value]=\"candidatura.tipo\">{{candidatura.tipo}}</option>\n                      <option value=\"Software\">Software</option>\n                      <option value=\"Design\">Design</option>\n                      <option value=\"Jogo\">Jogo</option>\n                      <option value=\"Remédio\">Remédio</option>\n                      <option value=\"Máquina\">Máquina</option>\n                      <option value=\"Produto\">Produto</option>\n                      <option value=\"Serviço\">Serviço</option>\n                      <option value=\"Outro\">Outro</option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                    <textarea class=\"form-control text-dark font100\" #resumo id=\"resumo-Projeto \" rows=\"3\"\n                      maxlength=\"1000\">{{candidatura.resumo}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                    <textarea class=\"form-control text-dark font100\" #descricao id=\"desc-Projeto \"\n                      rows=\"3\">{{candidatura.descricao}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto </label>\n                    <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" #equipe rows=\"3\"\n                      maxlength=\"1000\">{{candidatura.equipe}}</textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"motivo\" class=\"text-dark\">Motivo da revisão/Dicas</label>\n                    <textarea class=\"form-control text-dark font100\" id=\"motivo\" rows=\"3\"\n                      disabled>{{candidatura.revisaoReprovacao}}</textarea><small id=\"motivoHelp\"\n                      class=\"form-text text-muted\">Este campo te da dicas e o motivo do porque o projeto foi enviado\n                      para revisão!</small>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"reenviarInterno()\">Reenviar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Modal Projeto Interno -->\n        <!-- Modal Projeto Externo -->\n        <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Externo'\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Externo)\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"fecharModalAtual\" aria-label=\"Fechar\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form class=\"font120\">\n                  <div class=\"row form-group\">\n                    <div class=\"col\">\n                      <label for=\"solicitante\" class=\"text-dark \">Solicitante </label>\n                      <input type=\"text\" #solicitante class=\"form-control text-dark font100\" id=\"input-solicitante\"\n                        [value]=\"candidatura.solicitante\">\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"tipo-solicitante\" class=\"text-dark \">Filiação</label>\n                      <select class=\"form-control text-dark font100\" #filiacao id=\"select-tipo-solicitante\">\n                        <option [value]=\"candidatura.filiacao\">{{candidatura.filiacao}}</option>\n                        <option value=\"Empresa privada\">Empresa privada</option>\n                        <option value=\"Orgão público\">Orgão Público</option>\n                        <option value=\"Associação/Comunidade\">Associação/Comunidade</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"row form-group\">\n                    <div class=\"col\">\n                      <label for=\"nome-responsavel\" class=\"text-dark \">Nome do Responsável</label>\n                      <input type=\"text\" #nomeResponsavel class=\"form-control text-dark font100\" id=\"input-nom-projeto\"\n                        [value]=\"candidatura.nomeResponsavel\">\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"telefone-responsavel\" class=\"text-dark \">Telefone do Responsável</label>\n                      <input type=\"text\" #telefoneResponsavel class=\"form-control text-dark font100\"\n                        id=\"input-nom-projeto\" [value]=\"candidatura.telefoneResponsavel\">\n                    </div>\n                  </div>\n\n                  <div class=\"row form-group\">\n                    <div class=\"col-sm-6\">\n                      <label for=\"email-responsavel\" class=\"text-dark \">E-mail do Responsável</label>\n                      <input type=\"email\" #emailResponsavel class=\"form-control text-dark font100\"\n                        id=\"input-nom-projeto\" [value]=\"candidatura.emailResponsavel\">\n                    </div>\n                  </div>\n\n                  <div class=\"row form-group\">\n                    <div class=\"col\">\n                      <label for=\"nome-rojeto\" class=\"text-dark \">Nome do projeto</label>\n                      <input type=\"text\" #nomeProjeto class=\"form-control text-dark font100\" id=\"input-nom-projeto\"\n                        [value]=\"candidatura.nomeProjeto\">\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"input-orcamentoProjeto\" class=\"text-dark \">Orçamento do projeto</label>\n                      <input type=\"number\" #orcamentoProjeto class=\"form-control text-dark font100\"\n                        id=\"input-orcamentoProjeto\" [value]=\"candidatura.orcamentoProjeto\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do projeto</label>\n                    <select class=\"form-control  text-dark font100\" #tipo id=\"select-tipo-projeto\">\n                      <option [value]=\"candidatura.tipo\">{{candidatura.tipo}}</option>\n                      <option value=\"Software\">Software</option>\n                      <option value=\"Design\">Design</option>\n                      <option value=\"Jogo\">Jogo</option>\n                      <option value=\"Remédio\">Remédio</option>\n                      <option value=\"Máquina\">Máquina</option>\n                      <option value=\"Produto\">Produto</option>\n                      <option value=\"Serviço\">Serviço</option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"res-projeto\" class=\"text-dark \">Resumo do projeto</label>\n                    <textarea class=\"form-control text-dark font100\" #resumo id=\"textarea-res-projeto\" rows=\"3\"\n                      maxlength=\"1000\">{{candidatura.resumo}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"desc-projeto\" class=\"text-dark \">Descrição do projeto</label>\n                    <textarea class=\"form-control text-dark font100\" #descricao id=\"textarea-desc-projeto\"\n                      rows=\"3\">{{candidatura.descricao}}</textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"equipe-projeto\" class=\"text-dark \">Equipe do projeto</label>\n                    <textarea class=\"form-control text-dark font100\" #equipe id=\"textarea-equipe-projeto\" rows=\"3\"\n                      maxlength=\"1000\">{{candidatura.equipe}}</textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"motivo\" class=\"text-dark\">Motivo da revisão/Dicas</label>\n                    <textarea class=\"form-control text-dark font100\" id=\"motivo\" rows=\"3\"\n                      disabled>{{candidatura.revisaoReprovacao}}</textarea>\n                    <small id=\"motivoHelp\" class=\"form-text text-muted\">Este campo te da dicas e o motivo do porque o\n                      projeto foi enviado revisão!</small>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"reenviarExterno()\">Reenviar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Modal Projeto Externo -->\n      </div>\n    </div>\n  </div>\n  <!-- /Revisão -->\n  <!-- Reprovados -->\n  <div class=\"tab-pane fade\" id=\"nav-reprovados\" role=\"tabpanel\" aria-labelledby=\"nav-reprovados-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card bg-light border-0\">\n          <div class=\"card-header bg-light\">\n            <h4 class=\"mb-0 text-center\">\n              <a class=\"underline h2\">Reprovados</a>\n            </h4>\n          </div>\n          <div class=\"card-body bg-light table-responsive\">\n            <table class=\"table text-dark table-bordered table-hover text-center\">\n              <thead class=\"thead-light\">\n                <th scope=\"col\">Nome do Projeto</th>\n                <th scope=\"col\">Motivo da reprovação</th>\n                <th scope=\"col\">Proposta</th>\n                <th scope=\"col\">Origem</th>\n              </thead>\n              <tbody *ngFor=\"let projetos of reprovados\">\n                <tr>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\" data-target=\"#modalReprovados\">\n                    {{projetos.nomeProjeto}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\" data-target=\"#modalReprovados\">\n                    {{projetos.revisaoReprovacao}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\" data-target=\"#modalReprovados\">\n                    {{projetos.descricao}}\n                  </td>\n                  <td data-toggle=\"modal\" (click)=\"modal(projetos)\" class=\"pointer\" data-target=\"#modalReprovados\">\n                    {{projetos.tipoProjeto}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <div *ngFor=\"let candidatura of candidaturasAtual\" class=\"modal fade\" id=\"modalReprovados\" tabindex=\"-1\"\n              role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n              <!-- Modal TCC Startup -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'TCC Startup'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (TCC Startup)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-curso\" class=\"text-dark\">Curso FIEC</label>\n                            <select class=\"form-control text-dark font100\" id=\" select-curso\" disabled>\n                              <option>{{candidatura.curso}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-periodo-curso\" class=\"text-dark\">\n                              Periodo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-periodo-curso\" disabled>\n                              <option>{{candidatura.periodo}}</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"select-modulo-curso\" class=\"text-dark \">\n                              Módulo\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-modulo-curso\" disabled>\n                              <option>{{candidatura.modulo}}</option>\n                            </select>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"select-turma-curso\" class=\"text-dark \">\n                              Turma\n                            </label>\n                            <select class=\"form-control text-dark font100\" id=\"select-turma-curso\" disabled>\n                              <option>{{candidatura.turma}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"input-nome-responsavel-projeto\" class=\"text-dark \">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Resumo do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-projeto \" rows=\"3\"\n                            maxlength=\"500\" placeholder=\"Nome completo de cada integrante\"\n                            disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal TCC Startup -->\n              <!-- Modal Projeto Interno -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Interno'\">\n                <div class=\"modal-dialog modal-lg\" role=\" document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Interno)</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"form-group\">\n                          <label for=\"curso-fiec\" class=\"text-dark\">Curso FIEC</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-curso-fiec\" disabled>\n                            <option>{{candidatura.curso}}</option>\n                          </select>\n                        </div>\n\n\n                        <div class=\"form-group\">\n                          <label for=\"nome-responsavel\" class=\"text-dark\">Nome do Responsável</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                            maxlength=\"1000\" disabled>{{candidatura.nomeResponsavel}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto</label>\n                          <select class=\"form-control text-dark font100\" id=\"select-tipo-Projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            placeholder=\"Nome completo de cada integrante\" disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Interno -->\n              <!-- Modal Projeto Externo -->\n              <div *ngIf=\"candidatura.tipoProjeto == 'Projeto Externo'\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"ModalLabel\">{{candidatura.nomeProjeto}} (Projeto Externo)\n                      </h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <form class=\"font120\">\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"solicitante\" class=\"text-dark \">Solicitante</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"solicitante\" rows=\"1\"\n                              disabled>{{candidatura.solicitante}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"tipo-solicitante\" class=\"text-dark \">Filiação</label>\n                            <select class=\"form-control text-dark font100\" id=\"select-tipo-solicitante\" disabled>\n                              <option>{{candidatura.filiacao}}</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col\">\n                            <label for=\"nome-responsavel\" class=\"text-dark \">Nome do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"nome-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.nomeResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"telefone-responsavel\" class=\"text-dark \">Telefone do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"telefone-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.telefoneResponsavel}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"row form-group\">\n                          <div class=\"col-sm-6\">\n                            <label for=\"email-responsavel\" class=\"text-dark \">E-mail do Responsável</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"email-responsavel\" rows=\"1\"\n                              disabled>{{candidatura.emailResponsavel}}</textarea>\n                          </div>\n                          <div class=\"col\">\n                            <label for=\"remuneracao\" class=\"text-dark \">Remuneração</label>\n                            <textarea class=\"form-control text-dark font100\" id=\"remuneracao\" rows=\"1\"\n                              disabled>R$ {{candidatura.remuneracao}}</textarea>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do projeto</label>\n                          <select class=\"form-control  text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                            <option>{{candidatura.tipo}}</option>\n                          </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                          <textarea class=\"form-control text-dark font100\" id=\"resumo-Projeto \" rows=\"3\"\n                            maxlength=\"1000\" placeholder=\"máx. 1000 caraceteres\"\n                            disabled>{{candidatura.resumo}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"desc-Projeto\" rows=\"3\"\n                            placeholder=\"Detalhes da proposta\" disabled>{{candidatura.descricao}}</textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                          <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" rows=\"3\" maxlength=\"1000\"\n                            placeholder=\"Nome completo de cada integrante\" disabled>{{candidatura.equipe}}</textarea>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Modal Projeto Externo -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Reprovados -->\n</div>"

/***/ }),

/***/ "./src/app/avaliacao/avaliacao.component.ts":
/*!**************************************************!*\
  !*** ./src/app/avaliacao/avaliacao.component.ts ***!
  \**************************************************/
/*! exports provided: AvaliacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliacaoComponent", function() { return AvaliacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);

// tslint:disable: space-before-function-paren only-arrow-functions no-string-literal




var AvaliacaoComponent = /** @class */ (function () {
    function AvaliacaoComponent(router, service) {
        this.router = router;
        this.service = service;
        // /UPDATE TCC VARIAVEIS
        this.revisao = {
            leis: false,
            objetivo_info: false,
            orcamento: false,
            outro_recomen: null
        };
        this.candidaturas = [];
        this.emRevisao = [];
        this.emDesenvolvimento = [];
        this.candidaturasAtual = [];
        this.reprovados = [];
    }
    AvaliacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
            this.router.navigate([""]);
        }
        else {
            this.tipoUser = localStorage.getItem("0000");
        }
        // SELECIONA OS PROJETOS REPROVADOS
        this.service.selectCandidaturasReprovados().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (projetos) {
                    _this.reprovados.push(projetos);
                });
            }
        });
        // /SELECIONA OS PROJETOS REPROVADOS
        // SELECIONA OS PROJETOS QUE ESTÃO EM AVALIÇÃO
        this.service.selectCandidaturas().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (candidatura) {
                    _this.candidaturas.push(candidatura);
                });
            }
        });
        // /SELECIONA OS PROJETOS QUE ESTÃO EM AVALIÇÃO
        // SELECIONA OS PROJETO QUE ESTÃO EM DESENVOLVIMENTO
        this.service.selectCandidaturasEmDesenvolvimento().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (projetos) {
                    var date = projetos.dataAprovacao.split("T");
                    projetos.dataAprovacao = date[0];
                    _this.emDesenvolvimento.push(projetos);
                });
            }
        });
        // /SELECIONA OS PROJETO QUE ESTÃO EM DESENVOLVIMENTO
        // SELECIONA OS PROJETOS QUE FORAM ENVIADOS PARA REVISÃO
        this.service.selectCandidaturasEmRevisao().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (projetos) {
                    _this.emRevisao.push(projetos);
                });
            }
        });
        // /SELECIONA OS PROJETOS QUE FORAM ENVIADOS PARA REVISÃO
    };
    AvaliacaoComponent.prototype.sair = function () {
        localStorage.removeItem("010101");
        localStorage.removeItem("0000");
        this.router.navigate([""]);
    };
    AvaliacaoComponent.prototype.modal = function (candidatura) {
        this.candidaturasAtual = [];
        this.candidaturasAtual.push(candidatura);
        console.log("candidaturaModal");
        console.log(this.candidaturasAtual);
    };
    AvaliacaoComponent.prototype.modalRevisao = function () {
        document.getElementById("fecharModalAtual").click();
        document.getElementById("modalRevisaobtn").click();
    };
    AvaliacaoComponent.prototype.modalReprovacao = function () {
        document.getElementById("fecharModalAtual").click();
        document.getElementById("modalReprovacaobtn").click();
    };
    AvaliacaoComponent.prototype.reprovarCandidatura = function (candidatura) {
        var _this = this;
        if (this.revisao.outro_recomen != null) {
            this.revisao.outro_recomen = this.revisao.outro_recomen.trim();
        }
        if (this.revisao.outro_recomen) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Você tem certeza?",
                text: 'Ao apertar "OK" você irá mandar o reprovar o projeto',
                icon: "warning",
                dangerMode: true,
                buttons: ["Não", true]
            }).then(function (willReprove) {
                if (willReprove) {
                    var data = {
                        revisao: _this.revisao.outro_recomen.trim(),
                        id: candidatura.id
                    };
                    _this.service.reprovarCandidatura(data).subscribe(function (res) {
                        if (res.json().status !== 200) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel reprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                                res.json().status +
                                ", erro: " +
                                res.json().result.code +
                                ": " +
                                res.json().result.errno, "error");
                            console.log(res);
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Projeto reprovado", "success").then(function () {
                                window.location.reload();
                            });
                        }
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Preencha todos os campos", "warning");
        }
    };
    AvaliacaoComponent.prototype.aprovarCandidatura = function (candidatura) {
        var _this = this;
        console.log(candidatura);
        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "Você tem certeza?",
            // tslint:disable-next-line: quotemark
            text: "Ao apertar 'OK' você irá aprovar o projeto, essa ação é irreversível",
            icon: "warning",
            dangerMode: true,
            buttons: ["Não", true]
        }).then(function (willAprove) {
            if (willAprove) {
                var data = {
                    id: candidatura.id,
                    date: new Date()
                };
                _this.service.aproveCandidatura(data).subscribe(function (res) {
                    if (res.json().status !== 200) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel aprovar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                            res.json().status +
                            ", erro: " +
                            res.json().result.code +
                            ": " +
                            res.json().result.errno, "error");
                        console.log(res);
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Projeto aprovado com sucesso", "success").then(function () {
                            window.location.reload();
                        });
                    }
                });
            }
        });
    };
    AvaliacaoComponent.prototype.enviarRevisao = function (candidatura) {
        var _this = this;
        if (this.revisao.outro_recomen != null) {
            this.revisao.outro_recomen = this.revisao.outro_recomen.trim();
        }
        if (this.revisao.leis ||
            this.revisao.objetivo_info ||
            this.revisao.orcamento ||
            this.revisao.outro_recomen) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Você tem certeza?",
                text: 'Ao apertar "OK" você irá mandar o projeto para a revisão',
                icon: "warning",
                dangerMode: true,
                buttons: ["Não", true]
            }).then(function (willAprove) {
                if (willAprove) {
                    var texto = "";
                    if (_this.revisao.leis == true) {
                        texto += "Infringe leis";
                        if (_this.revisao.objetivo_info == true) {
                            texto +=
                                ", objetivo do projeto incompreendido/Poucas informações";
                            if (_this.revisao.orcamento == true) {
                                texto += ", valor do orçamento fora dos parâmetros";
                                if (_this.revisao.outro_recomen) {
                                    texto += ", " + _this.revisao.outro_recomen;
                                }
                            }
                        }
                        else if (_this.revisao.orcamento == true) {
                            texto += ", valor do orçamento fora dos parâmetros";
                            if (_this.revisao.outro_recomen) {
                                texto += ", " + _this.revisao.outro_recomen;
                            }
                        }
                        else if (_this.revisao.outro_recomen) {
                            texto += ", " + _this.revisao.outro_recomen;
                        }
                    }
                    else if (_this.revisao.objetivo_info == true) {
                        texto += "Objetivo do projeto incompreendido/Poucas informações";
                        if (_this.revisao.orcamento == true) {
                            texto += ", valor do orçamento fora dos parâmetros";
                            if (_this.revisao.outro_recomen) {
                                texto += ", " + _this.revisao.outro_recomen;
                            }
                        }
                        else if (_this.revisao.outro_recomen) {
                            texto += ", " + _this.revisao.outro_recomen;
                        }
                    }
                    else if (_this.revisao.orcamento == true) {
                        texto += "Valor do orçamento fora dos parâmetros";
                        if (_this.revisao.outro_recomen) {
                            texto += ", " + _this.revisao.outro_recomen;
                        }
                    }
                    else if (_this.revisao.outro_recomen) {
                        texto += _this.revisao.outro_recomen;
                    }
                    var data = {
                        revisao: texto,
                        id: candidatura.id
                    };
                    _this.service.revisaoCandidatura(data).subscribe(function (res) {
                        if (res.json().status !== 200) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel enviar o projeto para revisão (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                                res.json().status +
                                ", erro: " +
                                res.json().result.code +
                                ": " +
                                res.json().result.errno, "error");
                            console.log(res);
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Projeto enviado para revisão", "success").then(function () {
                                window.location.reload();
                            });
                        }
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Preencha todos os campos", "warning");
        }
    };
    AvaliacaoComponent.prototype.reenviarExterno = function () {
        var data = {
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
        if (data.id &&
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
            data.equipe) {
            this.service.reenviarExterno(data).subscribe(function (res) {
                if (res.json().status !== 200) {
                    console.log(res.json().result);
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                    console.log(res);
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Candidatura reenviada com sucesso", "success").then(function () {
                        window.location.reload();
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Preencha todos os campos", "warning");
        }
    };
    AvaliacaoComponent.prototype.reenviarInterno = function () {
        if (this.curso.nativeElement.value &&
            this.nomeProjeto.nativeElement.value &&
            this.nomeResponsavel.nativeElement.value &&
            this.tipo.nativeElement.value &&
            this.resumo.nativeElement.value &&
            this.resumo.nativeElement.value &&
            this.descricao.nativeElement.value &&
            this.equipe.nativeElement.value) {
            var data = {
                id: this.candidaturasAtual[0].id,
                curso: this.curso.nativeElement.value,
                nomeProjeto: this.nomeProjeto.nativeElement.value,
                nomeResponsavel: this.nomeResponsavel.nativeElement.value,
                tipo: this.tipo.nativeElement.value,
                resumo: this.resumo.nativeElement.value,
                descricao: this.descricao.nativeElement.value,
                equipe: this.equipe.nativeElement.value
            };
            this.service.reenviarInterno(data).subscribe(function (res) {
                if (res.json().status !== 200) {
                    console.log(res.json().result);
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                    console.log(res);
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Candidatura reenviada com sucesso", "success").then(function () {
                        window.location.reload();
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Preencha todos os campos", "warning");
        }
    };
    AvaliacaoComponent.prototype.reenviarTcc = function () {
        if (this.curso.nativeElement.value &&
            this.periodo.nativeElement.value &&
            this.modulo.nativeElement.value &&
            this.turma.nativeElement.value &&
            this.modalidade.nativeElement.value &&
            this.nomeProjeto.nativeElement.value &&
            this.tipo.nativeElement.value &&
            this.resumo.nativeElement.value &&
            this.descricao.nativeElement.value &&
            this.equipe.nativeElement.value &&
            this.nomeResponsavel.nativeElement.value) {
            var data = {
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
            this.service.reenviarTcc(data).subscribe(function (res) {
                if (res.json().status !== 200) {
                    console.log(res.json().result);
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel reenviar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                    console.log(res);
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Candidatura reenviada com sucesso", "success").then(function () {
                        window.location.reload();
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Preencha todos os campos", "warning");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("solicitante"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "solicitante", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("filiacao"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "filiacao", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nomeResponsavel"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "nomeResponsavel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("telefoneResponsavel"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "telefoneResponsavel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("emailResponsavel"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "emailResponsavel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nomeProjeto"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "nomeProjeto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("orcamentoProjeto"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "orcamentoProjeto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tipo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "tipo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("resumo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "resumo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("descricao"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "descricao", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("descricao"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "equipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("curso"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "curso", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("periodo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "periodo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modulo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "modulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("turma"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "turma", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalidade"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AvaliacaoComponent.prototype, "modalidade", void 0);
    AvaliacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-avaliacao",
            template: __webpack_require__(/*! ./avaliacao.component.html */ "./src/app/avaliacao/avaliacao.component.html"),
            styles: [__webpack_require__(/*! ./avaliacao.component.css */ "./src/app/avaliacao/avaliacao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], AvaliacaoComponent);
    return AvaliacaoComponent;
}());



/***/ }),

/***/ "./src/app/backend.service.ts":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var URL = "http://localhost:3006"; // DEV
var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    // LOGIN-----------------------------------------------\\
    BackendService.prototype.logar = function (data) {
        return this.http.post(URL + "/login", data);
    };
    // ----------------------------------------------------\\
    // EVENTO---------------------------------------------\\
    BackendService.prototype.cadastroEvento = function (data) {
        console.log(data);
        return this.http.post(URL + "/cadastroEvento", data);
    };
    BackendService.prototype.deleteEvento = function (id) {
        return this.http.delete(URL + "/deleteEvento/" + id);
    };
    BackendService.prototype.selectEventosFiec1 = function () {
        return this.http.get(URL + "/selectEventosFiec1");
    };
    BackendService.prototype.selectEventosFiec2 = function () {
        return this.http.get(URL + "/selectEventosFiec2");
    };
    // ----------------------------------------------------\\
    // CANDIDATURA----------------------------------------\\
    BackendService.prototype.candidaturaTCC = function (data) {
        return this.http.post(URL + "/candidaturaTCC", data);
    };
    BackendService.prototype.candidaturaINTERNO = function (data) {
        return this.http.post(URL + "/candidaturaINTERNO", data);
    };
    BackendService.prototype.candidaturaEXTERNO = function (data) {
        return this.http.post(URL + "/candidaturaEXTERNO", data);
    };
    // ----------------------------------------------------\\
    // AVALIAÇÃO-------------------------------------------\\
    BackendService.prototype.selectCandidaturas = function () {
        return this.http.get(URL + "/selectCandidaturas");
    };
    BackendService.prototype.selectCandidaturasEmDesenvolvimento = function () {
        return this.http.get(URL + "/selectCandidaturasEmDesenvolvimento");
    };
    BackendService.prototype.selectCandidaturasEmRevisao = function () {
        return this.http.get(URL + "/selectCandidaturasEmRevisao");
    };
    BackendService.prototype.selectCandidaturasReprovados = function () {
        return this.http.get(URL + "/selectCandidaturasReprovados");
    };
    BackendService.prototype.deleteCandidatura = function (id) {
        return this.http.delete(URL + "/deleteCandidatura/" + id);
    };
    BackendService.prototype.aproveCandidatura = function (id) {
        return this.http.put(URL + "/aproveCandidatura", id);
    };
    BackendService.prototype.revisaoCandidatura = function (data) {
        return this.http.put(URL + "/revisaoCandidatura", data);
    };
    BackendService.prototype.reprovarCandidatura = function (data) {
        return this.http.put(URL + "/reprovacaoCandidatura", data);
    };
    BackendService.prototype.reenviarTcc = function (data) {
        return this.http.put(URL + "/reenviarTcc", data);
    };
    BackendService.prototype.reenviarExterno = function (data) {
        return this.http.put(URL + "/reenviarExterno", data);
    };
    BackendService.prototype.reenviarInterno = function (data) {
        return this.http.put(URL + "/reenviarInterno", data);
    };
    // ----------------------------------------------------\\
    BackendService.prototype.upload = function (files, id, etapa, idusuario) {
        var formData = new FormData();
        files.forEach(function (file) {
            formData.append("file", file, file.name);
        });
        formData.append("id", id);
        formData.append("etapa", etapa);
        formData.append("idusuario", idusuario);
        // Form data serve para enviar o arquivo via http, o formData.append serve para que possamos
        //adicionar mais informações(no caso as que vamos adicionar no banco) dentro do FormData
        return this.http.post(URL + "/upload", formData);
    };
    BackendService.prototype.download = function (data) {
        return this.http.get(URL + "/download/" + data.id + "/" + data.etapa + "/" + data.nomeArquivo, {
            responseType: 3 // Define o tipo de resposta que vai nos retornar, no caso o tipo é Blob
        });
    };
    BackendService.prototype.selectAllDocumentacao = function (id) {
        return this.http.get(URL + "/selectAllDocumentacao/" + id);
    };
    BackendService.prototype.excluirArquivo = function (id, caminho) {
        return this.http.delete(URL + "/excluirArquivo/" + id + "/" + caminho);
    };
    // ----------------------------------------------------\\
    BackendService.prototype.uploadModelo = function (files, etapa) {
        var formData = new FormData();
        files.forEach(function (file) {
            formData.append("file", file, file.name);
            console.log(file.name);
        });
        formData.append("etapa", etapa);
        // Form data serve para enviar o arquivo via http, o formData.append serve para que possamos
        //adicionar mais informações(no caso as que vamos adicionar no banco) dentro do FormData
        return this.http.post(URL + "/uploadModelo", formData);
    };
    BackendService.prototype.downloadModelo = function (id) {
        return this.http.get(URL + "/downloadModelo/" + id, {
            responseType: 3 // Define o tipo de resposta que vai nos retornar, no caso o tipo é Blob
        });
    };
    BackendService.prototype.selectAllmodelos = function () {
        return this.http.get(URL + "/selectAllmodelos");
    };
    BackendService.prototype.excluirModelo = function (id, caminho) {
        return this.http.delete(URL + "/excluirModelo/" + id + "/" + caminho);
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/candidatura-main/candidatura-main.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/candidatura-main/candidatura-main.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0dXJhLW1haW4vY2FuZGlkYXR1cmEtbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidatura-main/candidatura-main.component.html":
/*!******************************************************************!*\
  !*** ./src/app/candidatura-main/candidatura-main.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"home\">CITEC</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n      aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/home' ]\">Agendas</a>\n        <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/candidatura' ]\">Candidatura<span\n            class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/avaliacao' ]\">Avaliação</a>\n        <a class=\"nav-item nav-link\" href=\"http://cronograma.fiecdev.kinghost.net/#/login\">Gestão de projetos</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/processos' ]\">Processos</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/projetos' ]\">Projetos</a>\n        <a (click)=\"sair()\" class=\"material-icons nav-item nav-link\">\n          exit_to_app\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<nav>\n  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\" style=\"justify-content: center;\">\n    <a class=\"nav-item nav-link active\" id=\"nav-TCC-Startup-tab\" data-toggle=\"tab\" href=\"#nav-TCC-Startup\" role=\"tab\"\n      aria-controls=\"nav-TCC-Startup\" aria-selected=\"true\">TCC Startup</a>\n    <a class=\"nav-item nav-link\" id=\"nav-interno-tab\" data-toggle=\"tab\" href=\"#nav-interno\" role=\"tab\"\n      aria-controls=\"nav-interno \" aria-selected=\"false\">Projeto Interno</a>\n    <a class=\"nav-item nav-link\" id=\"nav-externo-tab\" data-toggle=\"tab\" href=\"#nav-externo\" role=\"tab\"\n      aria-controls=\"nav-externo\" aria-selected=\"false\">Projeto Externo</a>\n  </div>\n</nav>\n<!-- MODAIS -->\n<div class=\"tab-content mt-4\" id=\"nav-tabContent\" style=\"justify-content: center;\">\n  <!-- TCC Startup -->\n  <div class=\"tab-pane fade show active\" id=\"nav-TCC-Startup\" role=\"tabpanel\" aria-labelledby=\"nav-TCC-Startup-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card bg-light text-dark border-0\">\n          <div class=\"card-header text-center bg-light h2\">TCC Startup</div>\n          <div class=\"card-body bg-light some-padding\">\n            <form class=\"font120\">\n              <div class=\"row form-group\">\n                <div class=\"col\">\n                  <label for=\"select-curso\" class=\"text-dark\">Curso FIEC</label>\n                  <select class=\"form-control text-dark font100\" [(ngModel)]=\"tcc.curso\"\n                    [ngModelOptions]=\"{standalone: true}\" id=\" select-curso\">\n                    <option value=\"Administração\">Administração</option>\n                    <option value=\"Edificações\">Edificações</option>\n                    <option value=\"Enfermagem\">Enfermagem</option>\n                    <option value=\"Informática\">Informática</option>\n                    <option value=\"Farmácia\">Farmácia</option>\n                    <option value=\"Logística\">Logística</option>\n                    <option value=\"Design de interiores\">Design de Interiores</option>\n                    <option value=\"Nutrição\">Nutrição</option>\n                    <option value=\"Cozinha\">Cozinha</option>\n                    <option value=\"Química\">Química</option>\n                    <option value=\"Tecnólogo em processos químicos\">Tecnólogo em processos químicos</option>\n                    <option value=\"Mecânica\">Mecânica</option>\n                    <option value=\"Mecatrônica\">Mecatrônica</option>\n                    <option value=\"Segurança do trabalho\">Segurança do trabalho</option>\n                    <option value=\"Analises Clínicas\">Analises Clínicas</option>\n                  </select>\n                </div>\n                <div class=\"col\">\n                  <label for=\"select-periodo-curso\" class=\"text-dark \">\n                    Periodo\n                  </label>\n                  <select class=\"form-control text-dark font100\" [(ngModel)]=\"tcc.periodo\"\n                    [ngModelOptions]=\"{standalone: true}\" id=\"select-periodo-curso\">\n                    <option value=\"Vespertino\">Vespertino</option>\n                    <option value=\"Noturno\">Noturno</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col\">\n                  <label for=\"select-modulo-curso\" class=\"text-dark \">\n                    Módulo\n                  </label>\n                  <select class=\"form-control text-dark font100\" [(ngModel)]=\"tcc.modulo\"\n                    [ngModelOptions]=\"{standalone: true}\" id=\"select-modulo-curso\">\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                    <option value=\"4\">4</option>\n                    <option value=\"5\">5</option>\n                    <option value=\"6\">6</option>\n                  </select>\n                </div>\n                <div class=\"col\">\n                  <label for=\"select-turma-curso\" class=\"text-dark \">\n                    Turma\n                  </label>\n                  <select class=\"form-control text-dark font100\" [(ngModel)]=\"tcc.turma\"\n                    [ngModelOptions]=\"{standalone: true}\" id=\"select-turma-curso\">\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                    <option value=\"A\">A</option>\n                    <option value=\"B\">B</option>\n                    <option value=\"C\">C</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div>\n                  <!-- [(ngModel)]=\"tcc\" [ngModelOptions]=\"{standalone: true}\" -->\n                  <label class=\"text-dark \">\n                    Modalidade\n                  </label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" class=\"custom-control-input btn-dark\" name=\"radio-group-modalidade-curso\"\n                    id=\"radio-modalidade-regular\" value=\"Regular\" #regular>\n                  <label class=\"custom-control-label\" for=\"radio-modalidade-regular\">Regular</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" class=\"custom-control-input\" id=\"radio-modalidade-mediotec\"\n                    name=\"radio-group-modalidade-curso\" value=\"Mediotec\" #mediotec>\n                  <label class=\"custom-control-label\" for=\"radio-modalidade-mediotec\">Mediotec</label>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"nome-rojeto\" class=\"text-dark\">Nome do Projeto </label>\n                <input type=\"text\" class=\"form-control text-dark font100\" id=\"input-nome-Projeto \"\n                  placeholder=\"Digite o nome do Projeto\" [(ngModel)]=\"tcc.nomeProjeto\"\n                  [ngModelOptions]=\"{standalone: true}\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"nome-rojeto\" class=\"text-dark \">Nome do Responsável</label>\n                <input type=\"text\" class=\"form-control text-dark font100\" id=\"input-nome-responsavel-Projeto \"\n                  placeholder=\"Digite o nome do responsável geral do Projeto \" [(ngModel)]=\"tcc.nomeResponsavel\"\n                  [ngModelOptions]=\"{standalone: true}\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto </label>\n                <select class=\"form-control text-dark font100\" id=\"select-tipo-Projeto \" [(ngModel)]=\"tcc.tipo\"\n                  [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"Software\">Software</option>\n                  <option value=\"Design\">Design</option>\n                  <option value=\"Jogo\">Jogo</option>\n                  <option value=\"Remédio\">Remédio</option>\n                  <option value=\"Máquina\">Máquina</option>\n                  <option value=\"Produto\">Produto</option>\n                  <option value=\"Serviço\">Serviço</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"desc-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-Projeto \" rows=\"3\" maxlength=\"1000\"\n                  placeholder=\"máx. 1000 caraceteres\" [(ngModel)]=\"tcc.resumo\" [ngModelOptions]=\"{standalone:\n                  true}\"></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-Projeto \" rows=\"3\"\n                  placeholder=\"Detalhes da proposta\" [(ngModel)]=\"tcc.descricao\"\n                  [ngModelOptions]=\"{standalone: true}\"></textarea>\n                <!-- nao quebrar a linha senao textarea sera preenchida com espaços em branco e\n                                                     o placeholder não aparecerá -->\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"desc-Projeto \" class=\"text-dark \">Equipe do Projeto </label>\n                <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-Projeto \" rows=\"3\" maxlength=\"500\"\n                  placeholder=\"Nome completo de cada integrante\" [(ngModel)]=\"tcc.equipe\" [ngModelOptions]=\"{standalone:\n                  true}\"></textarea>\n                <!-- nao quebrar a linha senao textarea sera preenchida com espaços em branco e\n                                                     o placeholder não aparecerá -->\n              </div>\n            </form>\n          </div> <!-- / card-body -->\n        </div> <!-- / card  -->\n      </div>\n      <div class=\"d-flex justify-content-end mt-4 mb-4\">\n        <div class=\"mr-3\">\n          <button type=\"button\" class=\"btn btn-light border\">\n            Cancelar\n          </button>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"candidaturaTCC()\" class=\"btn btn-light border\">\n            Confirmar\n          </button>\n        </div>\n      </div>\n    </div> <!-- / container -->\n  </div>\n  <!-- /TCC Startup -->\n  <!-- Projeto interno -->\n  <div class=\"tab-pane fade\" id=\"nav-interno\" role=\"tabpanel\" aria-labelledby=\"nav-interno-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card-header text-center bg-light h2\">Projeto interno </div>\n        <div class=\"card bg-light border-0\">\n          <div class=\"card-body bg-light\">\n            <form class=\"font120\">\n              <div class=\"form-group\">\n                <label for=\"curso-fiec\" class=\"text-dark\">Curso FIEC</label>\n                <select class=\"form-control text-dark font100\" [(ngModel)]=\"interno.curso\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"select-curso-fiec\">\n                  <option value=\"Administração\">Administração</option>\n                  <option value=\"Edificações\">Edificações</option>\n                  <option value=\"Enfermagem\">Enfermagem</option>\n                  <option value=\"Informática\">Informática</option>\n                  <option value=\"Farmácia\">Farmácia</option>\n                  <option value=\"Logística\">Logística</option>\n                  <option value=\"Design de interiores\">Design de Interiores</option>\n                  <option value=\"Nutrição\">Nutrição</option>\n                  <option value=\"Cozinha\">Cozinha</option>\n                  <option value=\"Química\">Química</option>\n                  <option value=\"Tecnólogo em processos químicos\">Tecnólogo em processos químicos</option>\n                  <option value=\"Mecânica\">Mecânica</option>\n                  <option value=\"Mecatrônica\">Mecatrônica</option>\n                  <option value=\"Segurança do trabalho\">Segurança do trabalho</option>\n                  <option value=\"Analises Clínicas\">Analises Clínicas</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"nome-projeto\" class=\"text-dark\">Nome do Projeto</label>\n                <input type=\"text\" class=\"form-control text-dark font100\" [(ngModel)]=\"interno.nomeProjeto\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"nome-projeto\" placeholder=\"Nome do Projeto\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"nome-responsavel\" class=\"text-dark\">Nome do Responsável</label>\n                <input type=\"text\" class=\"form-control text-dark font100\" [(ngModel)]=\"interno.nomeResponsavel\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"nome-responsavel\"\n                  placeholder=\"Nome do responsável geral do Projeto\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"tipo-Projeto \" class=\"text-dark \">Tipo do Projeto </label>\n                <select class=\"form-control text-dark font100\" [(ngModel)]=\"interno.tipo\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"select-tipo-Projeto\">\n                  <option value=\"Software\">Software</option>\n                  <option value=\"Design\">Design</option>\n                  <option value=\"Jogo\">Jogo</option>\n                  <option value=\"Remédio\">Remédio</option>\n                  <option value=\"Máquina\">Máquina</option>\n                  <option value=\"Produto\">Produto</option>\n                  <option value=\"Serviço\">Serviço</option>\n                  <option value=\"Outro\">Outro</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"resumo-Projeto \" class=\"text-dark \">Resumo do Projeto </label>\n                <textarea class=\"form-control text-dark font100\" [(ngModel)]=\"interno.resumo\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"resumo-Projeto \" rows=\"3\" maxlength=\"1000\"\n                  placeholder=\"máx. 1000 caraceteres\"></textarea>\n                <!-- nao quebrar a linha senao textarea sera preenchida com espaços em branco e\n                                                                 o placeholder não aparecerá -->\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"desc-Projeto \" class=\"text-dark \">Descrição do Projeto</label>\n                <textarea class=\"form-control text-dark font100\" [(ngModel)]=\"interno.descricao\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"desc-Projeto \" rows=\"3\"\n                  placeholder=\"Detalhes da proposta\"></textarea>\n                <!-- nao quebrar a linha senao textarea sera preenchida com espaços em branco e\n                                                                    o placeholder não aparecerá -->\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"equipe-Projeto \" class=\"text-dark \">Equipe do Projeto </label>\n                <textarea class=\"form-control text-dark font100\" id=\"equipe-Projeto\" [(ngModel)]=\"interno.equipe\"\n                  [ngModelOptions]=\"{standalone: true}\" rows=\"3\" maxlength=\"1000\"\n                  placeholder=\"Nome completo de cada integrante\"></textarea>\n                <!-- nao quebrar a linha senao textarea sera preenchida com espaços em branco e\n                                                                 o placeholder não aparecerá -->\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"d-flex justify-content-end mt-4 mb-4\">\n        <div class=\"mr-3\">\n          <button type=\"button\" class=\"btn btn-light border\">\n            Cancelar\n          </button>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"candidaturaINTERNO()\" class=\"btn btn-light border\">\n            Confirmar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Projeto interno -->\n  <!-- Projeto externo -->\n  <div class=\"tab-pane fade\" id=\"nav-externo\" role=\"tabpanel\" aria-labelledby=\"nav-externo-tab\">\n    <div class=\"container\">\n      <div class=\"shadow p-1 mb-1 bg-light\">\n        <div class=\"card-header text-center bg-light h2\">Projeto Externo</div>\n        <div class=\"card-body bg-light\">\n          <form class=\"font120\">\n            <div class=\"row form-group\">\n              <div class=\"col\">\n                <label for=\"solicitante\" class=\"text-dark \">Solicitante</label>\n                <input type=\"text\" [(ngModel)]=\"externo.solicitante\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-solicitante\" placeholder=\"Nome da instituição\">\n              </div>\n              <div class=\"col\">\n                <label for=\"tipo-solicitante\" class=\"text-dark \">Filiação</label>\n                <select class=\"form-control text-dark font100\" [(ngModel)]=\"externo.filiacao\"\n                  [ngModelOptions]=\"{standalone: true}\" id=\"select-tipo-solicitante\">\n                  <option value=\"Empresa privada\">Empresa privada</option>\n                  <option value=\"Orgão público\">Orgão Público</option>\n                  <option value=\"Associação/Comunidade\">Associação/Comunidade</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col\">\n                <label for=\"nome-responsavel\" class=\"text-dark \">Nome do Responsável</label>\n                <input type=\"text\" [(ngModel)]=\"externo.nomeResponsavel\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-nom-projeto\"\n                  placeholder=\"Nome do responsável pelo projeto\">\n              </div>\n              <div class=\"col\">\n                <label for=\"telefone-responsavel\" class=\"text-dark \">Telefone do Responsável</label>\n                <input type=\"text\" [(ngModel)]=\"externo.telefoneResponsavel\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-nom-projeto\"\n                  placeholder=\"Número de telefone do responsável pelo projeto\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-sm-6\">\n                <label for=\"email-responsavel\" class=\"text-dark \">E-mail do Responsável</label>\n                <input type=\"email\" [(ngModel)]=\"externo.emailResponsavel\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-nom-projeto\"\n                  placeholder=\"Endereço de e-mail do responsável pelo projeto\">\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col\">\n                <label for=\"nome-rojeto\" class=\"text-dark \">Nome do projeto</label>\n                <input type=\"text\" [(ngModel)]=\"externo.nomeProjeto\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-nom-projeto\" placeholder=\"Nome do projeto\">\n              </div>\n              <div class=\"col\">\n                <label for=\"input-orcamentoProjeto\" class=\"text-dark \">Orçamento do projeto</label>\n                <input type=\"number\" [(ngModel)]=\"externo.orcamentoProjeto\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control text-dark font100\" id=\"input-orcamentoProjeto\" placeholder=\"R$ 9999,99\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do projeto</label>\n              <select class=\"form-control  text-dark font100\" [(ngModel)]=\"externo.tipo\"\n                [ngModelOptions]=\"{standalone: true}\" id=\"select-tipo-projeto\">\n                <option value=\"Software\">Software</option>\n                <option value=\"Design\">Design</option>\n                <option value=\"Jogo\">Jogo</option>\n                <option value=\"Remédio\">Remédio</option>\n                <option value=\"Máquina\">Máquina</option>\n                <option value=\"Produto\">Produto</option>\n                <option value=\"Serviço\">Serviço</option>\n              </select>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"res-projeto\" class=\"text-dark \">Resumo do projeto</label>\n              <textarea class=\"form-control text-dark font100\" [(ngModel)]=\"externo.resumo\"\n                [ngModelOptions]=\"{standalone: true}\" id=\"textarea-res-projeto\" rows=\"3\" maxlength=\"1000\"\n                placeholder=\"máx. 1000 caraceteres\"></textarea>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"desc-projeto\" class=\"text-dark \">Descrição do projeto</label>\n              <textarea class=\"form-control text-dark font100\" [(ngModel)]=\"externo.descricao\"\n                [ngModelOptions]=\"{standalone: true}\" id=\"textarea-desc-projeto\" rows=\"3\"\n                placeholder=\"Detalhes da proposta\"></textarea>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"equipe-projeto\" class=\"text-dark \">Equipe do projeto</label>\n              <textarea class=\"form-control text-dark font100\" [(ngModel)]=\"externo.equipe\"\n                [ngModelOptions]=\"{standalone: true}\" id=\"textarea-equipe-projeto\" rows=\"3\" maxlength=\"1000\"\n                placeholder=\"Nome completo de cada integrante\"></textarea>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"d-flex justify-content-end mt-4 mb-4\">\n        <div class=\"mr-3\">\n          <button type=\"button\" class=\"btn btn-light border\">\n            Cancelar\n          </button>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"candidaturaEXTERNO()\" class=\"btn btn-light border\">\n            Confirmar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Projeto externo -->\n</div>\n<!-- /MODAIS -->"

/***/ }),

/***/ "./src/app/candidatura-main/candidatura-main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/candidatura-main/candidatura-main.component.ts ***!
  \****************************************************************/
/*! exports provided: CandidaturaMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidaturaMainComponent", function() { return CandidaturaMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");






var CandidaturaMainComponent = /** @class */ (function () {
    function CandidaturaMainComponent(router, service) {
        this.router = router;
        this.service = service;
        this.tcc = {
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
        this.interno = {
            iduser: parseInt(localStorage.getItem('010101')),
            curso: null,
            nomeProjeto: null,
            nomeResponsavel: null,
            tipo: null,
            resumo: null,
            descricao: null,
            equipe: null
        };
        this.externo = {
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
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            regular: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            mediotec: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    CandidaturaMainComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('010101') && !localStorage.getItem('0000')) {
            this.router.navigate(['']);
        }
        else {
            this.tipo = localStorage.getItem('0000');
        }
    };
    CandidaturaMainComponent.prototype.sair = function () {
        localStorage.removeItem("010101");
        localStorage.removeItem("0000");
        this.router.navigate([""]);
    };
    /**
    * Verifica qual modalidade foi selecionada
    */
    CandidaturaMainComponent.prototype.validarRadio = function () {
        if (this.mediotec.nativeElement.checked == true) {
            this.tcc.modalidade = this.mediotec.nativeElement.value;
        }
        else if (this.regular.nativeElement.checked == true) {
            this.tcc.modalidade = this.regular.nativeElement.value;
        }
    };
    /**
    * Envia a candidatura do tcc
    */
    CandidaturaMainComponent.prototype.candidaturaTCC = function () {
        this.validarRadio();
        if (this.tcc.curso && this.tcc.descricao && this.tcc.equipe && this.tcc.modalidade &&
            this.tcc.modulo && this.tcc.nomeProjeto && this.tcc.nomeResponsavel &&
            this.tcc.periodo && this.tcc.resumo && this.tcc.tipo && this.tcc.turma) {
            var data = this.tcc;
            this.service.candidaturaTCC(data).subscribe(function (res) {
                if (res.json().status !== 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Não foi possivel realizar a candidatura do TCC Startup (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                        + res.json().result.code + ": " + res.json().result.errno, 'error');
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
                        window.location.replace('/avaliacao');
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Preencha todos os campos', 'warning');
        }
        console.log(this.tcc);
    };
    /**
    *
    */
    CandidaturaMainComponent.prototype.candidaturaINTERNO = function () {
        if (this.interno.curso && this.interno.descricao && this.interno.equipe && this.interno.nomeProjeto &&
            this.interno.nomeResponsavel && this.interno.resumo && this.interno.tipo) {
            var data = this.interno;
            this.service.candidaturaINTERNO(data).subscribe(function (res) {
                if (res.json().status !== 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Não foi possivel realizar a candidatura do Projeto Interno (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                        + res.json().result.code + ": " + res.json().result.errno, 'error');
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
                        window.location.replace('/avaliacao');
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Preencha todos os campos', 'warning');
        }
    };
    CandidaturaMainComponent.prototype.candidaturaEXTERNO = function () {
        if (this.externo.descricao && this.externo.emailResponsavel && this.externo.equipe && this.externo.filiacao
            && this.externo.iduser && this.externo.nomeProjeto && this.externo.nomeResponsavel && this.externo.orcamentoProjeto
            && this.externo.resumo && this.externo.solicitante && this.externo.telefoneResponsavel && this.externo.tipo) {
            var data = this.externo;
            this.service.candidaturaEXTERNO(data).subscribe(function (res) {
                // tslint:disable-next-line: triple-equals
                if (res.json().status !== 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Não foi possivel realizar a candidatura (CONTATE O SETOR DE DESENVOLVIMENTO), status: ' + res.json().status + ', erro: '
                        + res.json().result.code + ": " + res.json().result.errno, 'error');
                }
                else {
                    // tslint:disable-next-line: space-before-function-paren only-arrow-functions
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('SUCESSO', 'Candidatura realizada com sucesso', 'success').then(function () {
                        window.location.replace('/avaliacao');
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Preencha todos os campos', 'warning');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('regular'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CandidaturaMainComponent.prototype, "regular", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mediotec'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CandidaturaMainComponent.prototype, "mediotec", void 0);
    CandidaturaMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidatura-main',
            template: __webpack_require__(/*! ./candidatura-main.component.html */ "./src/app/candidatura-main/candidatura-main.component.html"),
            styles: [__webpack_require__(/*! ./candidatura-main.component.css */ "./src/app/candidatura-main/candidatura-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
    ], CandidaturaMainComponent);
    return CandidaturaMainComponent;
}());



/***/ }),

/***/ "./src/app/home-main/custom-date-formatter.provider.ts":
/*!*************************************************************!*\
  !*** ./src/app/home-main/custom-date-formatter.provider.ts ***!
  \*************************************************************/
/*! exports provided: CustomDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatter", function() { return CustomDateFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CustomDateFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](locale).transform(date, 'HH:mm', locale);
    };
    CustomDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.dayViewHour({ date: date, locale: locale });
    };
    CustomDateFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomDateFormatter);
    return CustomDateFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"]));



/***/ }),

/***/ "./src/app/home-main/fiec1/fiec1.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-main/fiec1/fiec1.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".telaEvento {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 25px;\r\n}\r\n\r\n.unidade {\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tYWluL2ZpZWMxL2ZpZWMxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1tYWluL2ZpZWMxL2ZpZWMxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsYUV2ZW50byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4udW5pZGFkZSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-main/fiec1/fiec1.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-main/fiec1/fiec1.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CALENDÁRIO -->\n\n<!-- BIBLIOTECA UTILIZADA PARA A CRIAÇÃO DO CALENDÁRIO: https://mattlewis92.github.io/angular-calendar/# -->\n\n<div class=\"calendario container\">\n  <div class=\"text-center m-4\">\n    <span class=\"unidade\">FIEC I</span>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn btn-outline-dark\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\n          < </div> <div class=\"btn btn-outline-dark\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n            Hoje\n        </div>\n        <div class=\"btn btn btn-outline-dark\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\n          >\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'pt-PT' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn btn-outline-dark\" (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\">\n          Mês\n        </div>\n        <div class=\"btn btn btn-outline-dark\" (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\">\n          Semana\n        </div>\n        <div class=\"btn btn btn-outline-dark\" (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\">\n          Dia\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view [locale]=\"locale\" *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"eventClicked($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\" [locale]=\"locale\" [refresh]=\"refresh\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\" [locale]=\"locale\" [refresh]=\"refresh\">\n  </mwl-calendar-day-view>\n</div>\n<!-- /CALENDÁRIO -->\n<br /><br /><br />\n<!-- EDIÇÕES DOS EVENTOS /  ADICIONAR EVENTOS -->\n<div *ngIf=\"tipo == 'A'\">\n  <h3>\n    Edite os eventos\n    <button class=\"btn btn btn-outline-dark pull-right\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      Adicionar evento\n    </button>\n    <div class=\"clearfix\"></div>\n  </h3>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Titulo</th>\n          <th>Setor</th>\n          <th>Começa em</th>\n          <th>Termina em</th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.title\" (keyup)=\"refresh.next()\" />\n          </td>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"event.color.primary\" (change)=\"refresh.next()\" />\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.start\"\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.end\"\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteEvento(event)\">\n              Delete\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br />\n</div>\n<!-- /EDIÇÕES DOS EVENTOS /  ADICIONAR EVENTOS -->\n<!-- MODAL DESCRICAO EVENTO -->\n<button data-toggle=\"modal\" hidden id=\"modalEventoBtn1\" data-target=\"#modalEvento\">\n</button>\n<div class=\"modal fade\" id=\"modalEvento\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEventoLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalEventoLabel\"><span *ngFor=\"let evento of eventos\">{{evento.title}}</span></h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"font120\">\n          <div class=\"form-group\">\n            <label class=\"text-dark\">Começo do evento</label>\n            <textarea *ngFor=\"let evento of eventos\" class=\"form-control text-dark font100\" rows=\"1\"\n              disabled>{{evento.start}}</textarea>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-dark\">Fim do evento</label>\n            <textarea *ngFor=\"let evento of eventos\" class=\"form-control text-dark font100\" rows=\"1\"\n              disabled>{{evento.end}}</textarea>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-dark \">Descrição do evento</label>\n            <textarea class=\"form-control text-dark font100\" *ngFor=\"let evento of eventos\" rows=\"3\"\n              disabled>{{evento.descricao}}</textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /MODAL DESCRICAO EVENTO -->\n<!-- MODAL CADASTRO EVENTOS -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog container\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Adicione um novo evento</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"titleDoEvento\">Titulo do evento</label>\n            <input name=\"titulo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"titleDoEvento\"\n              [ngModelOptions]=\"{standalone: true}\" id=\"titleDoEvento\" placeholder=\"Digite o titulo\" />\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label class=\"mr-4\">Inicio do evento:</label>\n              </div>\n              <div class=\"col\">\n                <input name=\"start\" class=\"form-control\" [(ngModel)]=\"startDoEvento\" type=\"text\" mwlFlatpickr\n                  [altInput]=\"true\" [convertModelValue]=\"true\" [ngModelOptions]=\"{standalone: true}\" [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Defina uma data\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label class=\"mr-4\">Fim do evento:</label>\n              </div>\n              <div class=\"col\">\n                <input name=\"end\" class=\"form-control\" [(ngModel)]=\"endDoEvento\" type=\"text\" mwlFlatpickr\n                  [altInput]=\"true\" [convertModelValue]=\"true\" [ngModelOptions]=\"{standalone: true}\" [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Defina uma data\"\n                  aria-describedby=\"endDoEventoHelp\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Setor a ser reservado:</label>\n            <select name=\"color\" [(ngModel)]=\"colorDoEvento\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option selected value=\"red\" class=\"text-danger\">Palestras</option>\n              <option value=\"blue\" class=\"text-primary\">Pesquisas, desenvolvimento</option>\n              <option value=\"yellow\" class=\"text-warning\">Reuniões</option>\n              <option value=\"all\">Todo o espaço</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descricaoEvento\" class=\"col-form-label\">Descrição do evento: </label>\n            <textarea [(ngModel)]=\"descricaoEvento\" class=\"form-control\" id=\"descricaoEvento\"\n              [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite aqui a descrição do evento\"></textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"submit\" class=\"btn btn btn-outline-dark\"\n          (click)=\"cadastroEvento(titleDoEvento,startDoEvento,endDoEvento,colorDoEvento,descricaoEvento)\">Adicionar</button>\n        <!-- (click)=\"cadastroEvento(titleDoEvento,startDoEvento,endDoEvento,colorDoEvento,descricaoEvento)\" -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- MODAL CADASTRO EVENTOS -->\n"

/***/ }),

/***/ "./src/app/home-main/fiec1/fiec1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-main/fiec1/fiec1.component.ts ***!
  \****************************************************/
/*! exports provided: Fiec1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fiec1Component", function() { return Fiec1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-date-formatter.provider */ "./src/app/home-main/custom-date-formatter.provider.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../backend.service */ "./src/app/backend.service.ts");









var colors = {
    red: {
        primary: "#ad2121",
        secondary: "#FAE3E3"
    },
    blue: {
        primary: "#1e90ff",
        secondary: "#D1E8FF"
    },
    yellow: {
        primary: "#e3bc08",
        secondary: "#FDF1BA"
    },
    all: {
        primary: "#808080",
        secondary: "#FDF1BA"
    }
};
var Fiec1Component = /** @class */ (function () {
    function Fiec1Component(service) {
        this.service = service;
        this.telaEvento = false;
        this.modalStatus = false;
        this.draggaableDoEvento = false;
        this.eventos = [];
        this.resposta = "s";
        this.eventoCheck = [];
        this.tipo = localStorage.getItem("0000");
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.locale = "pt-PT";
        this.viewDate = new Date();
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].MONDAY;
        this.weekendDays = [angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].FRIDAY, angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].SATURDAY];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    Fiec1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.service.selectEventosFiec1().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (evento) {
                    _this.eventoCheck.push(evento);
                    if (evento.cor == "blue") {
                        var corT = colors.blue;
                    }
                    if (evento.cor == "yellow") {
                        var corT = colors.yellow;
                    }
                    if (evento.cor == "red") {
                        var corT = colors.red;
                    }
                    if (evento.cor == "all") {
                        var corT = colors.all;
                    }
                    _this.events = _this.events.concat([
                        {
                            id: evento.idevento,
                            start: new Date(evento.ano_start, evento.mes_start, evento.dia_start, evento.hora_start, evento.minuto_start, evento.segundo_start),
                            end: new Date(evento.ano_end, evento.mes_end, evento.dia_end, evento.hora_end, evento.minuto_end, evento.segundo_end),
                            title: evento.titulo,
                            color: corT,
                            draggable: _this.draggaableDoEvento,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            }
                        }
                    ]);
                });
                console.log(_this.eventoCheck);
            }
        });
    };
    Fiec1Component.prototype.telaEventoHide = function () {
        this.telaEvento = false;
    };
    Fiec1Component.prototype.cadastroEvento = function (titleDoEventoC, startDoEventoC, endDoEventoC, colorDoEventoC, descricaoEventoC) {
        if (titleDoEventoC &&
            startDoEventoC &&
            endDoEventoC &&
            colorDoEventoC &&
            descricaoEventoC) {
            var data_1 = {
                iduser: parseInt(localStorage.getItem("010101")),
                id_agenda: 1,
                titulo: titleDoEventoC,
                cor: colorDoEventoC,
                ano_start: startDoEventoC.getFullYear().toString(),
                mes_start: startDoEventoC.getMonth().toString(),
                dia_start: startDoEventoC.getDate().toString(),
                hora_start: startDoEventoC.getHours().toString(),
                minuto_start: startDoEventoC.getMinutes().toString(),
                segundo_start: startDoEventoC.getSeconds().toString(),
                ano_end: endDoEventoC.getFullYear().toString(),
                mes_end: endDoEventoC.getMonth().toString(),
                dia_end: endDoEventoC.getDate().toString(),
                hora_end: endDoEventoC.getHours().toString(),
                minuto_end: endDoEventoC.getMinutes().toString(),
                segundo_end: endDoEventoC.getSeconds().toString(),
                descricao: descricaoEventoC
            };
            data_1["end"] = new Date(data_1.ano_end, data_1.mes_end, data_1.dia_end, data_1.hora_end, data_1.minuto_end, data_1.segundo_end, 0);
            data_1["start"] = new Date(data_1.ano_start, data_1.mes_start, data_1.dia_start, data_1.hora_start, data_1.minuto_start, data_1.segundo_start, 0);
            var resposta_1 = "s";
            this.eventoCheck.forEach(function (evento) {
                if (evento.cor == data_1.cor ||
                    evento.cor == "all" ||
                    data_1.cor == "all") {
                    resposta_1 = "n";
                    if ((parseInt(evento.ano_start) == parseInt(data_1.ano_start) &&
                        parseInt(evento.mes_start) == parseInt(data_1.mes_start) &&
                        parseInt(evento.dia_start) == parseInt(data_1.dia_start)) ||
                        (parseInt(evento.ano_end) == parseInt(data_1.ano_start) &&
                            parseInt(evento.mes_end) == parseInt(data_1.mes_start) &&
                            parseInt(evento.dia_end) == parseInt(data_1.dia_start)) ||
                        (parseInt(evento.ano_end) == parseInt(data_1.ano_end) &&
                            parseInt(evento.mes_end) == parseInt(data_1.mes_end) &&
                            parseInt(evento.dia_end) == parseInt(data_1.dia_end)) ||
                        (parseInt(evento.ano_start) == parseInt(data_1.ano_end) &&
                            parseInt(evento.mes_start) == parseInt(data_1.mes_end) &&
                            parseInt(evento.dia_start) == parseInt(data_1.dia_end))) {
                        if (parseInt(evento.hora_start) >= parseInt(data_1.hora_end) &&
                            parseInt(evento.minuto_start) >= parseInt(data_1.minuto_end) &&
                            parseInt(evento.segundo_start) >= parseInt(data_1.segundo_end)) {
                            resposta_1 = "s";
                        }
                        if (parseInt(evento.hora_end) <= parseInt(data_1.hora_start) &&
                            parseInt(evento.minuto_end) <= parseInt(data_1.minuto_start) &&
                            parseInt(evento.segundo_end) <= parseInt(data_1.segundo_start)) {
                            resposta_1 = "s";
                        }
                        if (parseInt(evento.hora_end) == parseInt(data_1.hora_end) &&
                            parseInt(evento.minuto_end) == parseInt(data_1.minuto_end) &&
                            parseInt(evento.segundo_end) == parseInt(data_1.segundo_end) &&
                            parseInt(evento.hora_start) == parseInt(data_1.hora_start) &&
                            parseInt(evento.minuto_start) == parseInt(data_1.minuto_start) &&
                            parseInt(evento.segundo_start) == parseInt(data_1.segundo_start)) {
                            resposta_1 = "n";
                        }
                    }
                    else {
                        resposta_1 = "s";
                    }
                }
            });
            if (parseInt(data_1.ano_end) <= parseInt(data_1.ano_start) &&
                parseInt(data_1.mes_end) <= parseInt(data_1.mes_start) &&
                parseInt(data_1.dia_end) <= parseInt(data_1.dia_start) &&
                parseInt(data_1.hora_end) <= parseInt(data_1.hora_start) &&
                parseInt(data_1.minuto_end) <= parseInt(data_1.minuto_start) &&
                parseInt(data_1.segundo_end) <= parseInt(data_1.segundo_start)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("ERRO", "A data inicial do evento deve ser menor do que a data final do evento", "warning");
            }
            else {
                if (resposta_1 == "s") {
                    this.service.cadastroEvento(data_1).subscribe(function (res) {
                        if (res.json().status !== 200) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("ERRO", "Não foi possivel cadastrar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                                res.json().status +
                                ", erro: " +
                                res.json().result.code +
                                ": " +
                                res.json().result.errno, "error");
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("SUCESSO", "Evento cadastrado com sucesso", "success").then(function () {
                                window.location.reload();
                            });
                        }
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("ERRO", "Já existe uma reserva deste setor nesse horario", "warning");
                }
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("ERRO", "Campos Vazios", "warning");
        }
    };
    /**
     * Deleta o evento passado
     * @param event
     */
    Fiec1Component.prototype.deleteEvento = function (event) {
        var _this = this;
        this.events.push(event);
        this.service.deleteEvento(event.id).subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("ERRO", "Não foi possivel excluir o item (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
                console.log(res);
            }
            else {
                _this.deleteEvent(event);
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("SUCESSO", "Evento deletado com sucesso", "success").then(function () {
                    window.location.reload();
                });
            }
        });
    };
    // A PARTIR DAQUI É SÓ FUNÇÕES DADAS PELO ANGULAR-CALENDAR
    Fiec1Component.prototype.eventClicked = function (_a) {
        var _this = this;
        var event = _a.event;
        this.eventos = [];
        this.service.selectEventosFiec1().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Não foi possivel carregar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (evento) {
                    if (evento.cor == "blue") {
                        var corT = colors.blue;
                    }
                    if (evento.cor == "yellow") {
                        var corT = colors.yellow;
                    }
                    if (evento.cor == "red") {
                        var corT = colors.red;
                    }
                    if (evento.idevento == event.id) {
                        if (evento.minuto_end.length == 1) {
                            evento.minuto_end = "0" + evento.minuto_end;
                        }
                        if (evento.minuto_start.length == 1) {
                            evento.minuto_start = "0" + evento.minuto_start;
                        }
                        if (evento.segundo_end.length == 1) {
                            evento.segundo_end = "0" + evento.segundo_end;
                        }
                        if (evento.segundo_start.length == 1) {
                            evento.segundo_start = "0" + evento.segundo_start;
                        }
                        if (evento.hora_start.length == 1) {
                            evento.hora_start = "0" + evento.hora_start;
                        }
                        if (evento.hora_end.length == 1) {
                            evento.hora_end = "0" + evento.hora_end;
                        }
                        _this.eventos = _this.eventos.concat([
                            {
                                id: evento.idevento,
                                start: evento.dia_start +
                                    "/" +
                                    evento.mes_start +
                                    "/" +
                                    evento.ano_start +
                                    " ás " +
                                    evento.hora_start +
                                    ":" +
                                    evento.minuto_start +
                                    ":" +
                                    evento.segundo_start,
                                end: evento.dia_end +
                                    "/" +
                                    evento.mes_end +
                                    "/" +
                                    evento.ano_end +
                                    " ás " +
                                    evento.hora_end +
                                    ":" +
                                    evento.minuto_end +
                                    ":" +
                                    evento.segundo_end,
                                title: evento.titulo,
                                color: corT,
                                descricao: evento.descricao
                            }
                        ]);
                    }
                });
                document.getElementById("modalEventoBtn1").click();
            }
        });
    };
    Fiec1Component.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    Fiec1Component.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    Fiec1Component.prototype.setView = function (view) {
        this.view = view;
    };
    Fiec1Component.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], Fiec1Component.prototype, "modalContent", void 0);
    Fiec1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-fiec1",
            template: __webpack_require__(/*! ./fiec1.component.html */ "./src/app/home-main/fiec1/fiec1.component.html"),
            providers: [
                {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarDateFormatter"],
                    useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_5__["CustomDateFormatter"]
                }
            ],
            styles: [__webpack_require__(/*! ./fiec1.component.css */ "./src/app/home-main/fiec1/fiec1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"]])
    ], Fiec1Component);
    return Fiec1Component;
}());



/***/ }),

/***/ "./src/app/home-main/fiec2/fiec2.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-main/fiec2/fiec2.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".telaEvento {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 25px;\r\n}\r\n\r\n.unidade {\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tYWluL2ZpZWMyL2ZpZWMyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1tYWluL2ZpZWMyL2ZpZWMyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsYUV2ZW50byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4udW5pZGFkZSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-main/fiec2/fiec2.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-main/fiec2/fiec2.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- BIBLIOTECA UTILIZADA PARA A CRIAÇÃO DO CALENDÁRIO: https://mattlewis92.github.io/angular-calendar/# -->\n\n\n<div class=\"calendario container\">\n  <div class=\"text-center m-4\">\n    <span class=\"unidade\">FIEC II</span>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn-outline-dark\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\n          < </div> <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n            Hoje\n        </div>\n        <div class=\"btn btn-outline-dark\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\n          >\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'pt-PT' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn-outline-dark\" (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\">\n          Mês\n        </div>\n        <div class=\"btn btn-outline-dark\" (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\">\n          Semana\n        </div>\n        <div class=\"btn btn-outline-dark\" (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\">\n          Dia\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view [locale]=\"locale\" *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"eventClicked($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\" [locale]=\"locale\" [refresh]=\"refresh\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\" [locale]=\"locale\" [refresh]=\"refresh\">\n  </mwl-calendar-day-view>\n</div>\n<div *ngIf=\"tipo == 'A'\">\n  <br /><br /><br />\n  <h3>\n    Edite os eventos\n    <button class=\"btn btn-outline-dark pull-right\" data-toggle=\"modal\" data-target=\"#exampleModal2\">\n      Adicionar evento\n    </button>\n    <div class=\"clearfix\"></div>\n  </h3>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Titulo</th>\n          <th>Cor</th>\n          <th>Começa em</th>\n          <th>Termina em</th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.title\" (keyup)=\"refresh.next()\" />\n          </td>\n          <td>\n            <input type=\"color\" [(ngModel)]=\"event.color.primary\" (change)=\"refresh.next()\" />\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.start\"\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.end\"\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteEvento(event)\">\n              Delete\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br />\n</div>\n<button data-toggle=\"modal\" hidden id=\"modalEventoBtn2\" data-target=\"#modalEvento2\">\n</button>\n<div class=\"modal fade\" id=\"modalEvento2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEventoLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalEventoLabel\"><span *ngFor=\"let evento of eventos\">{{evento.title}}</span></h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"font120\">\n          <div class=\"form-group\">\n            <label class=\"text-dark\">Começo do evento</label>\n            <textarea *ngFor=\"let evento of eventos\" class=\"form-control text-dark font100\" rows=\"1\"\n              disabled>{{evento.start}}</textarea>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-dark\">Fim do evento</label>\n            <textarea *ngFor=\"let evento of eventos\" class=\"form-control text-dark font100\" rows=\"1\"\n              disabled>{{evento.end}}</textarea>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-dark \">Descrição do evento</label>\n            <textarea class=\"form-control text-dark font100\" *ngFor=\"let evento of eventos\" rows=\"3\"\n              disabled>{{evento.descricao}}</textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- MODAL CADASTRO EVENTOS -->\n<div class=\"modal fade \" id=\"exampleModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog container\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Adicione um novo evento</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"titleDoEvento\">Titulo do evento</label>\n            <input name=\"titulo\" type=\"text\" class=\"form-control\" [(ngModel)]=\"titleDoEvento\"\n              [ngModelOptions]=\"{standalone: true}\" id=\"titleDoEvento\" placeholder=\"Digite o titulo\" />\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label class=\"mr-4\">Inicio do evento:</label>\n              </div>\n              <div class=\"col\">\n                <input name=\"start\" class=\"form-control\" [(ngModel)]=\"startDoEvento\" type=\"text\" mwlFlatpickr\n                  [altInput]=\"true\" [convertModelValue]=\"true\" [ngModelOptions]=\"{standalone: true}\" [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Defina uma data\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <label class=\"mr-4\">Fim do evento:</label>\n              </div>\n              <div class=\"col\">\n                <input name=\"end\" class=\"form-control\" [(ngModel)]=\"endDoEvento\" type=\"text\" mwlFlatpickr\n                  [altInput]=\"true\" [convertModelValue]=\"true\" [ngModelOptions]=\"{standalone: true}\" [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Defina uma data\"\n                  aria-describedby=\"endDoEventoHelp\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Setor a ser reservado:</label>\n            <select name=\"color\" [(ngModel)]=\"colorDoEvento\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option selected value=\"red\" class=\"text-danger\">Palestras</option>\n              <option value=\"blue\" class=\"text-primary\">Pesquisas, desenvolvimento</option>\n              <option value=\"yellow\" class=\"text-warning\">Reuniões</option>\n              <option value=\"all\">Todo o espaço</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descricaoEvento\" class=\"col-form-label\">Descrição do evento: </label>\n            <textarea [(ngModel)]=\"descricaoEvento\" class=\"form-control\" id=\"descricaoEvento\"\n              [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite aqui a descrição do evento\"></textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"submit\" class=\"btn btn-outline-dark\"\n          (click)=\"cadastroEvento(titleDoEvento,startDoEvento,endDoEvento,colorDoEvento,descricaoEvento)\">Adicionar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-main/fiec2/fiec2.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-main/fiec2/fiec2.component.ts ***!
  \****************************************************/
/*! exports provided: Fiec2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fiec2Component", function() { return Fiec2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-date-formatter.provider */ "./src/app/home-main/custom-date-formatter.provider.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../backend.service */ "./src/app/backend.service.ts");









var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    all: {
        primary: '#808080',
        secondary: '#FDF1BA'
    }
};
var Fiec2Component = /** @class */ (function () {
    function Fiec2Component(service) {
        this.service = service;
        this.tipo = localStorage.getItem('0000');
        this.telaEvento = false;
        this.modalStatus = false;
        this.draggaableDoEvento = false;
        this.eventos = [];
        this.resposta = "s";
        this.eventoCheck = [];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.locale = 'pt-PT';
        this.viewDate = new Date();
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].MONDAY;
        this.weekendDays = [angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].FRIDAY, angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DAYS_OF_WEEK"].SATURDAY];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    Fiec2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.service.selectEventosFiec2().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: '
                    + res.json().status + ', erro: '
                    + res.json().result.code + ": " + res.json().result.errno, 'error');
            }
            else {
                res.json().result.forEach(function (evento) {
                    _this.eventoCheck.push(evento);
                    if (evento.cor == "blue") {
                        var corT = colors.blue;
                    }
                    if (evento.cor == "yellow") {
                        var corT = colors.yellow;
                    }
                    if (evento.cor == "red") {
                        var corT = colors.red;
                    }
                    if (evento.cor == "all") {
                        var corT = colors.all;
                    }
                    _this.events = _this.events.concat([
                        {
                            id: evento.idevento,
                            start: new Date(evento.ano_start, evento.mes_start, evento.dia_start, evento.hora_start, evento.minuto_start, evento.segundo_start),
                            end: new Date(evento.ano_end, evento.mes_end, evento.dia_end, evento.hora_end, evento.minuto_end, evento.segundo_end),
                            title: evento.titulo,
                            color: corT,
                            draggable: _this.draggaableDoEvento,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            }
                        }
                    ]);
                });
                console.log(_this.eventoCheck);
            }
        });
    };
    Fiec2Component.prototype.telaEventoHide = function () {
        this.telaEvento = false;
    };
    Fiec2Component.prototype.cadastroEvento = function (titleDoEventoC, startDoEventoC, endDoEventoC, colorDoEventoC, descricaoEventoC) {
        if (titleDoEventoC && startDoEventoC && endDoEventoC && colorDoEventoC && descricaoEventoC) {
            var data_1 = {
                iduser: parseInt(localStorage.getItem('010101')),
                id_agenda: 2,
                titulo: titleDoEventoC,
                cor: colorDoEventoC,
                ano_start: startDoEventoC.getFullYear().toString(),
                mes_start: startDoEventoC.getMonth().toString(),
                dia_start: startDoEventoC.getDate().toString(),
                hora_start: startDoEventoC.getHours().toString(),
                minuto_start: startDoEventoC.getMinutes().toString(),
                segundo_start: startDoEventoC.getSeconds().toString(),
                ano_end: endDoEventoC.getFullYear().toString(),
                mes_end: endDoEventoC.getMonth().toString(),
                dia_end: endDoEventoC.getDate().toString(),
                hora_end: endDoEventoC.getHours().toString(),
                minuto_end: endDoEventoC.getMinutes().toString(),
                segundo_end: endDoEventoC.getSeconds().toString(),
                descricao: descricaoEventoC
            };
            data_1['end'] = new Date(data_1.ano_end, data_1.mes_end, data_1.dia_end, data_1.hora_end, data_1.minuto_end, data_1.segundo_end, 0);
            data_1['start'] = new Date(data_1.ano_start, data_1.mes_start, data_1.dia_start, data_1.hora_start, data_1.minuto_start, data_1.segundo_start, 0);
            var resposta_1 = "s";
            //  VERIFICAÇÃO SE EXISTE ALGUM EVENTO NO MESMO HORARIO E SETOR
            this.eventoCheck.forEach(function (evento) {
                if (evento.cor == data_1.cor || evento.cor == "all" || data_1.cor == "all") {
                    resposta_1 = "n";
                    if ((parseInt(evento.ano_start) == parseInt(data_1.ano_start)
                        && parseInt(evento.mes_start) == parseInt(data_1.mes_start)
                        && parseInt(evento.dia_start) == parseInt(data_1.dia_start))
                        || (parseInt(evento.ano_end) == parseInt(data_1.ano_start)
                            && parseInt(evento.mes_end) == parseInt(data_1.mes_start)
                            && parseInt(evento.dia_end) == parseInt(data_1.dia_start))
                        || (parseInt(evento.ano_end) == parseInt(data_1.ano_end)
                            && parseInt(evento.mes_end) == parseInt(data_1.mes_end)
                            && parseInt(evento.dia_end) == parseInt(data_1.dia_end))
                        || (parseInt(evento.ano_start) == parseInt(data_1.ano_end)
                            && parseInt(evento.mes_start) == parseInt(data_1.mes_end)
                            && parseInt(evento.dia_start) == parseInt(data_1.dia_end))) {
                        if (parseInt(evento.hora_start) >= parseInt(data_1.hora_end)
                            && parseInt(evento.minuto_start) >= parseInt(data_1.minuto_end)
                            && parseInt(evento.segundo_start) >= parseInt(data_1.segundo_end)) {
                            resposta_1 = "s";
                        }
                        if (parseInt(evento.hora_end) <= parseInt(data_1.hora_start)
                            && parseInt(evento.minuto_end) <= parseInt(data_1.minuto_start)
                            && parseInt(evento.segundo_end) <= parseInt(data_1.segundo_start)) {
                            resposta_1 = "s";
                        }
                        if (parseInt(evento.hora_end) == parseInt(data_1.hora_end)
                            && parseInt(evento.minuto_end) == parseInt(data_1.minuto_end)
                            && parseInt(evento.segundo_end) == parseInt(data_1.segundo_end)
                            && parseInt(evento.hora_start) == parseInt(data_1.hora_start)
                            && parseInt(evento.minuto_start) == parseInt(data_1.minuto_start)
                            && parseInt(evento.segundo_start) == parseInt(data_1.segundo_start)) {
                            resposta_1 = "n";
                        }
                    }
                    else {
                        resposta_1 = "s";
                    }
                }
            });
            // ---------------------------------------------------------------------------------
            // VERIFICA SE O COMEÇO DO EVENTO É DPS DO FIM DELE
            if (parseInt(data_1.ano_end) <= parseInt(data_1.ano_start)
                && parseInt(data_1.mes_end) <= parseInt(data_1.mes_start)
                && parseInt(data_1.dia_end) <= parseInt(data_1.dia_start)
                && parseInt(data_1.hora_end) <= parseInt(data_1.hora_start)
                && parseInt(data_1.minuto_end) <= parseInt(data_1.minuto_start)
                && parseInt(data_1.segundo_end) <= parseInt(data_1.segundo_start)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('ERRO', 'A data inicial do evento deve ser menor do que a data final do evento', 'warning');
            }
            //-----------------------------------------------------------------------------------
            else {
                if (resposta_1 == "s") {
                    this.service.cadastroEvento(data_1).subscribe(function (res) {
                        if (res.json().status !== 200) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('ERRO', 'Não foi possivel cadastrar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: '
                                + res.json().status + ', erro: '
                                + res.json().result.code + ": " + res.json().result.errno, 'error');
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('SUCESSO', 'Evento cadastrado com sucesso', 'success').then(function () {
                                window.location.reload();
                            });
                        }
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('ERRO', 'Já existe uma reserva deste setor nesse horario', 'warning');
                }
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('ERRO', 'Campos Vazios', 'warning');
        }
    };
    Fiec2Component.prototype.deleteEvento = function (event) {
        var _this = this;
        this.events.push(event);
        this.service.deleteEvento(event.id).subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('ERRO', 'Não foi possivel excluir o item (CONTATE O SETOR DE DESENVOLVIMENTO), status: '
                    + res.json().status + ', erro: '
                    + res.json().result.code + ": " + res.json().result.errno, 'error');
                console.log(res);
            }
            else {
                _this.deleteEvent(event);
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('SUCESSO', 'Evento deletado com sucesso', 'success').then(function () {
                    window.location.reload();
                });
            }
        });
    };
    // A PARTIR DAQUI É SÓ FUNÇÕES DADAS PELO ANGULAR-CALENDAR
    Fiec2Component.prototype.eventClicked = function (_a) {
        var _this = this;
        var event = _a.event;
        this.eventos = [];
        this.service.selectEventosFiec2().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Não foi possivel carregar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: '
                    + res.json().status + ', erro: '
                    + res.json().result.code + ": " + res.json().result.errno, 'error');
            }
            else {
                res.json().result.forEach(function (evento) {
                    if (evento.cor == "blue") {
                        var corT = colors.blue;
                    }
                    if (evento.cor == "yellow") {
                        var corT = colors.yellow;
                    }
                    if (evento.cor == "red") {
                        var corT = colors.red;
                    }
                    if (evento.idevento == event.id) {
                        if (evento.minuto_end.length == 1) {
                            evento.minuto_end = '0' + evento.minuto_end;
                        }
                        if (evento.minuto_start.length == 1) {
                            evento.minuto_start = '0' + evento.minuto_start;
                        }
                        if (evento.segundo_end.length == 1) {
                            evento.segundo_end = '0' + evento.segundo_end;
                        }
                        if (evento.segundo_start.length == 1) {
                            evento.segundo_start = '0' + evento.segundo_start;
                        }
                        if (evento.hora_start.length == 1) {
                            evento.hora_start = '0' + evento.hora_start;
                        }
                        if (evento.hora_end.length == 1) {
                            evento.hora_end = '0' + evento.hora_end;
                        }
                        _this.eventos = _this.eventos.concat([
                            {
                                id: evento.idevento,
                                start: evento.dia_start + "/" + evento.mes_start + "/" + evento.ano_start
                                    + " ás " + evento.hora_start + ":" + evento.minuto_start + ":" + evento.segundo_start,
                                end: evento.dia_end + "/" + evento.mes_end + "/" + evento.ano_end + " ás "
                                    + evento.hora_end + ":" + evento.minuto_end + ":" + evento.segundo_end,
                                title: evento.titulo,
                                color: corT,
                                descricao: evento.descricao
                            }
                        ]);
                    }
                });
                document.getElementById('modalEventoBtn2').click();
            }
        });
    };
    Fiec2Component.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    Fiec2Component.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    Fiec2Component.prototype.setView = function (view) {
        this.view = view;
    };
    Fiec2Component.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], Fiec2Component.prototype, "modalContent", void 0);
    Fiec2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fiec2',
            template: __webpack_require__(/*! ./fiec2.component.html */ "./src/app/home-main/fiec2/fiec2.component.html"),
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarDateFormatter"],
                    useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_5__["CustomDateFormatter"]
                }],
            styles: [__webpack_require__(/*! ./fiec2.component.css */ "./src/app/home-main/fiec2/fiec2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"]])
    ], Fiec2Component);
    return Fiec2Component;
}());



/***/ }),

/***/ "./src/app/home-main/home-main.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-main/home-main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n}\r\n\r\npre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG5wcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-main/home-main.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-main/home-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"home\">CITEC</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n      aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/home' ]\">Agendas<span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/candidatura' ]\">Candidatura</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/avaliacao' ]\">Avaliação</a>\n        <a class=\"nav-item nav-link\" href=\"http://cronograma.fiecdev.kinghost.net/#/login\">Gestão de projetos</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/processos' ]\">Processos</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/projetos' ]\">Projetos</a>\n        <a (click)=\"sair()\" class=\"material-icons nav-item nav-link\">\n          exit_to_app\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class=\"calendarios\">\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" style=\"justify-content: center;\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"fiecI-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n        aria-selected=\"true\">FIEC I</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"fiecII-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n        aria-selected=\"false\">FIEC II</a>\n    </li>\n  </ul>\n  <div class=\"tab-content container mt-4\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"fiecI-tab\">\n      <app-fiec1></app-fiec1>\n    </div>\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"fiecII-tab\">\n      <app-fiec2></app-fiec2>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-main/home-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-main/home-main.component.ts ***!
  \**************************************************/
/*! exports provided: HomeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function() { return HomeMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-date-formatter.provider */ "./src/app/home-main/custom-date-formatter.provider.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var HomeMainComponent = /** @class */ (function () {
    function HomeMainComponent(router) {
        this.router = router;
    }
    HomeMainComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('010101') && !localStorage.getItem('0000')) {
            this.router.navigate(['']);
        }
    };
    HomeMainComponent.prototype.sair = function () {
        localStorage.removeItem("010101");
        localStorage.removeItem("0000");
        this.router.navigate([""]);
    };
    HomeMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-main',
            template: __webpack_require__(/*! ./home-main.component.html */ "./src/app/home-main/home-main.component.html"),
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarDateFormatter"],
                    useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__["CustomDateFormatter"]
                }],
            styles: [__webpack_require__(/*! ./home-main.component.css */ "./src/app/home-main/home-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeMainComponent);
    return HomeMainComponent;
}());



/***/ }),

/***/ "./src/app/home-main/home-main.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-main/home-main.module.ts ***!
  \***********************************************/
/*! exports provided: HomeMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainModule", function() { return HomeMainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-main.component */ "./src/app/home-main/home-main.component.ts");
/* harmony import */ var _fiec1_fiec1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiec1/fiec1.component */ "./src/app/home-main/fiec1/fiec1.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt-PT */ "./node_modules/@angular/common/locales/pt-PT.js");
/* harmony import */ var _angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _fiec2_fiec2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fiec2/fiec2.component */ "./src/app/home-main/fiec2/fiec2.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt_PT__WEBPACK_IMPORTED_MODULE_10___default.a);
var HomeMainModule = /** @class */ (function () {
    function HomeMainModule() {
    }
    HomeMainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_main_component__WEBPACK_IMPORTED_MODULE_3__["HomeMainComponent"], _fiec1_fiec1_component__WEBPACK_IMPORTED_MODULE_4__["Fiec1Component"], _fiec2_fiec2_component__WEBPACK_IMPORTED_MODULE_13__["Fiec2Component"]],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
                }),
            ],
            providers: [_backend_service__WEBPACK_IMPORTED_MODULE_12__["BackendService"]],
        })
    ], HomeMainModule);
    return HomeMainModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 40em;\r\n} */\r\n\r\n.bemVindo {\r\n    font-size: 3em;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA0MGVtO1xyXG59ICovXHJcblxyXG4uYmVtVmluZG8ge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 bemVindo\">\n      BEM-VINDO\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"Usuario\">Email</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" id=\"Usuario\"\n        aria-describedby=\"emailHelp\" placeholder=\"Digite seu email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Senha\">Senha</label>\n      <input type=\"password\" name=\"senha\" class=\"form-control\" [(ngModel)]=\"senha\" id=\"Senha\"\n        placeholder=\"Digite a senha\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"logar()\">Entrar</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('010101') && localStorage.getItem('0000')) {
            this.router.navigate(['home']);
        }
    };
    /**
      * Realiza o login do user
    */
    LoginComponent.prototype.logar = function () {
        var _this = this;
        if (this.email && this.senha) {
            var data = {
                email: this.email,
                senha: this.senha
            };
            this.service.logar(data).subscribe(function (res) {
                if (res.json().status == 200) {
                    if (res.json().count[0].count == 1) {
                        var id = res.json().result[0].iduser;
                        var tipo = res.json().result[0].tipo;
                        localStorage.setItem('010101', id);
                        localStorage.setItem('0000', tipo);
                        _this.router.navigate(['home']);
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Atenção', 'Email ou senha incorretos', 'warning');
                    }
                }
                else {
                    console.log(res.json().error);
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('ERRO', 'Campos vazios', 'warning');
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/processos/processos.component.css":
/*!***************************************************!*\
  !*** ./src/app/processos/processos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzc29zL3Byb2Nlc3Nvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3Nvcy9wcm9jZXNzb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/processos/processos.component.html":
/*!****************************************************!*\
  !*** ./src/app/processos/processos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom mb-4\">\n  <a class=\"navbar-brand\" href=\"home\">CITEC</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n    aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/home' ]\">Agendas</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/candidatura' ]\">Candidatura</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/avaliacao' ]\">Avaliação</a>\n      <a class=\"nav-item nav-link\" href=\"http://cronograma.fiecdev.kinghost.net/#/login\">Gestão de projetos</a>\n      <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/processos' ]\">Processos<span\n          class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/projetos' ]\">Projetos</a>\n      <a (click)=\"sair()\" class=\"material-icons nav-item nav-link\">\n        exit_to_app\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"shadow p-1 mb-1 bg-light\">\n    <div class=\"card border-0\">\n      <div class=\"card-header bg-light text-center h2\">\n        Modelo de documentação\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"card m-1\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Planejamento</h5>\n              <p class=\"card-text\">\n                <span class=\"pointer\" (click)=\"onDownload(modelo.id,modelo.nomeArquivo)\"\n                  *ngFor=\"let modelo of modelos.modeloPlanejamento\">\n                  {{modelo.nomeArquivo}}</span>\n              </p>\n              <a class=\"card-link pointer\" (click)=\"modalModelo('Planejamento',modelos.modeloPlanejamento)\"\n                *ngIf=\"tipo == 'A'\">Atualizar</a>\n            </div>\n          </div>\n          <div class=\"card m-1\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Desenvolvimento</h5>\n              <p class=\"card-text\">\n                <span class=\"pointer\" (click)=\"onDownload(modelo.id,modelo.nomeArquivo)\"\n                  *ngFor=\"let modelo of modelos.modeloDesenvolvimento\">\n                  {{modelo.nomeArquivo}}</span>\n              </p>\n              <a class=\"card-link pointer\" (click)=\"modalModelo('Desenvolvimento',modelos.modeloDesenvolvimento)\"\n                *ngIf=\"tipo == 'A'\">Atualizar</a>\n            </div>\n          </div>\n          <div class=\"card m-1\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Homologação / Entrega Final</h5>\n              <p class=\"card-text\">\n                <span class=\"pointer\" (click)=\"onDownload(modelo.id,modelo.nomeArquivo)\"\n                  *ngFor=\"let modelo of modelos.modeloHomologacao\">\n                  {{modelo.nomeArquivo}}</span>\n              </p>\n              <a class=\"card-link pointer\"\n                (click)=\"modalModelo('Homologação / Entrega Final',modelos.modeloHomologacao)\"\n                *ngIf=\"tipo == 'A'\">Atualizar</a>\n            </div>\n          </div>\n          <div class=\"card m-1\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Detalhamento de requisitos</h5>\n              <p class=\"card-text\">\n                <span class=\"pointer\" (click)=\"onDownload(modelo.id,modelo.nomeArquivo)\"\n                  *ngFor=\"let modelo of modelos.modeloDetalhamento\">\n                  {{modelo.nomeArquivo}}\n                </span>\n              </p>\n              <a class=\"card-link pointer\"\n                (click)=\"modalModelo('Detalhamento de requisitos',modelos.modeloDetalhamento)\"\n                *ngIf=\"tipo == 'A'\">Atualizar</a>\n            </div>\n          </div>\n          <div class=\"card m-1\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Testes</h5>\n              <p class=\"card-text\">\n                <span class=\"pointer\" (click)=\"onDownload(modelo.id,modelo.nomeArquivo)\"\n                  *ngFor=\"let modelo of modelos.modeloTestes\">\n                  {{modelo.nomeArquivo}}</span>\n              </p>\n              <a class=\"card-link pointer\" (click)=\"modalModelo('Testes',modelos.modeloTestes)\"\n                *ngIf=\"tipo == 'A'\">Atualizar</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> <!-- / card-body -->\n</div> <!-- / card -->\n<!-- Botão para acionar modal -->\n<button type=\"button\" class=\"btn btn-primary\" hidden id=\"modalBtn\" data-toggle=\"modal\" data-target=\"#modalModelo\">\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalModelo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalModeloLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalModeloLabel\">{{etapa}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"list-group\">\n          <div class=\"row mb-1\" *ngFor=\"let modelo of modeloAtual\">\n            <div class=\"col\">\n              <li class=\"list-group-item\">{{modelo.nomeArquivo}}</li>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-danger\" (click)=\"deleteModelo(modelo)\">Excluir</button>\n            </div>\n          </div>\n        </ul>\n        <div class=\"custom-file mb-1\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onChange($event)\" />\n          <label for=\"customFile\" class=\"custom-file-label\" id=\"customFileLabel\">Selecionar arquivo</label>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpload(etapa)\">Enviar</button>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/processos/processos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/processos/processos.component.ts ***!
  \**************************************************/
/*! exports provided: ProcessosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessosComponent", function() { return ProcessosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");





var ProcessosComponent = /** @class */ (function () {
    function ProcessosComponent(router, service) {
        this.router = router;
        this.service = service;
        this.modelos = {
            modeloPlanejamento: [],
            modeloDesenvolvimento: [],
            modeloHomologacao: [],
            modeloDetalhamento: [],
            modeloTestes: []
        };
    }
    ProcessosComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
            this.router.navigate([""]);
        }
        else {
            this.tipo = localStorage.getItem("0000");
            this.service.selectAllmodelos().subscribe(function (res) {
                if (res.json().status !== 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("ERRO", "Não foi possivel carregar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                }
                else {
                    res.json().result.forEach(function (modelo) {
                        console.log(modelo);
                        if (modelo.etapa == "Planejamento") {
                            _this.modelos.modeloPlanejamento.push(modelo);
                        }
                        if (modelo.etapa == "Desenvolvimento") {
                            _this.modelos.modeloDesenvolvimento.push(modelo);
                        }
                        if (modelo.etapa == "Homologação") {
                            _this.modelos.modeloHomologacao.push(modelo);
                        }
                        if (modelo.etapa == "Detalhamento de requisitos") {
                            _this.modelos.modeloDetalhamento.push(modelo);
                        }
                        if (modelo.etapa == "Testes") {
                            _this.modelos.modeloTestes.push(modelo);
                        }
                    });
                }
            });
        }
    };
    /**
     * Desloga o usuário do sistema
     */
    ProcessosComponent.prototype.sair = function () {
        localStorage.removeItem("010101");
        localStorage.removeItem("0000");
        this.router.navigate([""]);
    };
    /**
    * Define o modelo a ser enviado
    */
    ProcessosComponent.prototype.onChange = function (event) {
        var selectedFiles = event.srcElement.files;
        var fileNames = [];
        this.files = new Set();
        for (var i = 0; i < selectedFiles.length; i++) {
            fileNames.push(selectedFiles[i].name);
            this.files.add(selectedFiles[i]);
        }
        document.getElementById("customFileLabel").innerHTML = fileNames.join(", ");
    };
    /**
    * Envia o modelo
    */
    ProcessosComponent.prototype.onUpload = function (etapa) {
        if (this.files && this.files.size > 0) {
            this.service.uploadModelo(this.files, etapa).subscribe(function (res) {
                if (res.json().status == 500) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("ERRO", "Não foi possivel fazer o upload (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                }
                else if (res.json().status == 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("SUCESSO", "Upload concluído com sucesso", "success").then(function () {
                        window.location.reload();
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("ERRO", "Selecione um arquivo", "warning");
        }
    };
    /**
    * Abre o modal de atualizaçao dos modelos da etapa selecionada
    */
    ProcessosComponent.prototype.modalModelo = function (etapa, modelos) {
        this.modeloAtual = modelos;
        this.etapa = etapa;
        document.getElementById('modalBtn').click();
        console.log(this.modeloAtual);
    };
    /**
    * Baixa o modelo selecionado
    */
    ProcessosComponent.prototype.onDownload = function (id, nomeArquivo) {
        this.service.downloadModelo(id).subscribe(function (res) {
            if (res.type != "application/json") {
                var file = new Blob([res._body], {
                    type: res._body.type
                });
                var blob = window.URL.createObjectURL(file);
                var link = document.createElement("a");
                link.href = blob;
                link.download = nomeArquivo;
                link.click();
                window.URL.revokeObjectURL(blob);
                link.remove();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("ERRO", "Impossivel localizar o arquivo", "error");
            }
        });
    };
    /**
      * Deleta o modelo selecionado
      */
    ProcessosComponent.prototype.deleteModelo = function (modelo) {
        while (modelo.caminho.includes("/")) {
            modelo.caminho = modelo.caminho.replace("/", "+");
        }
        this.service.excluirModelo(modelo.id, modelo.caminho).subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("ERRO", "Não foi possivel carregar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('SUCCESS', 'Arquivo excluido com sucesso', 'success').then(function () {
                    window.location.reload();
                });
            }
        });
    };
    ProcessosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-processos",
            template: __webpack_require__(/*! ./processos.component.html */ "./src/app/processos/processos.component.html"),
            styles: [__webpack_require__(/*! ./processos.component.css */ "./src/app/processos/processos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]])
    ], ProcessosComponent);
    return ProcessosComponent;
}());



/***/ }),

/***/ "./src/app/projetos/projetos.component.css":
/*!*************************************************!*\
  !*** ./src/app/projetos/projetos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/projetos/projetos.component.html":
/*!**************************************************!*\
  !*** ./src/app/projetos/projetos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-bottom mb-4\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"home\">CITEC</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n      aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/home' ]\">Agendas</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/candidatura' ]\">Candidatura</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/avaliacao' ]\">Avaliação</a>\n        <a class=\"nav-item nav-link\" href=\"http://cronograma.fiecdev.kinghost.net/#/login\">Gestão de projetos</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/processos' ]\">Processos</a>\n        <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/projetos' ]\">Projetos<span\n            class=\"sr-only\">(current)</span></a>\n        <a (click)=\"sair()\" class=\"material-icons nav-item nav-link\">\n          exit_to_app\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class=\"container\">\n  <div class=\"shadow p-1 mb-1 bg-light\">\n    <!-- card -->\n    <div class=\"card bg-light border-0\">\n      <div class=\"card-header bg-light text-center font-weight-bold\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <h4 class=\"h2\">\n              Projetos\n            </h4>\n          </div>\n          <!-- FILTRO -->\n          <form class=\"form-inline my-2 my-lg-0\">\n            <div class=\"col\">\n              <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"filtro\" name=\"filtro\"\n                placeholder=\"Pesquisar\" aria-label=\"Pesquisar\">\n            </div>\n            <div class=\"col\">\n              <label for=\"cursoFiltro\" class=\"text-dark mr-sm-2\">Curso:</label>\n            </div>\n            <div class=\"col\">\n              <select class=\"form-control text-dark mr-sm-2\" #cursoFiltro id=\"cursoFiltro\">\n                <option value=\"Todos\" selected>Todos</option>\n                <option value=\"Administração\">Administração</option>\n                <option value=\"Edificações\">Edificações</option>\n                <option value=\"Enfermagem\">Enfermagem</option>\n                <option value=\"Informática\">Informática</option>\n                <option value=\"Farmácia\">Farmácia</option>\n                <option value=\"Logística\">Logística</option>\n                <option value=\"Design de interiores\">Design de Interiores</option>\n                <option value=\"Nutrição\">Nutrição</option>\n                <option value=\"Cozinha\">Cozinha</option>\n                <option value=\"Química\">Química</option>\n                <option value=\"Tecnólogo em processos químicos\">Tecnólogo em processos químicos</option>\n                <option value=\"Mecânica\">Mecânica</option>\n                <option value=\"Mecatrônica\">Mecatrônica</option>\n                <option value=\"Segurança do trabalho\">Segurança do trabalho</option>\n                <option value=\"Analises Clínicas\">Analises Clínicas</option>\n                <option value=\"Projeto Externo\">Projeto Externo</option>\n              </select>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-outline-dark my-2 my-sm-0\" type=\"submit\" (click)=\"filtroFunc()\">Pesquisar</button>\n            </div>\n          </form>\n          <!-- /FILTRO -->\n        </div>\n      </div>\n\n      <div class=\"card-body bg-light\">\n        <!-- PROJETOS -->\n        <div class=\"row\">\n          <div class=\"card m-1\" *ngFor=\"let projeto of projetos\" style=\"width: 22rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{projeto.nomeProjeto}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">{{projeto.curso}}{{projeto.solicitante}}</h6>\n              <p class=\"card-text\">{{projeto.resumo}}</p>\n              <a class=\"card-link pointer pointer\" data-toggle=\"modal\" data-target=\"#modalProjeto\"\n                (click)=\"modal(projeto)\">Ver\n                mais</a>\n            </div>\n          </div>\n        </div>\n        <!-- /PROJETOS -->\n      </div>\n    </div> <!-- / card -->\n\n    <!-- MODAL DOS PROJETOS -->\n    <div *ngFor=\"let projeto of projetoAtual\">\n      <div class=\"modal fade\" id=\"modalProjeto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalProjetoLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modalProjetoLabel\">{{projeto.nomeProjeto}}</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form class=\"font120\">\n                <div class=\"row form-group\" *ngIf=\"projeto.tipoProjeto != 'Projeto Externo'\">\n                  <div class=\"col\">\n                    <label for=\"curso\" class=\"text-dark\">Curso FIEC</label>\n                    <select class=\"form-control text-dark font100\" id=\"curso\" disabled>\n                      <option>{{projeto.curso}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row form-group\" *ngIf=\"projeto.tipoProjeto == 'Projeto Externo'\">\n                  <div class=\"col\">\n                    <label for=\"solicitante\" class=\"text-dark\">Solicitante</label>\n                    <select class=\"form-control text-dark font100\" id=\"solicitante\" disabled>\n                      <option>{{projeto.solicitante}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"input-nome-responsavel-projeto\" class=\"text-dark \">Nome do Responsável</label>\n                  <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto\" rows=\"1\" maxlength=\"1000\"\n                    disabled>{{projeto.nomeResponsavel}}</textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"tipo-projeto\" class=\"text-dark \">Tipo do Projeto</label>\n                  <select class=\"form-control text-dark font100\" id=\"select-tipo-projeto\" disabled>\n                    <option>{{projeto.tipo}}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"desc-projeto \" class=\"text-dark \">Resumo do Projeto</label>\n                  <textarea class=\"form-control text-dark font100\" id=\"textarea-desc-projeto \" rows=\"3\" maxlength=\"1000\"\n                    placeholder=\"máx. 1000 caraceteres\" disabled>{{projeto.resumo}}</textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"desc-projeto \" class=\"text-dark \">Equipe do Projeto</label>\n                  <textarea class=\"form-control text-dark font100\" id=\"textarea-equipe-projeto \" rows=\"3\"\n                    maxlength=\"500\" placeholder=\"Nome completo de cada integrante\"\n                    disabled>{{projeto.equipe}}</textarea>\n                </div>\n              </form>\n              <div class=\"container\">\n                <h5>Documentação</h5>\n                <div class=\"row\">\n                  <div class=\"card m-1\" style=\"width: 15rem;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Planejamento</h5>\n                      <div *ngFor=\"let documento of documentacaoPlanejamento\">\n                        <a class=\"card-link pointer\"\n                          (click)=\"onDownload(projeto.id,'Planejamento',documento.nomeArquivo)\">{{documento.nomeArquivo}}</a>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <a class=\"card-link pointer\" *ngIf=\"projeto.idusuario == idusuario\"\n                        (click)=\"modalDocumentacao('Planejamento')\">Atualizar</a>\n                    </div>\n                  </div>\n                  <div class=\"card m-1\" style=\"width: 15rem;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Desenvolvimento</h5>\n                      <div *ngFor=\"let documento of documentacaoDesenvolvimento\">\n                        <a class=\"card-link pointer\"\n                          (click)=\"onDownload(projeto.id,'Desenvolvimento',documento.nomeArquivo)\">{{documento.nomeArquivo}}</a>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <a class=\"card-link pointer\" *ngIf=\"projeto.idusuario == idusuario\"\n                        (click)=\"modalDocumentacao('Desenvolvimento')\">Atualizar</a>\n                    </div>\n                  </div>\n                  <div class=\"card m-1\" style=\"width: 15rem;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Homologação / Entrega Final</h5>\n                      <div *ngFor=\"let documento of documentacaoHomologacao\">\n                        <a class=\"card-link pointer\"\n                          (click)=\"onDownload(projeto.id,'Homologacao',documento.nomeArquivo)\">{{documento.nomeArquivo}}</a>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <a class=\"card-link pointer\" *ngIf=\"projeto.idusuario == idusuario\"\n                        (click)=\"modalDocumentacao('Homologação')\">Atualizar</a>\n                    </div>\n                  </div>\n                  <div class=\"card m-1\" style=\"width: 15rem;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Detalhamento de requisitos</h5>\n                      <div *ngFor=\"let documento of documentacaoDetalhamento\">\n                        <a class=\"card-link pointer\"\n                          (click)=\"onDownload(projeto.id,'Detalhamento de requisitos',documento.nomeArquivo)\">{{documento.nomeArquivo}}</a>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <a class=\"card-link pointer\" *ngIf=\"projeto.idusuario == idusuario\"\n                        (click)=\"modalDocumentacao('Detalhamento de requisitos')\">Atualizar</a>\n                    </div>\n                  </div>\n                  <div class=\"card m-1\" style=\"width: 15rem;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Testes</h5>\n                      <div *ngFor=\"let documento of documentacaoTestes\">\n                        <a class=\"card-link pointer\"\n                          (click)=\"onDownload(projeto.id,'Testes',documento.nomeArquivo)\">{{documento.nomeArquivo}}</a>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <a class=\"card-link pointer\" *ngIf=\"projeto.idusuario == idusuario\"\n                        (click)=\"modalDocumentacao('Testes')\">Atualizar</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"fecharModalAtual\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\" id=\"modalDocumentacaoBtn\" hidden data-toggle=\"modal\"\n        data-target=\"#modalDocumentacao\">\n      </button>\n      <div class=\"modal fade\" id=\"modalDocumentacao\" tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"modalDocumentacaoLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modalDocumentacaoLabel\">{{projeto.nomeProjeto}} - {{etapa}}</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"contianer\">\n                <ul class=\"list-group mb-1\">\n                  <div *ngIf=\"etapa == 'Planejamento'\">\n                    <div *ngFor=\"let documento of documentacaoPlanejamento\">\n                      <li class=\"list-group-item\">{{documento.nomeArquivo}}\n                        <button class=\"btn btn-danger\"\n                          (click)=\"excluirArquivo(documento.id,documento.caminho)\">Excluir</button>\n                      </li>\n                    </div>\n                  </div>\n                  <div *ngIf=\"etapa == 'Desenvolvimento'\">\n                    <div *ngFor=\"let documento of documentacaoDesenvolvimento\">\n                      <li class=\"list-group-item\">{{documento.nomeArquivo}}</li>\n                      <button class=\"btn btn-danger\"\n                        (click)=\"excluirArquivo(documento.id,documento.caminho)\">Excluir</button>\n                    </div>\n                  </div>\n                  <div *ngIf=\"etapa == 'Homologacao'\">\n                    <div *ngFor=\"let documento of documentacaoHomologacao\">\n                      <li class=\"list-group-item\">{{documento.nomeArquivo}}</li>\n                      <button class=\"btn btn-danger\"\n                        (click)=\"excluirArquivo(documento.id,documento.caminho)\">Excluir</button>\n                    </div>\n                  </div>\n                  <div *ngIf=\"etapa == 'Detalhamento de requisitos'\">\n                    <div *ngFor=\"let documento of documentacaoDetalhamento\">\n                      <li class=\"list-group-item\">{{documento.nomeArquivo}}</li>\n                      <button class=\"btn btn-danger\"\n                        (click)=\"excluirArquivo(documento.id,documento.caminho)\">Excluir</button>\n                    </div>\n                  </div>\n                  <div *ngIf=\"etapa == 'Testes'\">\n                    <div *ngFor=\"let documento of documentacaoTestes\">\n                      <li class=\"list-group-item\">{{documento.nomeArquivo}}</li>\n                      <button class=\"btn btn-danger\"\n                        (click)=\"excluirArquivo(documento.id,documento.caminho)\">Excluir</button>\n                    </div>\n                  </div>\n                </ul>\n                <div class=\"custom-file mb-1\">\n                  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onChange($event)\" />\n                  <label for=\"customFile\" class=\"custom-file-label\" id=\"customFileLabel\">Selecionar arquivo</label>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\"\n                  (click)=\"onUpload(etapa,projeto.id,projeto.idusuario)\">Enviar</button>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"fecharModalAtual\" data-dismiss=\"modal\">Fechar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /MODAL DOS PROJETOS -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projetos/projetos.component.ts":
/*!************************************************!*\
  !*** ./src/app/projetos/projetos.component.ts ***!
  \************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var ProjetosComponent = /** @class */ (function () {
    function ProjetosComponent(router, service) {
        this.router = router;
        this.service = service;
        this.projetosFiltro = [];
        this.projetos = [];
        this.projetosInicial = [];
        this.projetoAtual = [];
        this.documentacaoPlanejamento = [];
        this.documentacaoDesenvolvimento = [];
        this.documentacaoHomologacao = [];
        this.documentacaoDetalhamento = [];
        this.documentacaoTestes = [];
    }
    ProjetosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Verifica se o usuário está logado no sistema
        if (!localStorage.getItem("010101") && !localStorage.getItem("0000")) {
            this.router.navigate([""]);
        }
        else {
            this.idusuario = localStorage.getItem("010101");
            this.tipo = localStorage.getItem("0000");
        }
        // Seleciona as candidaturas que estão em desenvolvimento
        this.service.selectCandidaturasEmDesenvolvimento().subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                res.json().result.forEach(function (projetos) {
                    var date = projetos.dataAprovacao.split("T");
                    projetos.dataAprovacao = date[0];
                    _this.projetos.push(projetos);
                    _this.projetosInicial.push(projetos);
                });
            }
        });
    };
    /**
     * Desloga o usuário do sistema
     */
    ProjetosComponent.prototype.sair = function () {
        localStorage.removeItem("010101");
        localStorage.removeItem("0000");
        this.router.navigate(['']);
    };
    /**
     * Filtro
     */
    ProjetosComponent.prototype.filtroFunc = function () {
        var _this = this;
        if (this.cursoFiltro.nativeElement.value == "Todos") {
            var curso = undefined;
        }
        else {
            var curso = this.cursoFiltro.nativeElement.value;
        }
        if (curso === undefined) {
            if (this.filtro != null) {
                this.filtro = this.filtro.trim();
            }
            if (!this.filtro) {
                this.projetos = this.projetosInicial;
            }
            else {
                this.projetosFiltro = [];
                this.projetosInicial.forEach(function (projeto) {
                    if (projeto.nomeProjeto.includes(_this.filtro)) {
                        _this.projetosFiltro.push(projeto);
                    }
                });
                this.projetos = this.projetosFiltro;
            }
        }
        else {
            if (this.filtro != null) {
                this.filtro = this.filtro.trim(); // retira os espaços em branco na frente da frase/palavra
            }
            this.projetosFiltro = [];
            this.projetosInicial.forEach(function (projeto) {
                if (curso === "Projeto Externo") { // verifica se é projeto externo, pois o tipo de procura é diferente se ele for
                    if (!_this.filtro) {
                        if (projeto.TipoProj === "Projeto Externo") {
                            _this.projetosFiltro.push(projeto);
                        }
                    }
                    else {
                        if (projeto.nomeProjeto.includes(_this.filtro) &&
                            projeto.TipoProj === "Projeto Externo") {
                            _this.projetosFiltro.push(projeto);
                        }
                    }
                }
                else if (projeto.curso) {
                    if (!_this.filtro) {
                        if (projeto.curso.includes(curso)) {
                            _this.projetosFiltro.push(projeto);
                        }
                    }
                    else {
                        if (projeto.nomeProjeto.includes(_this.filtro) &&
                            projeto.curso.includes(curso)) {
                            _this.projetosFiltro.push(projeto);
                        }
                    }
                }
            });
            this.projetos = this.projetosFiltro;
        }
    };
    /**
       * Muda o modal atual para o modal da documentação
       */
    ProjetosComponent.prototype.modalDocumentacao = function (etapa) {
        this.etapa = etapa;
        document.getElementById("fecharModalAtual").click();
        document.getElementById("modalDocumentacaoBtn").click();
    };
    /**
       * Define o projeto que irá aparecer no modal e sua documentação
       */
    ProjetosComponent.prototype.modal = function (projeto) {
        var _this = this;
        this.projetoAtual = [];
        this.projetoAtual.push(projeto);
        this.service.selectAllDocumentacao(projeto.id).subscribe(function (res) {
            if (res.json().status !== 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel carregar o projeto (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                _this.documentacaoPlanejamento = [];
                _this.documentacaoDesenvolvimento = [];
                _this.documentacaoHomologacao = [];
                _this.documentacaoDetalhamento = [];
                _this.documentacaoTestes = [];
                // Verifica e define qual etapa vai ficar cada arquivo
                res.json().result.forEach(function (documentos) {
                    console.log(documentos);
                    if (documentos.etapa == "Planejamento") {
                        _this.documentacaoPlanejamento.push(documentos);
                    }
                    if (documentos.etapa == "Desenvolvimento") {
                        _this.documentacaoDesenvolvimento.push(documentos);
                    }
                    if (documentos.etapa == "Homologação") {
                        _this.documentacaoHomologacao.push(documentos);
                    }
                    if (documentos.etapa == "Detalhamento de requisitos") {
                        _this.documentacaoDetalhamento.push(documentos);
                    }
                    if (documentos.etapa == "Testes") {
                        _this.documentacaoTestes.push(documentos);
                    }
                });
            }
        });
    };
    /**
       * Ao selecionar algo no input essa função já é chamada,
       * definindo os arquivos que serão passados na hora do upload
       */
    ProjetosComponent.prototype.onChange = function (event) {
        var selectedFiles = event.srcElement.files; // define os arquivos passados através do event
        var fileNames = []; // seta um array de nome de arquivos
        this.files = new Set();
        for (var i = 0; i < selectedFiles.length; i++) {
            fileNames.push(selectedFiles[i].name);
            this.files.add(selectedFiles[i]); //adiciona o arquivo no files
        } // Tratamento para n bugar quanto tiver mais que 1 arquivo selecionado
        document.getElementById("customFileLabel").innerHTML = fileNames.join(", ");
    };
    /**
       * Envia os arquivos que foram definidos na função onChange
       */
    ProjetosComponent.prototype.onUpload = function (etapa, id, idusuario) {
        if (this.files && this.files.size > 0) {
            this.service.upload(this.files, id, etapa, idusuario).subscribe(function (res) {
                if (res.json().status == 500) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel fazer o upload (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                        res.json().status +
                        ", erro: " +
                        res.json().result.code +
                        ": " +
                        res.json().result.errno, "error");
                }
                else if (res.json().status == 200) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Upload concluído com sucesso", "success").then(function () {
                        window.location.reload();
                    });
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Selecione um arquivo", "warning");
        }
    };
    /**
      * Realiza download dos arquivos
      */
    ProjetosComponent.prototype.onDownload = function (id, etapa, nomeArquivo) {
        var data = {
            id: id,
            etapa: etapa,
            nomeArquivo: nomeArquivo
        };
        this.service.download(data).subscribe(function (res) {
            if (res.type != "application/json") {
                var file = new Blob([res._body], {
                    type: res._body.type
                }); // instancia o Blob
                var blob = window.URL.createObjectURL(file);
                var link = document.createElement("a");
                link.href = blob;
                link.download = nomeArquivo;
                link.click();
                window.URL.revokeObjectURL(blob);
                link.remove();
                // tudo que eu fiz acima usa apenas JS puro, se trata de um modo de download via link
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Impossivel localizar o arquivo", "error");
            }
        });
    };
    /**
     * Exclui o arquivo passado
     */
    ProjetosComponent.prototype.excluirArquivo = function (id, caminho) {
        while (caminho.includes("/")) {
            caminho = caminho.replace("/", "+");
        } //altera o caminho para conseguir passar por parametro.
        this.service.excluirArquivo(id, caminho).subscribe(function (res) {
            if (res.json().status == 500) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("ERRO", "Não foi possivel excluir o arquivo (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                    res.json().status +
                    ", erro: " +
                    res.json().result.code +
                    ": " +
                    res.json().result.errno, "error");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("SUCESSO", "Arquivo excluido com sucesso", "success").then(function () {
                    window.location.reload();
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("cursoFiltro"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjetosComponent.prototype, "cursoFiltro", void 0);
    ProjetosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-projetos",
            template: __webpack_require__(/*! ./projetos.component.html */ "./src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__(/*! ./projetos.component.css */ "./src/app/projetos/projetos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fiec\Desktop\citec\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map