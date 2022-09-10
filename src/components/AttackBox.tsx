import { WeaponTypes } from "../models/Enumerations";
import { PlayerStats } from "../models/PlayerStats";
import { Weapon } from "../models/Weapons";

interface Props {
  label: string;
  weapons: Weapon[];
  meleeBonus: number;
  meleeDamageBonus: number;
  rangedBonus: number;
  stats: PlayerStats;
}

// Displays the middle boxes of text like race and class
const AttackBox = ({
  label,
  weapons,
  meleeBonus,
  meleeDamageBonus,
  rangedBonus,
  stats,
}: Props) => {
  const meleeTotal = stats.StrMod + meleeBonus;
  const finesseTotal = stats.DexMod + meleeBonus;
  const thrownTotal = stats.StrMod + rangedBonus;
  const rangedTotal = stats.DexMod + rangedBonus;

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
                }, ${weapon.Damage}${
                  meleeDamageBonus > 0 ? ` + ${meleeDamageBonus}` : ""
                }`}
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
