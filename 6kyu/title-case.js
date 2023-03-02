function titleCase(title, minorWords) {

    return title.split(' ').map((word,i) => {
        if (i === 0) {
            return word[0].toUpperCase() + word.slice(1)
        }

        if (i > 0 && minorWords && minorWords.split(' ').includes(word)) {
            return word 
        } else {
            return word[0].toUpperCase() + word.slice(1)
        }
    })
}

const x = titleCase('a clash of KINGS', 'a an the of')
console.log({x})
