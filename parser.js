// parser.js · o analisador sintático da SUA linguagem (Fase 1)
//
//   Recebe:  a lista de tokens, já sem erros léxicos: [ { tipo, lexema, linha }, ... ]
//   Devolve: a AST do programa, no formato que VOCÊ definiu
//   Erro sintático: lance um erro com a linha, o que era esperado e o que foi encontrado:
//       throw new Error("Erro sintático na linha 3: esperado NUM, encontrado ABRE");
//
// Dica: use a mesma ideia do tutorial do Robô. Uma função esperar(tipo), uma função
// para cada regra da gramática, e cada função devolve o nó da AST que reconheceu.

export function analisarSintatico(tokens) {
    // TODO: implemente o parser descendente recursivo e devolva a AST
}
