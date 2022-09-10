import { WeaponTypes } from "../models/Enumerations";
import { PlayerStats } from "../models/PlayerStats";
import { Weapon } from "../models/Weapons";

interface Props {
  label: string;
  weapons: Weapon[];
  meleeBonus: number;
  rangedBonus: number;
  stats: PlayerStats;
}

// Displays the middle boxes of text like race and class
const AttackBox = ({
  label,
  weapons,
  meleeBonus,
  rangedBonus,
  stats,
}: Props) => {
  const strMod = Math.floor((stats.Strength - 10) / 2);
  const dexMod = Math.floor((stats.Dexterity - 10) / 2);

  const meleeTotal = strMod + meleeBonus;
  const finesseTotal = dexMod + meleeBonus;
  const thrownTotal = strMod + rangedBonus;
  const rangedTotal = dexMod + rangedBonus;

  return (
    <>
      <div className="label">{label}</div>
      {weapons.map((weapon, idx) =>
        weapon.Type.map((weaponType) => {
          if (weaponType === WeaponTypes.Melee) {
            return (
              <div key={`weapon${weaponType}-${idx}`}>
                <b>{weapon.Name}, </b>{" "}
                {`${
                  weapon.Properties.Finesse
                    ? finesseTotal > -1
                      ? "+"
                      : ""
                    : meleeTotal > -1
                    ? "+"
                    : ""
                }${
                  weapon.Properties.Finesse && stats.Dexterity > stats.Strength
                    ? finesseTotal
                    : meleeTotal
                }, ${weapon.Damage}`}
              </div>
            );
          } else {
            return (
              <div key={`weapon${weaponType}-${idx}`}>
                <b>
                  {weapon.Properties.Thrown
                    ? `${weapon.Name} (thrown)`
                    : weapon.Name}
                  ,{" "}
                </b>{" "}
                {`${
                  weapon.Properties.Thrown
                    ? thrownTotal > -1
                      ? "+"
                      : ""
                    : rangedTotal > -1
                    ? "+"
                    : ""
                }${weapon.Properties.Thrown ? thrownTotal : rangedTotal}, ${
                  weapon.Damage
                }`}
              </div>
            );
          }
        })
      )}
    </>
  );
};

export default AttackBox;
