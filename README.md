# Detalhes do projeto
Desenvolvimento iniciado em 05/09/2024 com intuito de testar a forma na qual o LitElement suporta componentes web. O início do projeto foi meu primeiro contato com o framework. <br>
Aqui, serão testas maneiras de manifestação dos componentes para o Trabalho Prático II - o último no qual o professor, doutor e guia Tiago Mazzutti irá ser responsável. Pelo fato de ser o primeiro teste com o Lit, estou aprendendo componentes básicos e tentando uní-los com o conhecimento de responsividade e exibição básica com HTML, CSS e JS. <br>
Em uma branch separada estarão disponíveis outros testes realizados com a mesma fundação disponível abaixo. <br>
Para melhores detalhes sobre a instalação do Lit e o Vite (utilizado para compilar o Lit em tempo real), verifique o repositório já existente que documenta passo a passo a instalação completa (veja mais [aqui](https://github.com/vichsort/LitElement))

# Comandos
Dois comandos simples para que o LitElement seja carregado em tempo real em um localhost:
 
```bash
npm run build
```

Isso compila os arquivos e os trata como possibilidade para o Vite.

```bash
npm run vite
```
Pronto. Um localhost está aberto e você só precisa acessar. A compilação é automática e ocorre toda vez que você atualiza o código em uma região acessável pelo documento. Para mais detalhes, acesse a página do [Vite](https://vitejs.dev/) ou veja os scripts em 'package.json'.

# Elementos
Os elementos já existentes (até o momento) são:
- Botões (verde e vermelho)
- Pequeno jogo de cara ou coroa (com problemas de compatibilidade que serão resolvidos posteriormente)
- Elemento de interatividade que diz uma versão proposta em seu código interno
- Formulário que requere três informações (nome, data de nascimento e cpf)
- Elemento interativo que reescreve o nome inserido em um input
- Layout dinâmico de quatro seções
- Footer (em desenvolvimento)

## Futuros elementos
Os elementos que serão feitos futuramente são:
- Navbar
- Header
- Banner intantâneo
- Relógio que alterna (entre digital e analógico)
- Um detector de inputs (teclado e mouse)
- Detector de posição de mouse

# Problemas, defeitos, reclamações
O Lit me estressa muito por alguns fatores:
- Necessidade de um compilador automático
- Problemas com componentes de transição interna (reactive properties)
- Falta de suporte a estilização feita com qualquer extensão diferente de '.js'
- O fato de existirem poucos tutoriais de fácil entendimento (a maioria fala só o extremo básico)

# Congratulações
O Lit é fenomenal por:
- Facilidade na escrita e implementação
- Uso simplificado ao extremo de componentes web
- Velocidade de carregamento
- Códigos relativamente simples (mesmo com certo teor agressivo)
