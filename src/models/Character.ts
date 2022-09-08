import { d20 } from "@2toad/d20";
import { PlayerStats } from "./PlayerStats";
import {
  AlignmentTableItem,
  BackgroundTableItem,
  ClassTableItem,
  DeityTableItem,
  RaceTableItem,
} from "./RawData";
import { Tables } from "./Tables";

export interface CharacterValues {
  Level: number;
  Race: RaceTableItem;
  Name: string;
  CharacterClass: ClassTableItem;
  Alignment: AlignmentTableItem;
  Background: BackgroundTableItem;
  Title: string;
  Deity: DeityTableItem;
  Talents: string[];
  Stats: PlayerStats;
  HitPoints: number;
}

export class Character {
  public readonly Level: number;
  public readonly Race: RaceTableItem;
  public readonly Name: string;
  public readonly CharacterClass: ClassTableItem;
  public readonly Alignment: AlignmentTableItem;
  public readonly Background: BackgroundTableItem;
  public readonly Title: string;
  public readonly Deity: DeityTableItem;
  public readonly Talents: string[];
  public readonly Stats: PlayerStats;
  public readonly HitPoints: number;

  public constructor(Level: number = 1) {
    this.Level = Level;
    this.Race = Tables.Races.roll();
    this.Name = Tables.Names.roll()[this.Race.Id];
    this.CharacterClass = Tables.Classes.roll();
    this.Alignment = Tables.Alignments.roll();
    this.Background = Tables.Backgrounds.roll();
    this.Title = Tables.Titles(
      this.Level,
      this.CharacterClass.Id,
      this.Alignment.Id
    );
    this.Deity = Tables.Deities(this.Alignment.Id).roll();
    this.Talents = [
      this.Race.Talent.Name + ". " + this.Race.Talent.Description,
      Tables.Talents.roll()[this.CharacterClass.Id],
    ];

    if (this.Race.Id === 5) {
      this.Talents.push(Tables.Talents.roll()[this.CharacterClass.Id]);
    }

    this.Stats = new PlayerStats();

    const conMod = Math.round((this.Stats.Constitution - 10) / 2);

    let hp = d20.roll(this.CharacterClass.HitDice) + (conMod > 0 ? conMod : 1);

    if (this.Race.Id === 0) {
      let newHp =
        d20.roll(this.CharacterClass.HitDice) + (conMod > 0 ? conMod : 1);
      if (newHp > hp) {
        hp = newHp;
      }
    }

    this.HitPoints = hp;
  }
}
