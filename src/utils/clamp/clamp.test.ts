import clamp from './clamp';

describe('clamp', () => {
  const testCases = [
    [99, 0, 4, 4],
    [2, 0, 4, 2],
    [-2, 0, 1, 0],
    [1, 10, 20, 10],
    [5.5, 1, 10, 5.5],
    [4.5, 5, 10, 5],
  ];

  test.each(testCases)(
    'For input value %s with min %s and max %s, expect %s',
    (value, min, max, expectedResult) => {
      expect(clamp(value, min, max)).toEqual(expectedResult);
    }
  );
});
