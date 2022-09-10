import { Feature } from "../models/CharacterClass";
import { Language } from "../models/Languages";
import { Talent } from "../models/Talents";

interface Props {
  label: string;
  talents: Talent[];
  features: Feature[];
  languages: Language[];
}

// Displays a list with a title for things like gear and talents
const FeaturesBox = ({ label, talents, features, languages }: Props) => {
  return (
    <>
      <div className="label">{label}</div>
      <ul>
        {talents.map((t, i) => (
          <li key={`talents-${i}`}>
            {t.Name && <b>{`${t.Name}. `}</b>}
            {t.Description}
          </li>
        ))}
        {features.map((f, i) => (
          <li key={`features=${i}`}>
            {f.Name && <b>{`${f.Name}. `}</b>}
            {f.Description}
          </li>
        ))}
      </ul>
      <b>Languages. </b>
      {languages.map((l, i) => {
        if (i !== languages.length - 1) {
          return <span key={`language-${i}`}>{l.Name}, </span>;
        } else {
          return <span key={`language-${i}`}>{l.Name}.</span>;
        }
      })}
    </>
  );
};

export default FeaturesBox;
