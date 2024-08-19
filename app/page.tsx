'use client';
import { useEffect, useRef, useState } from 'react';
import Matrix from './ui/components/Matrix/matrix';
import Button from './ui/components/Button/button';
import { generateMatrixService, rotateMatrixService } from './services/matrix';

export default function Home() {
  const [size, setSize] = useState<number>(2);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [matrixRotated, setMatrixRotated] = useState<number[][]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSizeValid, setIsSizeValid] = useState<boolean>(true);
  const sizeInputRef = useRef<HTMLInputElement | null>(null);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    const newSize = +value || 0;
    setSize(newSize);
  };

  const handleMatrixChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    setMatrix((oldMatrix: number[][]) => {
      const newMatrix = [...oldMatrix];
      newMatrix[rowIndex][colIndex] = +value.replace(/[^0-9]/g, '') || 0;
      return newMatrix;
    });
  };

  const createMatrix = () => {
    const newMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    setMatrix(newMatrix);
    setMatrixRotated([]);
  };

  const generateMatrix = async () => {
    const matrixGenerated = await generateMatrixService(size);
    setMatrix(matrixGenerated);
    setMatrixRotated([]);
  };

  const rotateMatrix = async () => {
    const matrixRotated = await rotateMatrixService(matrix);
    setMatrixRotated(matrixRotated);
  };

  useEffect(() => {
    if (size > 1 && size <= 12) {
      setErrorMessage('');
      setIsSizeValid(false);
    } else {
      if (size < 2) {
        setErrorMessage('El valor mínimo de N es 2');
      }
      if (size > 12) {
        setErrorMessage('El valor máximo de N es 12');
      }
      sizeInputRef.current?.focus();
      setIsSizeValid(true);
    }
  }, [size]);

  return (
    <main className='flex min-h-screen flex-col items-center gap-8 py-16 px-8'>
      <div className='text-xl font-medium'>
        Rotación de matriz cuadrada (N x N)
      </div>
      <div className='flex flex-col items-center gap-1'>
        <div className='flex flex-row gap-4 items-center'>
          <label htmlFor='size'>Ingrese el valor de N: </label>
          <input
            id='size'
            ref={sizeInputRef}
            className={`text-black text-center rounded-md w-16 border-2 ${
              isSizeValid ? 'border-red-500' : ''
            }`}
            value={size}
            onChange={handleSizeChange}
          />
        </div>
        {isSizeValid && (
          <div className='text-sm text-red-500'>{errorMessage}</div>
        )}
      </div>
      <div className='flex flex-row gap-4'>
        <Button
          onClick={createMatrix}
          label='Crear matriz'
          tooltipText='Crea una matriz vacía de N x N'
          isDisabled={isSizeValid}
        />
        <Button
          onClick={generateMatrix}
          label='Completar matriz'
          tooltipText='Completa una matriz con valores aleatorios'
          isDisabled={isSizeValid}
        />
      </div>

      {matrix.length > 0 && (
        <>
          <Matrix
            matrix={matrix}
            handleMatrixChange={handleMatrixChange}
            title='Matriz original'
            tootipText='Presione TAB y ENTER para navegar fácilmente entre las celdas'
          />
          <Button
            onClick={rotateMatrix}
            label='Rotar matriz'
            tooltipText='Rota la matriz 90 grados en sentido antihorario'
          />
          {matrixRotated.length > 0 && (
            <Matrix
              matrix={matrixRotated}
              title='Matriz rotada'
              isDisabled={true}
            />
          )}
        </>
      )}
    </main>
  );
}
