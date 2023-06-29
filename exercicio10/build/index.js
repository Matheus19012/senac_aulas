"use strict";
var genre;
(function (genre) {
    genre["action"] = "a\u00E7\u00E3o";
    genre["drama"] = "drama";
    genre["comedy"] = "com\u00E9dia";
    genre["romance"] = "romance";
    genre["terror"] = "terror";
})(genre || (genre = {}));
function getFilmType(name, year, genre, pontuation) {
    let film1 = {
        name: name,
        year: year,
        genre: genre,
        pontuation: pontuation ? pontuation : 0,
    };
    let hasPontuation = pontuation ? `| Pontuação: ${film1.pontuation}` : ``;
    return `Nome: ${film1.name} | Ano de lançamento: ${film1.year} | genero: ${film1.genre} ${hasPontuation}`;
}
console.log(getFilmType('Game of Thrones', 2010, genre.action));
//# sourceMappingURL=index.js.map