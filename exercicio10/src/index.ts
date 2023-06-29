// informações essenciais
// Nome do filme
// ano de lançamento
// genero do filme
// pontuação ?

enum genre {
	action ="ação",
	drama ="drama",
	comedy ="comédia",
	romance ="romance",
	terror ="terror"
}

type movie = {
	name: string,
	year: number,
	genre: string,
	pontuation: number
}

function getFilmType(name: string, year: number, genre: string, pontuation?: number): string {
	let film1: movie = {
		name: name,
		year: year,
		genre: genre,
		pontuation: pontuation ? pontuation : 0,
	}

	let hasPontuation = pontuation ? `| Pontuação: ${film1.pontuation}` : ``;

	return `Nome: ${film1.name} | Ano de lançamento: ${film1.year} | genero: ${film1.genre} ${hasPontuation}`;
}

console.log(getFilmType('Game of Thrones', 2010, genre.action));