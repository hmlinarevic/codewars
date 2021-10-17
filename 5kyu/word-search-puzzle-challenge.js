const wordSearch = (words, puzzle) => {
	const asciiUppercaseStart = 65;

	const myPuzzle = {
		size: Math.sqrt(puzzle.length),
		columns: [],
		navigation: {
			directions: ['horizontal', 'vertical', 'diagonal'],
			increments: [1, 8, 9],
			offset: 1,
		},
		createColumns() {
			for (let i = 0; i < this.size; ++i) {
				this.columns.push(String.fromCharCode(asciiUppercaseStart + i));
			}
		},
		setStartLetter(letter) {
			this.startLetter = letter;
		},
		setStartLetterIndex(index) {
			this.startLetterIndex = index;
		},
		setRemainingLetters(letters) {
			this.remainingLetters = letters;
		},
		setAdjecentIndices() {
			this.adjecentIndices = this.getAdjecentIndices();
		},
		setCorrectIndices() {
			this.correctIndices = this.getCorrectIndices();
		},

		getGridLocation(index) {
			index += this.navigation.offset;
			const row = Math.ceil(index / this.size);
			const column = this.columns[index - (row - 1) * this.size - 1];
			return [column, row];
		},
		getAdjecentIndices() {
			const { directions, increments } = this.navigation;
			const indices = {};
			directions.forEach((dir, i) => {
				indices[dir] = this.remainingLetters.split('').map((_, j) => {
					return (j + 1) * increments[i] + this.startLetterIndex;
				});
			});
			return indices;
		},
		getCorrectIndices() {
			const { directions } = this.navigation;
			let match;
			for (let i = 0; i < directions.length; ++i) {
				this.adjecentIndices[directions[i]].every((value, i) => {
					match = puzzle[value] === this.remainingLetters[i];
					console.log(match);
				});
				if (match) {
					this.adjecentIndices[directions[i]].unshift(this.startLetterIndex);
					return this.adjecentIndices[directions[i]];
				} else if (i === 2 && !match) {
					return ['Not Found'];
				}
			}
		},
		getSolution() {
			const { directions: dirs } = this.navigation;
			const indices = this.adjecentIndices;
			let solution, match, correctIndices;

			// find correct indices that correspond to remaining letters
			for (let i = 0; i < dirs.length; ++i) {
				indices[dirs[i]].every((item, i) => {
					match = puzzle[item] === this.remainingLetters[i];
					console.log(match);
				});
				if (match) {
					correctIndices = indices[dirs[i]];
				}
			}

			if (!correctIndices) {
				solution = ['Word Not Found'];
			} else {
				// add start letter index to indices
				correctIndices.unshift(this.startLetterIndex);
				// transform all indices to grid locations
				solution = correctIndices.map(index => this.getGridLocation(index));
			}
			console.log(solution);
		},
		getLocations() {
			console.log(this.correctIndices, 'correctIndices');
			// const locations = this.correctIndices.map(correctIndex =>
			// 	this.getGridLocation(correctIndex)
			// );
			// console.log(locations);
		},
	};

	myPuzzle.createColumns();

	for (let i = 0; i < words.length; ++i) {
		myPuzzle.setStartLetter(words[i][0]);

		for (let j = 0; j < puzzle.length; ++j) {
			if (myPuzzle.startLetter === puzzle[j]) {
				myPuzzle.setStartLetterIndex(j);
				myPuzzle.setRemainingLetters(words[i].slice(1));
				myPuzzle.setAdjecentIndices();
				myPuzzle.getSolution();

				break;
				if (remainingLetters.length > 0) {
					console.log(remainingLetters);
					break;
				}
			}
		}
		break;
		//
		if (remainingLetters.length) {
			results.push(
				remainingLetters.flatMap(letterIndex => getGridLocation(letterIndex))
			);
		} else {
			results.push('Word Not Found');
		}
	}
	return 'vader';
};

console.log(
	wordSearch(
		['HELLO', 'WORLD'],
		'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
	)
);

// getRemainingIndices(letters) {
// 	for (let i = 0; i < directions.length; ++i) {
// 		directionIndices = getRemainingIndices(
// 			letters,
// 			directions[i],
// 			startLetterIndex
// 		);
// 		areMatchWithPuzzleLetters = directionIndices.every(
// 			(dirIndex, i) => puzzle[dirIndex] === letters[i]
// 		);
// 		if (areMatchWithPuzzleLetters) {
// 			directionIndices.unshift(startLetterIndex);
// 			return directionIndices;
// 		}
// 	}
// },
