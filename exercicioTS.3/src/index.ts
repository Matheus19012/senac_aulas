enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function movie(movieName: string, releaseYear: number, movieGenre: string, punctuation?: number): void {
    console.log(`nome: ${movieName}, anoLancamento: ${releaseYear}, genero: ${movieGenre}` || `nome: ${movieName}, anoLancamento: ${releaseYear}, genero: ${movieGenre} e nota: ${punctuation}`);
}

movie("Duna", 2021, GENERO.ACAO)

movie("Duna", 2021, GENERO.ACAO, 74)