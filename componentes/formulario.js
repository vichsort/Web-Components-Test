import { html, LitElement } from "lit";
import { styles } from "./component-styles/_formulario";

export class novoFormulario extends LitElement {
    static styles = [styles];

    static properties = {
        nome: {},
        data: {},
        cpf: {}
    };

    constructor() {
        super();
        this.nome = '';
    };

    sniffNome(event) {
        const inputNome = event.target;
        this.nome = inputNome.value;
    };

    sniffData(event) {
        const inputData = event.target;
        this.data = inputData.value;
    };

    sniffCpf(event) {
        const inputCpf = event.target;
        this.cpf = inputCpf.value;
    }

    render() {
        return html`
            <h1>Este é um formulário padrão</h1>
            <h2>Você pode ver mais sobre nós >aqui<</h2>
            <form method="post" id="form">
                <fieldset class="field">
                    <legend>O cadastro ocorre aqui</legend>
                    <div class="container">
                        <label for="nome">
                            <input @input=${this.sniffNome} id="nome" type="text" required placeholder="Aqui vai seu nome"/>
                        </label>

                        <label for="data">
                            <input @input=${this.sniffData} id="data" type="date" required/>
                        </label>

                        <label for="cpf">
                            <input @input=${this.sniffCpf} id="cpf" type="password" required placeholder="Aqui vai seu cpf"/>
                        </label>
                    </div>
                </fieldset>
                <input type="submit" class="enviar">
            </form>
        `
    }
}