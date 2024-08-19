import IconInfoCircle from '../../icons/info-circle';
import './tooltip.css';

interface ITooltipProps {
  text: string;
  color?: string;
}

const Tooltip = ({ text, color }: ITooltipProps) => {
  return (
    <div className='tooltip'>
      <IconInfoCircle color={color} />
      <span className='tooltiptext'>{text}</span>
    </div>
  );
};

export default Tooltip;
