import { css } from "lit";

export const styles = css`
    .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }

    .child, .child2, .child3, .child4 {
        display: flex;
        flex: 1 1 auto;
        text-align: center;
        justify-content: center;
        padding: 1rem;
        margin-inline: auto;
        margin-top: 3em;
        height: 100dvh;
        align-items: center;
    }

    .child {
        background-color: blue;
    }

    .child2 {
        background-color: purple;
    }

    .child3 {
        background-color: orange
    }

    .child4 {
        background-color: brown
    }

    @media (max-width: 1000px) {
        .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
    }

    @media (max-width: 600px) {
        .master { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
    }

    .child, .child2, .child3, .child4 {
        padding: 5rem;
        height: 0;
        margin-top: 0em;
    }
    }
`