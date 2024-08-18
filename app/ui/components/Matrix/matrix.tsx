'use client';

interface IMatrixProps {
  matrix: number[][];
  handleMatrixChange?: (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => void;
  title: string;
  isDisabled?: boolean;
}

const Matrix = ({
  matrix,
  handleMatrixChange,
  title,
  isDisabled,
}: IMatrixProps) => {
  return (
    <div className='flex  flex-col items-center'>
      <div className='font-medium mb-2'>{title}</div>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell: number, colIndex: number) => (
            <input
              key={colIndex}
              className='text-black text-center rounded-sm w-14 m-1.5'
              value={cell}
              onChange={(e) =>
                handleMatrixChange &&
                handleMatrixChange(rowIndex, colIndex, e.target.value)
              }
              disabled={isDisabled}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
