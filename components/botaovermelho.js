import { html, LitElement} from "lit";
import { styles } from "./component-styles/_botaovermelho";

export class BotaoVermelho extends LitElement {
    static styles = [styles];

    render() {
        return html`
        <button>Eu sou vermelho</button>
        `
    };
}