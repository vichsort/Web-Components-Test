import { LitElement, html, css } from "lit"; 

class BotaoVermelho extends LitElement {
    static styles = css`
    button {
        background-color: red;
        border: none;
    }
    `;

    render() {
        return html`
        <button>Click Me!</button>
        `
    };
}

class BotaoAzul extends LitElement {
    static styles = css`
    button {
        background-color: blue;
        border: none;
    }
    `;

    static properties = {
        version: {}
    };

    constructor() {
        super()
        this.version = 'Special';
    }


    render() {
        return html`
        <button>Click Me!</button>
        `
    };
}

class DitaVersao extends LitElement {
    static properties = {
        versao: {},
        nome: {}
    };

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

customElements.define('botao-vermelho', BotaoVermelho);
customElements.define('botao-azul', BotaoAzul);
customElements.define('dita-versao', DitaVersao);