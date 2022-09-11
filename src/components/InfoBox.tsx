import { AnimatedTooltip } from "./AnimatedTooltip";

interface Props {
  label: string;
  value: string;
  tooltip?: string;
  valueClass?: "value" | "largeValue" | "rightValue";
}

// Displays the middle boxes of text like race and class
const InfoBox = ({
  label,
  value,
  tooltip,
  valueClass = "rightValue",
}: Props) => {
  return (
    <>
      <div className="label">{label}</div>
      {tooltip && (
        <AnimatedTooltip label={tooltip}>
          <div className={valueClass}>{value}</div>
        </AnimatedTooltip>
      )}
      {!tooltip && <div className={valueClass}>{value}</div>}
    </>
  );
};

export default InfoBox;
