import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from '../environments/environment';

const URL = environment.api; // DEV

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: Http) { }
  // LOGIN-----------------------------------------------\\
  logar(data) {
    return this.http.post(URL + "/login", data);
  }
  // ----------------------------------------------------\\

  // EVENTO---------------------------------------------\\
  cadastroEvento(data) {
    console.log(data);
    return this.http.post(URL + "/cadastroEvento", data);
  }
  deleteEvento(id) {
    return this.http.delete(`${URL}/deleteEvento/${id}`);
  }
  selectEventosFiec1() {
    return this.http.get(URL + "/selectEventosFiec1");
  }
  selectEventosFiec2() {
    return this.http.get(URL + "/selectEventosFiec2");
  }
  // ----------------------------------------------------\\

  // CANDIDATURA----------------------------------------\\
  candidaturaTCC(data) {
    return this.http.post(URL + "/candidaturaTCC", data);
  }
  candidaturaINTERNO(data) {
    return this.http.post(URL + "/candidaturaINTERNO", data);
  }
  candidaturaEXTERNO(data) {
    return this.http.post(URL + "/candidaturaEXTERNO", data);
  }
  // ----------------------------------------------------\\

  // AVALIAÇÃO-------------------------------------------\\
  selectCandidaturas() {
    return this.http.get(URL + "/selectCandidaturas");
  }
  selectCandidaturasEmDesenvolvimento() {
    return this.http.get(URL + "/selectCandidaturasEmDesenvolvimento");
  }
  selectCandidaturasEmRevisao() {
    return this.http.get(URL + "/selectCandidaturasEmRevisao");
  }
  selectCandidaturasReprovados() {
    return this.http.get(URL + "/selectCandidaturasReprovados");
  }
  deleteCandidatura(id) {
    return this.http.delete(`${URL}/deleteCandidatura/${id}`);
  }
  aproveCandidatura(id) {
    return this.http.put(URL + "/aproveCandidatura", id);
  }
  revisaoCandidatura(data) {
    return this.http.put(URL + "/revisaoCandidatura", data);
  }
  reprovarCandidatura(data) {
    return this.http.put(URL + "/reprovacaoCandidatura", data);
  }
  reenviarTcc(data) {
    return this.http.put(URL + "/reenviarTcc", data);
  }
  reenviarExterno(data) {
    return this.http.put(URL + "/reenviarExterno", data);
  }
  reenviarInterno(data) {
    return this.http.put(URL + "/reenviarInterno", data);
  }
  // ----------------------------------------------------\\
  upload(files: Set<File>, id, etapa, idusuario) {
    const formData = new FormData();
    files.forEach(file => {
      formData.append("file", file, file.name);
    });
    formData.append("id", id);
    formData.append("etapa", etapa);
    formData.append("idusuario", idusuario);
    // Form data serve para enviar o arquivo via http, o formData.append serve para que possamos
    //adicionar mais informações(no caso as que vamos adicionar no banco) dentro do FormData
    return this.http.post(URL + "/upload", formData);
  }
  download(data) {
    return this.http.get(
      `${URL}/download/${data.id}/${data.etapa}/${data.nomeArquivo}`,
      {
        responseType: 3 // Define o tipo de resposta que vai nos retornar, no caso o tipo é Blob
      }
    );
  }
  selectAllDocumentacao(id) {
    return this.http.get(`${URL}/selectAllDocumentacao/${id}`);
  }
  excluirArquivo(id, caminho) {
    return this.http.delete(`${URL}/excluirArquivo/${id}/${caminho}`);
  }
  // ----------------------------------------------------\\
  uploadModelo(files: Set<File>, etapa) {
    const formData = new FormData();
    files.forEach(file => {
      formData.append("file", file, file.name);
      console.log(file.name);
    });
    formData.append("etapa", etapa);
    // Form data serve para enviar o arquivo via http, o formData.append serve para que possamos
    //adicionar mais informações(no caso as que vamos adicionar no banco) dentro do FormData
    return this.http.post(URL + "/uploadModelo", formData);
  }
  downloadModelo(id) {
    return this.http.get(
      `${URL}/downloadModelo/${id}`,
      {
        responseType: 3 // Define o tipo de resposta que vai nos retornar, no caso o tipo é Blob
      }
    );
  }
  selectAllmodelos() {
    return this.http.get(URL + "/selectAllmodelos");
  }
  excluirModelo(id, caminho) {
    return this.http.delete(`${URL}/excluirModelo/${id}/${caminho}`);
  }
}
