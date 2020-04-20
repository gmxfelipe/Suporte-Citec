"use strict";

class FormNovoEvento {
    constructor({
        form_id,
        label_texts,
        input_ids,
        input_placeholders
    }) {
        this.form_id = form_id;
        this.label_texts = label_texts;
        this.input_ids = input_ids;
        this.input_placeholders = input_placeholders;
    }

    label_html({label_for, label_text}){
        return `
            <label for="${label_for}">${label_text}</label>
        `;
    }

    input_html({input_id, placeholder}){
        return `
            <input type="text" 
                   class="form-control"
                   id="${input_id}" 
                   name="${input_id}"
                   placeholder="${placeholder}"/>
        `;
    }

    div_html(html_content){
        return `
            <div class="form-group">
                ${html_content}
            </div>
        `;
    }

    get_html(){
        const labels = this.input_ids.map((input_id, i) => this.label_html({
            label_for: input_id,
            label_text: this.label_texts[i]
        }));

        const inputs = this.input_ids.map((input_id, i) => this.input_html({
            input_id,
            placeholder: this.input_placeholders[i]
        }));

        const divs = labels.map((label, i) => this.div_html(label + inputs[i]));

        return `<form id="${this.form_id}">`
                + divs.reduce((acc, div) => acc += div, "")
                + '</form>';
        
        // `
        // <form id="form-novo-evento">
        //     <div class="form-group">
        //         <label for="titulo-evento">Título</label>
        //         <input type="text" 
        //                 class="form-control"
        //                 id="titulo-evento" 
        //                 name="titulo-evento"
        //                 placeholder="Palestra">
        //     </div>
        //     <div class="form-group">
        //         <label for="inicio-evento">Início</label>
        //         <input type="text" 
        //                 class="form-control"
        //                 id="inicio-evento"
        //                 name="inicio-evento"
        //                 placeholder="HH:MM">
        //         <small class="form-text text-muted">
        //             Exemplo: 09:45
        //         </small>
        //     </div>
        //     <div class="form-group">
        //         <label for="termino-evento">Término</label>
        //         <input type="text" 
        //             class="form-control"
        //             id="termino-evento"
        //             name="termino-evento" 
        //             placeholder="HH:MM">
        //         <small class="form-text text-muted">
        //             Exemplo: 12:00
        //         </small>
        //     </div>
        // </form>
        // `;
    }
}

const dados_novoEvento = () => {
    // console.log($('#form-novo-evento').serializeArray())
    const dados = $('#form-novo-evento')
        .serializeArray()
        .reduce((dados, input) => {
            switch (input.name)
            {
                case "titulo-evento":
                    dados.titulo = input.value;
                    dados.length += 1;
                return dados;

                case "inicio-evento":
                    if (input.value.length > 0)
                    {
                        dados.inicio = "T" + input.value; 
                        dados.length += 1;
                    }
                return dados;

                case "termino-evento":
                    if (input.value.length > 0)
                    {
                        dados.termino = "T" + input.value;
                        dados.length += 1;
                    }
                return dados;
            }
        }, {length: 0});

    return dados.length === 3 ? dados : null;
};

const show_dialog = (inserir_evento) => {
    bootbox.dialog({
        backdrop: true,
        onEscape: true,
        size: "medium",
        title: "Novo Evento",
        message: new FormNovoEvento({
            form_id: "form-novo-evento",
            label_texts: [
                "Título",
                "Início",
                "Término"
            ],
            input_ids: [
                "titulo-evento",
                "inicio-evento",
                "termino-evento"
            ],
            input_placeholders: [
                "Palestra",
                "HH:MM. Exemplo: 09:45",
                "HH:MM. Exemplo: 12:00"
            ],
        }).get_html(),
        buttons: {
            salvar: {
                label: "Salvar",
                className: "btn-primary",
                callback: () => inserir_evento(dados_novoEvento())
            }
        }
    });
};

const render_calendar = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [
                'interaction',
                'dayGrid', 
                'timeGrid', 
                'list'
            ],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listMonth'
            },
            defaultDate: (new Date(Date.now())).toISOString().split('T')[0],
            locale: 'pt-br',
            editable: true,
            eventLimit: true,
            selectable: true,
            selectMirror: true,
            eventClick(arg){
                // arg.event.remove();

            },
            select(arg){
                // console.log(arg);
                show_dialog((dados_novoEvento) => {
                    // bootbox é o prompt do javascript melhorado
                    // se não capturarmos os dados por window.prompt(), 
                    // não sei porque, mas o full-calendar insere diferentes
                    // eventos no mesmo quadradinho. 
                    if (dados_novoEvento)
                    {
                        // eventos adicionados sao eventos diarios apenas
                        calendar.addEvent({
                            title: dados_novoEvento.titulo,
                            start: new Date(arg.startStr + dados_novoEvento.inicio),
                            end: new Date(arg.startStr + dados_novoEvento.termino),
                        });
                    }
                });
                calendar.unselect();
            },
            events: [
                {
                    id: 1,
                    title: 'Lançamento',
                    start: '2019-05-10T09:30',
                    end: '2019-05-10T11:00'
                },
                {
                    title: 'Marketing',
                    start: '2019-05-13T08:00',
                },
                {
                    title: 'Almoço',
                    start: '2019-05-13T12:00',
                    end: '2019-05-13T13:00'
                },
                {
                    title: 'Encerramento',
                    start: '2019-05-13T15:00'
                },
                {
                    groupId: 999,
                    title: 'Projeto A',
                    start: '2019-05-14T16:00',
                    end: '2019-05-14T17:00'
                },
                {
                    groupId: 999,
                    title: 'Projeto A',
                    start: '2019-05-14T16:00',
                    end: '2019-05-14T17:00'
                },
                
            ],
        });
    
        calendar.render();
    });
};

render_calendar();


// const limpar_formNovoEvento = () => {
//     $('#form-novo-evento')[0].reset();
// };

// const listener_salvarNovoEvento = (cb) => {
//     document.getElementById('btn-salvar-novo-evento')
//             .addEventListener('click', () => cb(dados_novoEvento()));
// };

// const toggle_modalNovoEvento = () => {
//     $('#modal-novo-evento').modal('toggle');
// };