import { expect, test, vi } from 'vitest';
import {
  generateRandomNumber,
  generateRandomMatrix,
  rotateMatrixCounterClockwiseRecursive,
  MAX_VALUE,
} from './matrix';

vi.mock('server-only', () => {
  return {};
});

test('Test a random number generation between 0 and 100', () => {
  expect(generateRandomNumber()).toBeGreaterThanOrEqual(0);
  expect(generateRandomNumber()).toBeLessThanOrEqual(MAX_VALUE);
});

test('Test a random matrix generation', () => {
  let size = 3;
  const matrix = generateRandomMatrix(size);
  expect(matrix.length).toBe(size);
  expect(matrix[0].length).toBe(size);
  matrix.forEach((row) => {
    row.forEach((cell) => {
      expect(cell).toBeGreaterThanOrEqual(0);
      expect(cell).toBeLessThanOrEqual(MAX_VALUE);
    });
  });
});

test('Test a matrix rotation counter clockwise', () => {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let rotatedMatrix = rotateMatrixCounterClockwiseRecursive(matrix);
  expect(rotatedMatrix).toEqual([
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ]);
});
