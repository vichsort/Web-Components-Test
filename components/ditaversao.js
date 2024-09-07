import { LitElement, html, css } from "lit"; 

export class DitaVersao extends LitElement {
    static properties = {
        versao: {},
        nome: {}
    };

    static styles = css`
    h1, h2 {
        color: white;
    }
    `

    constructor() {
        super()
        this.versao = 'especial';
    }

    mudouNome(event) {
        const input = event.target;
        this.nome = input.value;
    }


    render() {
        return html`
        <h1>Essa é uma versão ${this.versao}!</h1>
        <h2>Por favor ${this.nome}, insira seu nome na caixa abaixo:</h2><br>
        <input @input=${this.mudouNome} placeholder="Seu nome vai aqui!">
        `
    };
}
