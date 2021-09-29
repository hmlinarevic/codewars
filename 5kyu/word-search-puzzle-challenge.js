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
			this.cursor = 0;
			this.offset = 1;
			this.columns = [];
			this.createColumns();
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
		getFirstLetterLocation(letter) {
			while (this.cursor < this.array.length) {
				if (letter === this.array[this.cursor]) {
					return this.getGridLocation(this.cursor);
				}
				++this.cursor;
			}
			if (this.cursor >= this.array.length) {
				this.cursor = 0;
			}
		},
		getRemainingLetters(letters) {
			let gap = this.cursor;
			const directions = {
				right() {
					return (gap += 1);
				},
				down() {
					return (gap += 8);
				},
				rightAndDown() {
					return (gap += 9);
				},
			};
			const dirs = Object.keys(directions);
			let direction;

			for (let i = 0; i < dirs.length; ++i) {
				// if (letters[0] === this.array[this.cursor + directions[dirs[i]]()]) {
				console.log(gap);
				console.log(this.getGridLocation([directions[dirs[i]]()]));
				// }
			}
		},
	};

	// searching for words

	const firstWord = words[0];

	const search = word => {
		const firstLetterLocation = myPuzzle.getFirstLetterLocation(word[0]);
		const remainingLettersLocation = myPuzzle.getRemainingLetters(
			word.slice(1)
		);
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
