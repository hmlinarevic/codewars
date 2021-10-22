const wordSearch = (words, puzzle) => {
	const asciiUppercaseStart = 65;

	const crossword = {
		build() {
			this.size = Math.sqrt(puzzle.length);
			this.columns = [];
			this.results = [];
			this.directions = ['horizontal', 'diagonal1', 'vertical', 'diagonal2'];
			this.createColumns();
			this.createNavigation();
		},
		createColumns() {
			for (let i = 0; i < this.size; ++i) {
				this.columns.push(String.fromCharCode(asciiUppercaseStart + i));
			}
		},
		createNavigation() {
			this.navigation = this.directions.reduce(
				(obj, dir, i) => {
					if (i === 0) {
						obj[dir] = i + 1;
					} else {
						obj[dir] = this.size - 2 + i;
					}
					return obj;
				},
				{ offset: 1 }
			);
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
		setPossibleIndexes() {
			this.possibleIndexes = this.getPossibleIndexes();
		},
		setSearch(status, items) {
			this.search = { status, items };
		},
		getGridLocation(index) {
			index += this.navigation.offset;
			const row = Math.ceil(index / this.size);
			const column = this.columns[index - (row - 1) * this.size - 1];
			return `${column}${row}`;
		},
		getPossibleIndexes() {
			// todo: method needs to validate grid locations of possible indexes
			return this.directions.reduce((obj, dir) => {
				obj[dir] = this.remainingLetters.split('').map((_, i) => {
					return (i + 1) * this.navigation[dir] + this.startLetterIndex;
				});
				return obj;
			}, {});
		},
		searchMatchingIndexes() {
			const { possibleIndexes: indexes, directions, remainingLetters } = this;
			let list, isMatch;

			for (let i = 0; i < this.directions.length; ++i) {
				list = indexes[directions[i]];
				isMatch = list.every((item, i) => puzzle[item] === remainingLetters[i]);
				if (isMatch) {
					this.setSearch('Match Found', list);
					break;
				}
			}
		},
		addLocationsResult() {
			let list;
			list = [...this.search.items];
			list.unshift(this.startLetterIndex);
			list = list.map(index => this.getGridLocation(index));
			this.results.push(list);
		},
	};

	crossword.build();

	for (let i = 0; i < words.length; ++i) {
		crossword.setSearch('Word not found.');
		crossword.setStartLetter(words[i][0]);

		for (let j = 0; j < puzzle.length; ++j) {
			if (crossword.startLetter === puzzle[j]) {
				crossword.setStartLetterIndex(j);
				crossword.setRemainingLetters(words[i].slice(1));
				crossword.setPossibleIndexes();
				crossword.searchMatchingIndexes();
				if (crossword.search.status === 'Match Found') {
					crossword.addLocationsResult();
					break;
				}
			}
		}
		if (crossword.search.status === 'Word not found.') {
			crossword.results.push([crossword.search.status]);
		}
	}
	return crossword.results;
};

// console.log(
// 	wordSearch(
// 		['HELLO', 'WORLD'],
// 		'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'
// 	)
// );

// console.log(
// 	wordSearch(
// 		['PARROT', 'FISH', 'FOX', 'CAT', 'DOG'],

// 		'FHKEFFDRGFEOGIOPVSFLDKOIAQIFLWIHQRMOUOTOXNRIPAAXSRUOFUFISHELTUFFJJSNJDOGREFGHHHHH'
// 	)
// );

console.log(
	wordSearch(
		['TVJQQ', 'MUXD', 'TPYSFUKMLYYREDU', 'KEOTMUX'],
		'RIENGIDULLPFESWSMQTNSBRXFIJYEUQLQUVFSYPDEQSLGZQYXUQVTMRUFKVWHILUAUVQGNWKJILLWBBZWBFEOXLLLKLJYQQUXGBYJRCUSYFJVUTQXVDRVJVIITCAEGKGKEDMJUBWEDUQTUXPSCCEKUXOJOTAWADEXJEDZYIROTMWIAAEGFNEEZILFJDSXTEIMOSNDPUBSROJOZGAGFMYIBHNDKPMSBVJMCOWQQXUIOWRWXXQODTFQBKTJECXXKLTEDENQFTYVVOBWJBHNDIMCWSSIALCWZMQOYTCQQUXQLJADUNQBEDTLYGIPVDBPRFYGLZBHSQHPSBUIVYYKSATKYYXASANROUHWOSPMSPLVVIRXBMFNIEZQHRPHMWCMJNSTESOGIJWIKIWVSKYMIQDKMLDYBMCUQQETJQLCNBQPZHSTUWVTRDOWMWMD'
	)
);
