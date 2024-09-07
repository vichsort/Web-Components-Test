import { LitElement, html} from "lit"; 
import { styles } from "./component-styles/_ditaversao";

export class ditaVersao extends LitElement {
    static properties = {
        versao: {},
        nome: {}
    };

    static styles = [styles];
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
