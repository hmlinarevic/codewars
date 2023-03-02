function upArray(ar) {
    // handle case when zeros are in the beggining of the array
    const nonZeroStartIndex = ar.findIndex((x) => x !== 0);
    console.log({ nonZeroStartIndex });

    // convert to bigInt and add 1 to it
    const num = BigInt(ar.slice(nonZeroStartIndex).join("")) + 1n;

    console.log({ num, type: typeof num });

    // first put those zeroes back in the array
    const zerosList = [];
    for (let i = 0; i < nonZeroStartIndex; i++) {
        zerosList.push(0);
    }

    // return num array added to the zeros list
    return zerosList.concat(
        num
            .toString()
            .split("")
            .map((char) => +char)
    );
}

console.log(
    upArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
);
