const data = [8, 9, 10, 11, 12];

//Finding the mean of the dataset above.
function findMean(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}

//Standard Deviation in JavaScript
function stdDev(data) {
    let variance = 0;

    for (let i = 0; i < data.length; i++) {
        variance += Math.pow(data[i] - findMean(data), 2);
    }
    return Math.sqrt(variance / data.length);
}

stdDev(data);
