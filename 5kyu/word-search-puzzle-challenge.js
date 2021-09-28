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
			this.offset = 1;
			this.createColumns();
		},
		createColumns() {
			for (let i = 0; i < this.size; ++i) {
				this.columns.push(String.fromCharCode(ascii.upperCase.start + i));
			}
		},
		getLetterLocation(index) {
			// index += this.offset;
			const row = Math.ceil(index / this.size);
			const column = this.columns[index - (row - 1) * this.size - 1];
			return [column, row];
		},
		getLocationValue(index) {
			// index += this.offset;
			return this.array[index];
		},
	};

	myPuzzle.build();
	console.log(myPuzzle);
	console.log(myPuzzle.getLetterLocation(1));
	console.log(myPuzzle.getLocationValue(0));

	// const searchRemainingLetters = (location, letters) => {};

	// const firstWord = words[0];

	// const search = word => {
	// 	const firstLetter = word[0];
	// 	const remainingLetters = word.slice(1);

	// 	let firstLetterLocation, remainingLetterLocations;
	// 	let i = 0;

	// 	while (i < puzzleArray.length) {
	// 		if (firstLetter === puzzle[i]) {
	// 			firstLetterLocation = getLetterLocation(i);
	// 			remainingLetterLocations = searchRemainingLetters(
	// 				firstLetterLocation,
	// 				remainingLetters
	// 			);
	// 			remainingLetterLocations = [];
	// 			if (remainingLetterLocations.length) {
	// 				break;
	// 			}
	// 		}
	// 		console.log(i);
	// 		++i;
	// 	}

	// 	return [firstLetterLocation, ...remainingLetterLocations];
	// };

	// const test = search(firstWord);

	// logs

	console.log('--------------');
	// console.log(puzzleArray);
};

wordSearch(
	['HELLO', 'WORLD'],
	'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
);
