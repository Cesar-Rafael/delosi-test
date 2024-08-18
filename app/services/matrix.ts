export const generateMatrixService = async (
  size: number
): Promise<number[][]> => {
  const response = await fetch('/api/matrix/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ size }),
  });

  if (response.status === 200) {
    return await response.json();
  }

  return [];
};

export const rotateMatrixService = async (
  matrix: number[][]
): Promise<number[][]> => {
  const response = await fetch('/api/matrix/rotate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ matrix }),
  });

  if (response.status === 200) {
    return await response.json();
  }

  return [];
};
