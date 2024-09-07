import { html, LitElement } from "lit";
import { styles } from "./component-styles/_gridlayout.js";

export class gridLayout extends LitElement {
    static styles = [styles];

    render() {
        return html`
        <div class="master">
            <div class="child">
                <p>1. Blue</p>
            </div>
            <div class="child2">
                <p>2. Purple </p>
            </div>
            <div class="child3">
                <p>3. Orange</p>
            </div>
            <div class="child4">
                <p>4. Brown</p>
            </div>
        </div>
        `
    }

}