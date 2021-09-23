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
	const readIndex = index => {
		const row = Math.ceil(index / puzzleSize);
		const column = puzzleColumns[index - (row - 1) * puzzleSize - 1];
		console.log(row);
		console.log(column);
	};

	console.log(puzzleSize);
	console.log(puzzleArray);
	console.log(puzzleColumns);

	// H
	const char = words[0][0];

	// get index + offset (puzzle starts at 1)
	const getIndex = char => puzzle.indexOf(char) + 1;
	const index = getIndex(char);

	readIndex(index);
};

wordSearch(
	['HELLO', 'WORLD'],
	'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
);
