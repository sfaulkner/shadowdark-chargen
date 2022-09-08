import { forwardRef, Ref } from "react";
import { Character } from "../models/Character";
import InfoBox from "./InfoBox";
import ListBox from "./ListBox";
import StatBox from "./StatBox";

interface Props {
  player: Character;
}

const CharacterSheet = forwardRef<HTMLDivElement, Props>(
  ({ player }: Props, ref) => {
    return (
      <div ref={ref}>
        <div className="title">ShadowDark</div>
        <div className="mainGrid">
          <div className="statsAndAttacksColumn">
            <div className="statsRow">
              <div className="box strGrid">
                <StatBox label="STR" value={player.Stats.Strength} />
              </div>
              <div className="box dexGrid">
                <StatBox label="DEX" value={player.Stats.Dexterity} />
              </div>
              <div className="box conGrid">
                <StatBox label="CON" value={player.Stats.Constitution} />
              </div>
              <div className="box intGrid">
                <StatBox label="INT" value={player.Stats.Intelligence} />
              </div>
              <div className="box wisGrid">
                <StatBox label="WIS" value={player.Stats.Wisdom} />
              </div>
              <div className="box chaGrid">
                <StatBox label="CHA" value={player.Stats.Charisma} />
              </div>
              <div className="box hpGrid">
                <InfoBox
                  label="HP"
                  value={player.HitPoints.toString()}
                  valueClass="largeValue"
                />
              </div>
              <div className="box acGrid">
                <InfoBox label="AC" value="" valueClass="largeValue" />
              </div>
            </div>
            <div className="box attacksRow">
              <InfoBox label="Attacks" value="" />
            </div>
          </div>
          <div className="nameRaceClassColumn">
            <div className="box nameGrid">
              <InfoBox label="Name" value={player.Name} />
            </div>
            <div className="box raceGrid">
              <InfoBox label="Race" value={player.Race.Name} />
            </div>
            <div className="box classGrid">
              <InfoBox label="Class" value={player.CharacterClass.Name} />
            </div>
            <div className="levelXpGrid">
              <div className="box levelGrid">
                <InfoBox
                  label="Level"
                  value={player.Level.toString()}
                  valueClass="value"
                />
              </div>
              <div className="box xpGrid">
                <InfoBox label="XP" value="0 / 10" valueClass="value" />
              </div>
            </div>
            <div className="box titleGrid">
              <InfoBox label="Title" value={player.Title} />
            </div>
            <div className="box alignmentGrid">
              <InfoBox label="Alignment" value={player.Alignment.Name} />
            </div>
            <div className="box backgroundGrid">
              <InfoBox label="Background" value={player.Background.Name} />
            </div>
            <div className="box deityGrid">
              <InfoBox label="Deity" value={player.Deity.Name} />
            </div>
          </div>
          <div className="talentsGearColumn">
            <div className="box talentsGrid">
              <ListBox label="Talents / Spells" items={player.Talents} />
            </div>
            <div className="box gearGrid">
              <ListBox label="Gear" items={player.Gear} ordered />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CharacterSheet;