import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { isSameDay, isSameMonth } from "date-fns";
import { Subject } from "rxjs";
import {
  CalendarEvent,
  CalendarView,
  CalendarDateFormatter
} from "angular-calendar";
import { DAYS_OF_WEEK } from "angular-calendar";
import { CustomDateFormatter } from "../custom-date-formatter.provider";
import swal from "sweetalert";
import { BackendService } from "../../backend.service";

const colors: any = {
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

@Component({
  selector: "app-fiec1",
  templateUrl: "./fiec1.component.html",
  styleUrls: ["./fiec1.component.css"],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class Fiec1Component implements OnInit {
  public telaEvento: boolean = false;
  public modalStatus: boolean = false;
  public titleDoEvento: string;
  public startDoEvento;
  public endDoEvento: Date;
  public colorDoEvento;
  public descricaoAtual;
  public descricaoEvento: string;
  private draggaableDoEvento = false;
  public eventos = [];
  public resposta = "s";

  public eventoCheck = [];
  public tipo = localStorage.getItem("0000");
  @ViewChild("modalContent") modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  locale: string = "pt-PT";
  viewDate: Date = new Date();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = false;
  constructor(private service: BackendService) { }

  ngOnInit() {
    this.service.selectEventosFiec1().subscribe(res => {
      if (res.json().status !== 200) {
        swal(
          "Não foi possivel carregar a página (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
      } else {
        res.json().result.forEach(evento => {
          this.eventoCheck.push(evento);
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
          this.events = [
            ...this.events,
            {
              id: evento.idevento,
              start: new Date(
                evento.ano_start,
                evento.mes_start,
                evento.dia_start,
                evento.hora_start,
                evento.minuto_start,
                evento.segundo_start
              ),
              end: new Date(
                evento.ano_end,
                evento.mes_end,
                evento.dia_end,
                evento.hora_end,
                evento.minuto_end,
                evento.segundo_end
              ),
              title: evento.titulo,
              color: corT,
              draggable: this.draggaableDoEvento,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            }
          ];
        });
        console.log(this.eventoCheck);
      }
    });
  }

  telaEventoHide() {
    this.telaEvento = false;
  }
  cadastroEvento(
    titleDoEventoC,
    startDoEventoC,
    endDoEventoC,
    colorDoEventoC,
    descricaoEventoC
  ) {
    if (
      titleDoEventoC &&
      startDoEventoC &&
      endDoEventoC &&
      colorDoEventoC &&
      descricaoEventoC
    ) {
      let data = {
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

      data["end"] = new Date(
        data.ano_end,
        data.mes_end,
        data.dia_end,
        data.hora_end,
        data.minuto_end,
        data.segundo_end,
        0
      );
      data["start"] = new Date(
        data.ano_start,
        data.mes_start,
        data.dia_start,
        data.hora_start,
        data.minuto_start,
        data.segundo_start,
        0
      );

      let resposta = "s";
      this.eventoCheck.forEach(evento => {
        if (
          evento.cor == data.cor ||
          evento.cor == "all" ||
          data.cor == "all"
        ) {
          resposta = "n";
          if (
            (parseInt(evento.ano_start) == parseInt(data.ano_start) &&
              parseInt(evento.mes_start) == parseInt(data.mes_start) &&
              parseInt(evento.dia_start) == parseInt(data.dia_start)) ||
            (parseInt(evento.ano_end) == parseInt(data.ano_start) &&
              parseInt(evento.mes_end) == parseInt(data.mes_start) &&
              parseInt(evento.dia_end) == parseInt(data.dia_start)) ||
            (parseInt(evento.ano_end) == parseInt(data.ano_end) &&
              parseInt(evento.mes_end) == parseInt(data.mes_end) &&
              parseInt(evento.dia_end) == parseInt(data.dia_end)) ||
            (parseInt(evento.ano_start) == parseInt(data.ano_end) &&
              parseInt(evento.mes_start) == parseInt(data.mes_end) &&
              parseInt(evento.dia_start) == parseInt(data.dia_end))
          ) {
            if (
              parseInt(evento.hora_start) >= parseInt(data.hora_end) &&
              parseInt(evento.minuto_start) >= parseInt(data.minuto_end) &&
              parseInt(evento.segundo_start) >= parseInt(data.segundo_end)
            ) {
              resposta = "s";
            }
            if (
              parseInt(evento.hora_end) <= parseInt(data.hora_start) &&
              parseInt(evento.minuto_end) <= parseInt(data.minuto_start) &&
              parseInt(evento.segundo_end) <= parseInt(data.segundo_start)
            ) {
              resposta = "s";
            }
            if (
              parseInt(evento.hora_end) == parseInt(data.hora_end) &&
              parseInt(evento.minuto_end) == parseInt(data.minuto_end) &&
              parseInt(evento.segundo_end) == parseInt(data.segundo_end) &&
              parseInt(evento.hora_start) == parseInt(data.hora_start) &&
              parseInt(evento.minuto_start) == parseInt(data.minuto_start) &&
              parseInt(evento.segundo_start) == parseInt(data.segundo_start)
            ) {
              resposta = "n";
            }
          } else {
            resposta = "s";
          }
        }
      });

      if (
        parseInt(data.ano_end) <= parseInt(data.ano_start) &&
        parseInt(data.mes_end) <= parseInt(data.mes_start) &&
        parseInt(data.dia_end) <= parseInt(data.dia_start) &&
        parseInt(data.hora_end) <= parseInt(data.hora_start) &&
        parseInt(data.minuto_end) <= parseInt(data.minuto_start) &&
        parseInt(data.segundo_end) <= parseInt(data.segundo_start)
      ) {
        swal(
          "ERRO",
          "A data inicial do evento deve ser menor do que a data final do evento",
          "warning"
        );
      } else {
        if (resposta == "s") {
          this.service.cadastroEvento(data).subscribe(res => {
            if (res.json().status !== 200) {
              swal(
                "ERRO",
                "Não foi possivel cadastrar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
                res.json().status +
                ", erro: " +
                res.json().result.code +
                ": " +
                res.json().result.errno,
                "error"
              );
            } else {
              swal("SUCESSO", "Evento cadastrado com sucesso", "success").then(
                function () {
                  window.location.reload();
                }
              );
            }
          });
        } else {
          swal(
            "ERRO",
            "Já existe uma reserva deste setor nesse horario",
            "warning"
          );
        }
      }
    } else {
      swal("ERRO", "Campos Vazios", "warning");
    }
  }

  /**
   * Deleta o evento passado
   * @param event
   */
  deleteEvento(event) {
    this.events.push(event);
    this.service.deleteEvento(event.id).subscribe(res => {
      if (res.json().status !== 200) {
        swal(
          "ERRO",
          "Não foi possivel excluir o item (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
        console.log(res);
      } else {
        this.deleteEvent(event);
        swal("SUCESSO", "Evento deletado com sucesso", "success").then(
          function () {
            window.location.reload();
          }
        );
      }
    });
  }

  // A PARTIR DAQUI É SÓ FUNÇÕES DADAS PELO ANGULAR-CALENDAR
  eventClicked({ event }: { event: CalendarEvent }): void {
    this.eventos = [];
    this.service.selectEventosFiec1().subscribe(res => {
      if (res.json().status !== 200) {
        swal(
          "Não foi possivel carregar o evento (CONTATE O SETOR DE DESENVOLVIMENTO), status: " +
          res.json().status +
          ", erro: " +
          res.json().result.code +
          ": " +
          res.json().result.errno,
          "error"
        );
      } else {
        res.json().result.forEach(evento => {
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
            this.eventos = [
              ...this.eventos,
              {
                id: evento.idevento,
                start:
                  evento.dia_start +
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
                end:
                  evento.dia_end +
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
            ];
          }
        });
        document.getElementById("modalEventoBtn1").click();
      }
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
