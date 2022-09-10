interface Props {
  label: string;
  value: string;
  valueClass?: "value" | "largeValue" | "rightValue";
}

// Displays the middle boxes of text like race and class
const InfoBox = ({ label, value, valueClass = "rightValue" }: Props) => {
  return (
    <>
      <div className="label">{label}</div>
      <div className={valueClass}>{value}</div>
    </>
  );
};

export default InfoBox;
