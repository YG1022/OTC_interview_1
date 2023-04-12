const Convert26 = (num) => {
    let columnIndex = "";

    while (num > 0) {
        const remainder = num % 26 ? num % 26 : 26;
        columnIndex = String.fromCharCode(remainder + 64) + columnIndex;

        num = (num - remainder) / 26;
    }

    return columnIndex;
};

const figureIndex = (startIndex, count) => {
    if (startIndex < 1 || startIndex + count > 18278) {
        throw new Error('Invalid range');
    }

    let result = [];

    for (let i = startIndex; i < startIndex + count; i += 1) {
        result.push(Convert26(i));
    }

    return result;
};

module.exports = figureIndex;