"use strict";
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function movie(movieName, releaseYear, movieGenre, punctuation) {
    console.log(`nome: ${movieName}, anoLancamento: ${releaseYear}, genero: ${movieGenre}` || `nome: ${movieName}, anoLancamento: ${releaseYear}, genero: ${movieGenre} e nota: ${punctuation}`);
}
movie("Duna", 2021, GENERO.ACAO);
movie("Duna", 2021, GENERO.ACAO, 74);
//# sourceMappingURL=index.js.map