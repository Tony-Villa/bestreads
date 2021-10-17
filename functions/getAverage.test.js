const { getAverage } = require('./getAverage');

it('Should get the average of an array [4,3,5,1] to be "3.25"', () => {
  const testArr = [4, 3, 5, 1];
  const result = getAverage(testArr);

  expect(result).toBe('3.25');
});

it('Result of a 0 should be No reviews yet', () => {
  const result = getAverage([]);

  expect(result).toBe('No Reviews Yet');
});

it('Result of non array should be Argument must be an array', () => {
  const result = getAverage('hi');

  expect(result).toBe('Argument Must be an array');
});
