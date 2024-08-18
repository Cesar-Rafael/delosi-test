import Tooltip from '../Tooltip/tooltip';

interface IButtonProps {
  onClick: () => void;
  label: string;
  isDisabled?: boolean;
  tooltipText?: string;
}

const Button = ({ onClick, label, isDisabled, tooltipText }: IButtonProps) => {
  return (
    <button
      className={`flex flex-row justify-center content-center gap-2 bg-white text-black rounded w-18 px-4 py-1 ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div>{label}</div>
      {tooltipText && tooltipText.length ? (
        <div className='mt-0.5'>
          <Tooltip text={tooltipText} />
        </div>
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;
