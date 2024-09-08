/* básicos */
import { botaoVerde } from "../componentes/botaoverde.js";
window.customElements.define('botao-verde', botaoVerde);

import { botaoVermelho } from "../componentes/botaovermelho.js";
window.customElements.define('botao-vermelho', botaoVermelho);


/* customizáveis */
import { ditaVersao } from "../componentes/ditaversao.js";
window.customElements.define('dita-versao', ditaVersao);

import { testFooter } from "../componentes/testfooter.js";
window.customElements.define('test-footer', testFooter);

import { testNavbar } from "../componentes/testnavbar.js";
window.customElements.define('test-navbar', testNavbar);


/* layout */
import { gridLayout } from "../componentes/gridlayout.js";
window.customElements.define('grid-layout', gridLayout);


/* transição interna */
import { caraCoroa } from "../componentes/caracoroa.js";
window.customElements.define('cara-coroa', caraCoroa);

import { novoFormulario } from "../componentes/formulario.js";
window.customElements.define('novo-formulario', novoFormulario);

import { questNome } from "../componentes/questnome.js";
window.customElements.define('quest-nome', questNome);