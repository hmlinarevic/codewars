const wordSearch = (words, puzzle) => {
	const ascii = {
		upperCase: {
			start: 65,
		},
	};

	const myPuzzle = {
		build() {
			this.array = puzzle.split('');
			this.size = Math.sqrt(this.array.length);
			this.columns = [];
			this.createColumns();
			this.directions = ['right', 'bottom', 'bottomRight'];
			this.cursor = 0;
			this.cursorIncrementPerDirection = [1, this.size, this.size + 1];
			this.offset = 1;
		},
		createColumns() {
			for (let i = 0; i < this.size; ++i) {
				this.columns.push(String.fromCharCode(ascii.upperCase.start + i));
			}
		},
		getGridLocation(index) {
			index += this.offset;
			const row = Math.ceil(index / this.size);
			const column = this.columns[index - (row - 1) * this.size - 1];
			return [column, row];
		},
		getCursorValue(cursor) {
			return this.array[cursor];
		},
		moveCursorTo(letter) {
			while (this.cursor < this.array.length) {
				if (letter === this.array[this.cursor]) {
					return;
				}
				++this.cursor;
			}
			this.cursor = this.cursor >= this.array.length ? 0 : this.cursor;
		},
		checkForRemainingLetters(letters) {
			const cursors = {};

			const listCursors = increment => {
				return letters.split('').map((_, i) => {
					return i * increment + this.cursor;
				});
			};

			const addCursorsToEachDirection = () => {
				this.directions.forEach((direction, i) => {
					const increment = this.cursorIncrementPerDirection[i];
					cursors[direction] = listCursors(increment);
				});
			};

			addCursorsToEachDirection();

			console.log(cursors);

			const readPossibleCursors = () => {
				let count = 0;
				for (let i = 0; i < directions.length; ++i) {
					const locationsList = locations[directions[i]];
					result = letters.split('').every((char, i) => {
						return char === this.getCursorValue(locationsList[i]);
					});
					console.log(result);
					if (result === true) {
						return directions[i];
					}
					// for (let j = 0; j < locationsList.length; ++j) {
					// 	if (letters[j] === this.getCursorValue(locationsList[j])) {
					// 		++count;
					// 	}
					// 	if (count === letters.length) {
					// 		result = directions[i];
					// 	}
					// }
				}
			};

			// const correctDirection = readPossibleCursors();

			console.log('letters', letters);
			console.log('cursor', this.cursor);
		},
	};

	// searching for words

	const firstWord = words[0];

	const search = word => {
		const firstLetter = word[0];
		myPuzzle.moveCursorTo(firstLetter);
		myPuzzle.checkForRemainingLetters(word.slice(1));
		// const firstLetterLocation = myPuzzle.getFirstLetterLocation(word[0]);
		// const remainingLettersLocation = myPuzzle.getRemainingLetters();
	};

	// logs

	console.log('-----PROGRAM-STARTS-----');
	// console.log(myPuzzle);

	// run

	myPuzzle.build();
	search(firstWord);
};

wordSearch(
	['HELLO', 'WORLD'],
	'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
);
