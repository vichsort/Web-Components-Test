import { html, LitElement} from "lit";
import { styles } from "./component-styles/_botaoverde";

export class botaoVerde extends LitElement {
    static styles = [styles];

    render() {
        return html`
        <button>Eu sou verde</button>
        `
    };
}