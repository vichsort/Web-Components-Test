import { html, LitElement, css } from "lit";

export class BotaoVermelho extends LitElement {
    static styles = css`
    button {
        background-color: red;
        border: none;
        padding: 5px;
    }
    `;

    render() {
        return html`
        <button>Eu sou vermelho</button>
        `
    };
}