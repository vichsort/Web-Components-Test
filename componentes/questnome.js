import { html, LitElement } from "lit";
import { styles } from "./component-styles/_questnome.js";

export class questNome extends LitElement {
    static styles = [styles];

    static properties = {
        nome: {}
    };

    mudouNome(event) {
        const input = event.target;
        this.nome = input.value;
    }

    render() {
        return html`
            <h2>Por favor ${this.nome}, insira seu nome na caixa abaixo:</h2><br>
            <input @input=${this.mudouNome} placeholder="Seu nome vai aqui!">
        `
    }
}