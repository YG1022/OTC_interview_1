const figureIndex = require('./figureIndex.js');

test('should return array in 1-26 range', () => {
  // Arrange
  const figureResult = figureIndex(1, 2);
  // Act

  // Assert
  expect(figureResult).toBe(['A', 'B']);
});