import { Feature } from "../models/CharacterClass";
import { Language } from "../models/Languages";
import { Spell } from "../models/Spells";
import { Talent } from "../models/Talents";
import { AnimatedTooltip } from "./AnimatedTooltip";

interface Props {
  label: string;
  talents: Talent[];
  features: Feature[];
  spells: Spell[];
  languages: Language[];
}

// Displays a list with a title for things like gear and talents
const FeaturesBox = ({
  label,
  talents,
  features,
  spells,
  languages,
}: Props) => {
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
      {spells.length > 0 && (
        <>
          <b>Tier 1 Spells. </b>
          {spells.map((s, i) => {
            if (i !== spells.length - 1) {
              return (
                <span key={`spell-${i}`}>
                  {
                    <AnimatedTooltip label={s.Description}>
                      <span>{s.Name}</span>
                    </AnimatedTooltip>
                  }
                  ,{" "}
                </span>
              );
            } else {
              return (
                <span key={`spell-${i}`}>
                  {
                    <AnimatedTooltip label={s.Description}>
                      <span>{s.Name}</span>
                    </AnimatedTooltip>
                  }
                  .
                </span>
              );
            }
          })}
          <br />
          <br />
        </>
      )}
      <b>Languages. </b>
      {languages.map((l, i) => {
        if (i !== languages.length - 1) {
          return (
            <span key={`language-${i}`}>
              {
                <AnimatedTooltip label={l.Speakers}>
                  <span>{l.Name}</span>
                </AnimatedTooltip>
              }
              ,{" "}
            </span>
          );
        } else {
          return (
            <span key={`language-${i}`}>
              {
                <AnimatedTooltip label={l.Speakers}>
                  <span>{l.Name}</span>
                </AnimatedTooltip>
              }
              .
            </span>
          );
        }
      })}
    </>
  );
};

export default FeaturesBox;
