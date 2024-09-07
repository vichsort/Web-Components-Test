import { html, LitElement, css } from "lit";

export class BotaoVerde extends LitElement {
    static styles = css`
    button {
        background-color: green;
        border: none;
        padding: 5px;
    }
    `;

    render() {
        return html`
        <button>Eu sou verde</button>
        `
    };
}