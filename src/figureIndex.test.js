const figureIndex = require('./figureIndex.js');

test('should return array in 1-18278 range', () => {
    // Arrange
    const figureResult1 = figureIndex(1, 2);
    const figureResult2 = figureIndex(1, 1);
    const figureResult3 = figureIndex(26, 3);
    // Act

    // Assert
    expect(figureResult1).toEqual(['A', 'B']);
    expect(figureResult2).toEqual(['A']);
    expect(figureResult3).toEqual(['Z', 'AA', 'AB']);
});

test('should throw error if startIndex is less than 1', () => {
    // Arrange
    const figureResult = () => figureIndex(0, 2);
    // Act

    // Assert
    expect(figureResult).toThrow('Invalid range');
});

test('should throw error if startIndex + count is greater than 18278', () => {
    // Arrange
    const figureResult = () => figureIndex(18279, 2);
    // Act

    // Assert
    expect(figureResult).toThrow('Invalid range');
});