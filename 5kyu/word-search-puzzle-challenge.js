const wordSearch = (words, puzzle) => {
	let startLetter,
		startLetterIndex,
		directionIndices,
		remainingLetters,
		areMatchWithPuzzleLetters;

	let results = [];

	const asciiUppercaseStart = 65;

	const puzzleNavigation = {
		init() {
			this.size = Math.sqrt(puzzle.length);
			this.offset = 1;
			this.columns = [];
			this.createColumns();
			this.directionsIncrement = {
				horizontal: 1,
				vertical: 8,
				diagonal: 9,
			};
			this.directions = Object.keys(this.directionsIncrement);
		},
		createColumns() {
			for (let i = 0; i < this.size; ++i) {
				this.columns.push(String.fromCharCode(asciiUppercaseStart + i));
			}
		},
		getGridLocation(index) {
			index += this.offset;
			const row = Math.ceil(index / this.size);
			const column = this.columns[index - (row - 1) * this.size - 1];
			return [column, row];
		},
	};

	puzzleNavigation.init();

	const getDirectionIndices = (letters, direction, startIndex) => {
		return letters
			.split('')
			.map(
				(_, i) =>
					(i + 1) * puzzleDetails.directionsIncrement[direction] + startIndex
			);
	};

	const getRemainingLetters = (letters, startLetterIndex) => {
		for (let i = 0; i < directions.length; ++i) {
			directionIndices = getDirectionIndices(
				letters,
				directions[i],
				startLetterIndex
			);
			areMatchWithPuzzleLetters = directionIndices.every(
				(dirIndex, i) => puzzle[dirIndex] === letters[i]
			);
			console.log(areMatchWithPuzzleLetters);
			if (areMatchWithPuzzleLetters) {
				directionIndices.unshift(startLetterIndex);
				return directionIndices;
			}
		}
	};

	// for (let i = 0; i < words.length; ++i) {
	// 	startLetter = words[i][0];

	// 	for (let j = 0; j < puzzle.length; ++j) {
	// 		if (startLetter === puzzle[j]) {
	// 			startLetterIndex = j;
	// 			remainingLetters = getRemainingLetters(
	// 				words[i].slice(1),
	// 				startLetterIndex
	// 			);
	// 			if (remainingLetters.length > 0) {
	// 				console.log(remainingLetters);
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	//
	// 	if (remainingLetters.length) {
	// 		results.push(
	// 			remainingLetters.flatMap(letterIndex => getGridLocation(letterIndex))
	// 		);
	// 	} else {
	// 		results.push('Word Not Found');
	// 	}
	// }
	return results;
};

console.log(
	wordSearch(
		['HELLO', 'WORLD'],
		'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
	)
);
