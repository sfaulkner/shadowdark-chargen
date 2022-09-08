interface Props {
  label: string;
  value: number;
}

const StatBox = ({ label, value }: Props) => {
  const mod = Math.floor((value - 10) / 2);

  return (
    <>
      <div className="label">{label}</div>
      <div className="value">{`${value} / ${mod > 0 ? "+" : ""}${mod}`}</div>
    </>
  );
};

export default StatBox;
