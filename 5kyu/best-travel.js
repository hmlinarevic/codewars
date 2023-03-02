function chooseBestSum(t, k, ls) {
    const values = [];
    const log = [];

    const getDistances = (start, end, depth = 0) => {
        depth++;

        for (let i = start; i <= end; i++) {
            values[depth - 1] = ls[i];

            if (depth < k) {
                getDistances(i + 1, end + 1, depth);
            } else {
                log.push(values.map((val) => val));
            }
        }
    };

    getDistances(0, ls.length - k);

    const sums = log.map(
        (distances) => distances.reduce((total, val) => total + val),
        0
    );

    let high = 0;
    sums.forEach((sum) => {
        if (sum <= t && sum > high) {
            high = sum;
        }
    });

    return high || null;
}

const ts = [50, 55, 56, 57, 58];
const ts2 = [91, 74, 73, 85, 73, 81, 87];
const ts3 = [91, 74, 73, 85, 73, 81, 87];

console.log(chooseBestSum(163, 2, ts)); // 163
