import { html, LitElement } from "lit";
import { styles } from "./component-styles/_testfooter";

export class testFooter extends LitElement {
    static styles = [styles];

    render() {
        return html`
            <footer>
                <div class="container">
                    <div class="logo">
                        <p>Isso é a logo</p>
                    </div>

                    <div class="abas">
                        <div class="coluna">
                            <a href="#">Início</a>
                            <a href="#">Objetivo</a>
                        </div>
                        <div class="coluna">
                            <a href="#">Sobre</a>
                            <a href="#">FAQ</a>
                        </div>    
                    </div>
                </div>
                <div class="below">
                    <h3>©2024 empresa random</h3>
                    <p>De volta ao topo</p>
                </div>
            </footer>
        `
    }

}