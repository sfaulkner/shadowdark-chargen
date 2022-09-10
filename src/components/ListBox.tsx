interface Props {
  label: string;
  items: string[];
  ordered?: boolean;
}

// Displays a list with a title for things like gear and talents
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
