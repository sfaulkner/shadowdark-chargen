interface Props {
  label: string;
  items: string[];
  ordered?: boolean;
}

const ListBox = ({ label, items, ordered = false }: Props) => {
  if (ordered) {
    return (
      <>
        <div className="label">{label}</div>
        <ol>
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      </>
    );
  }

  return (
    <>
      <div className="label">{label}</div>
      <ul>
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
};

export default ListBox;
