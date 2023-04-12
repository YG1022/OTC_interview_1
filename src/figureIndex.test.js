const figureIndex = require('./figureIndex.js');

test('should return array in 1-26 range', () => {
    // Arrange
    const figureResult = figureIndex(1, 2);
    // Act

    // Assert
    expect(figureResult).toEqual(['A', 'B']);
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