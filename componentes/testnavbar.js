import { html, LitElement } from "lit";
import { styles } from "./component-styles/_testnavbar";

export class testNavbar extends LitElement {
    static styles = [styles];

    render() {
        return html`
            <nav>
                <div class="row">
                    <a href="#">Início</a>
                    <a href="#">Objetivo</a>
                </div>
                <div class="row">
                    <div class="logo">
                        <p>Isso é a logo</p>
                    </div>
                </div>
                <div class="row">
                    <a href="#">Sobre</a>
                    <a href="#">FAQ</a>
                </div>
            </nav>
        `;
    }
}