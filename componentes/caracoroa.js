import { html, LitElement } from 'lit';
import { styles } from './component-styles/_caracoroa.js'

export class caraCoroa extends LitElement {
    static styles = [styles];

    static properties = {
        resultado: {},
    }

    constructor() {
        super();
        this.resultado = '';
    }

    flipCoin() {
        if (Math.random() < 0.5) {
            this.resultado = 'Cara'
        } else {
            this.resultado = 'Coroa'
        };
    }

    render() {
        return html`
        <button>Gire a moeda!</button>
        <p>O resultado é: ${this.resultado}</p>
        `
    }
}