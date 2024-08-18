import IconInfoCircle from '../../icons/info-circle';
import './tooltip.css';

interface ITooltipProps {
  text: string;
}

const Tooltip = ({ text }: ITooltipProps) => {
  return (
    <div className='tooltip'>
      <IconInfoCircle />
      <span className='tooltiptext'>{text}</span>
    </div>
  );
};

export default Tooltip;
