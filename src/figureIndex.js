const figureIndex = (startIndex, count) => {
  const originColumns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = [];

  for (let i = startIndex; i < startIndex + count; i += 1) {
    result.push(originColumns[i - 1]);
  }

  return result;
};

module.exports = figureIndex;