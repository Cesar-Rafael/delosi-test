import { generateRandomMatrix } from '../../utils/matrix';

export async function POST(request: Request) {
  const { size } = await request.json();

  const matrix = generateRandomMatrix(size);

  return new Response(JSON.stringify(matrix), {
    headers: { 'Content-Type': 'application/json' },
  });
}
