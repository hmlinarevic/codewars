const map = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

function rgb(r, g, b) {
    const result = [...arguments].map(arg => {
        // handle vaules from 0 - 16
        if (arg > 9 && arg < 16) return `0${map[arg]}`
        if (arg >= 0 && arg < 10) return `0${arg}`

        // handle values above 255
        if (arg > 255) arg = 255

        // handle values less than 0
        if (arg < 0) arg = 0

        // main calculation
        let x = arg % 16 // remainder
        let y = Math.trunc(arg / 16) // time in base 16

        // map values above 9 to corresponding character 
        if (map[y]) {
            y = map[y]
        }
        if (map[x]) {
            x = map[x]
        }
        return `${y}${x}`
    })
    return result.join('')
}


console.log(rgb(126, 16, 15))
