const wordSearch = (words, puzzle) => {
	// ascii

	const asciiStart = 65;
	const getCharFromCode = code => String.fromCharCode(code);

	// puzzle details

	const puzzleArray = puzzle.split('');
	const puzzleSize = Math.sqrt(puzzleArray.length);
	const puzzleColumns = [];

	for (let i = 0; i < puzzleSize; ++i) {
		puzzleColumns.push(getCharFromCode(asciiStart + i));
	}

	// puzzle navigation

	const offsetPuzzleStart = 1;
	const getCharIndex = char => puzzle.indexOf(char) + offsetPuzzleStart;
	const getCharPosition = index => {
		const row = Math.ceil(index / puzzleSize);
		const column = puzzleColumns[index - (row - 1) * puzzleSize - 1];
		return [column, row];
	};

	// puzzle search

	const searchLetter = char => {
		const index = getCharIndex(char);
		const position = getCharPosition(index);
		console.log(position);
	};

	console.log(puzzleSize);
	console.log(puzzleArray);
	console.log(puzzleColumns);

	// letter H
	const letter = words[0][0];
	searchLetter(letter);
};

wordSearch(
	['HELLO', 'WORLD'],
	'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
);
