import { rotateMatrixCounterClockwiseRecursive } from '../../utils/matrix';

export async function POST(request: Request) {
  const { matrix } = await request.json();

  const matrixRotated = rotateMatrixCounterClockwiseRecursive(matrix);

  return new Response(JSON.stringify(matrixRotated), {
    headers: { 'Content-Type': 'application/json' },
  });
}
