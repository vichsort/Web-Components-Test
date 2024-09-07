import { html, LitElement } from "lit"; 
import { styles } from "./component-styles/_ditaversao";

export class ditaVersao extends LitElement {
    static styles = [styles];

    static properties = {
        versao: {}
    };

    constructor() {
        super()
        this.versao = 'especial';
    }

    render() {
        return html`
        <h1>Essa é uma versão ${this.versao}!</h1>
        `
    };
}
