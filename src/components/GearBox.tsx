import { Gear } from "../models/Gear";

interface Props {
  label: string;
  items: Gear[];
  totalSlots: number;
  freeCarry: string[];
}

// Displays a list with a title for things like gear and talents
const GearBox = ({ label, items, totalSlots, freeCarry }: Props) => {
  const gearSlots: string[] = Array.from({ length: 20 });

  let j = 0;
  for (let i = 0; i < items.length; i++) {
    gearSlots[i] = items[j].Name;

    if (items[j].Slots === 2) {
      gearSlots[i + 1] = `(${items[j].Name} Slot)`;
      i++;
    }

    j++;
  }

  for (let i = totalSlots; i < gearSlots.length; i++) {
    gearSlots[i] = "---";
  }

  return (
    <>
      <div className="label">{label}</div>
      <div className="gearBoxGrid">
        <div className="gearBoxGrid1">
          <ol>
            {gearSlots.slice(0, 10).map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ol>
        </div>
        <div className="gearBoxGrid2">
          <ol start={11}>
            {gearSlots.slice(10).map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ol>
        </div>
        <div className="gearBoxGrid3">
          Free to Carry
          <ul>
            {freeCarry.map((item, idx) => (
              <li key={`free-${idx}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GearBox;
