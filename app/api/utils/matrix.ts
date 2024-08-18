export const MAX_VALUE = 100;

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * MAX_VALUE);
};

export const generateRandomMatrix = (size: number) => {
  let length = size;
  const matrix = Array.from({ length }, () =>
    Array.from({ length }, () => generateRandomNumber())
  );
  return matrix;
};

export function rotateMatrixCounterClockwiseRecursive(matrix: number[][]) {
  let n = matrix.length;

  // Si la matriz es de 1x1 se retorna la misma matriz
  if (n <= 1) {
    return matrix;
  }

  // Se rota los bordes de la matriz
  matrix = rotateMatrixEdge(matrix);

  // Se obtiene la matriz interna (sin bordes)
  const innerMatrix = matrix.slice(1, n - 1).map((row) => row.slice(1, n - 1));

  // Se rota la matriz interna
  const rotatedInnerMatrix = rotateMatrixCounterClockwiseRecursive(innerMatrix);

  // Se inserta la matriz interna rotada en la matriz original
  for (let i = 0; i < rotatedInnerMatrix.length; i++) {
    for (let j = 0; j < rotatedInnerMatrix[0].length; j++) {
      matrix[i + 1][j + 1] = innerMatrix[i][j];
    }
  }

  return matrix;
}

function rotateMatrixEdge(matrix: number[][]) {
  // Se transponer la matriz
  let transposedMatrix = matrix[0].map((_cell, colIndex) =>
    matrix.map((row) => row[colIndex])
  );

  // Se invierten las filas
  let rotatedMatrix = transposedMatrix.reverse();

  return rotatedMatrix;
}
