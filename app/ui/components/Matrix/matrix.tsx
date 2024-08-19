'use client';

import { KeyboardEvent } from 'react';
import Tooltip from '../Tooltip/tooltip';

interface IMatrixProps {
  matrix: number[][];
  handleMatrixChange?: (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => void;
  title: string;
  isDisabled?: boolean;
  tootipText?: string;
}

const Matrix = ({
  matrix,
  handleMatrixChange,
  title,
  isDisabled,
  tootipText,
}: IMatrixProps) => {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    if (event.key === 'Enter') {
      if (rowIndex < matrix.length - 1) {
        const nextRowIndex = rowIndex + 1;
        const nextInput = document.getElementById(
          `matrix-original-${nextRowIndex}-${colIndex}`
        ) as HTMLInputElement;
        nextInput && nextInput.select();
      }
    }
  };

  return (
    <div className='flex  flex-col items-center'>
      <div className='flex flex-row items-center gap-2 mb-2'>
        <div className='font-medium'>{title}</div>
        {tootipText && <Tooltip text={tootipText} color='#fff' />}
      </div>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell: number, colIndex: number) => (
            <input
              key={colIndex}
              className='text-black text-center rounded-sm w-14 m-1.5'
              value={cell}
              id={
                (isDisabled ? 'matrix-rotated' : 'matrix-original') +
                `-${rowIndex}-${colIndex}`
              }
              onChange={(e) =>
                handleMatrixChange &&
                handleMatrixChange(rowIndex, colIndex, e.target.value)
              }
              onKeyDown={(e) => {
                handleKeyDown(e, rowIndex, colIndex);
              }}
              disabled={isDisabled}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
