import { css } from "lit";

export const styles = css`
    footer {
        background-color: black;
        width: 100dw;
        padding: 2em;
    }

    .container {
        display: flex;
        gap: 66.6%;
    }

    .logo {
        background-color: green;
        display: block;
        padding: 1em;
    }

    .abas {
        display: flex;
        gap: 40px;
    }

    .coluna {
        flex: 50%;
    }

    a{
        color: white;
        font-size: 1.1rem;
    }

    a:hover {
        color: blue;
    }
`