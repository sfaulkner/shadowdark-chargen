import { d20 } from "@2toad/d20";
import { Alignment } from "./Alignments";
import { Background } from "./Backgrounds";
import { CharacterClass } from "./CharacterClass";
import { Deity } from "./Deities";
import { ClassType, RaceType } from "./Enumerations";
import { PlayerStats } from "./PlayerStats";
import { Race } from "./Races";
import { Tables } from "./Tables";

// Class to instantiate and roll a character
export class Character {
  public readonly Level: number;
  public readonly Race: Race;
  public readonly Name: string;
  public readonly CharacterClass: CharacterClass;
  public readonly Alignment: Alignment;
  public readonly Background: Background;
  public readonly Title: string;
  public readonly Deity: Deity;
  public readonly Talents: string[];
  public readonly Gear: string[];
  public readonly Stats: PlayerStats;
  public readonly HitPoints: number;

  // Default level is 1
  public constructor(Level: number = 1) {
    // Set the properties and roll them on the tables
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

    // Add the talents for this race and class
    this.Talents = [
      this.Race.Talent.Name + ". " + this.Race.Talent.Description,
      Tables.Talents.roll()[this.CharacterClass.Id],
    ];

    // If this race is a human add another talent roll
    if (this.Race.Id === RaceType.Human) {
      this.Talents.push(Tables.Talents.roll()[this.CharacterClass.Id]);
    }

    this.Gear = [];

    // If this character is not a Wizard add leather armor
    if (this.CharacterClass.Id !== ClassType.Wizard) {
      this.Gear.push("Leather armor");
    }

    // Roll for 1d6 items from the gear table
    for (let i = 0; i < d20.roll("1d6"); i++) {
      this.Gear.push(Tables.Gear.roll());
    }

    // Create the stats
    this.Stats = new PlayerStats();

    // Calculate the constitution mod
    const conMod = Math.floor((this.Stats.Constitution - 10) / 2);

    // Calculate hp based on the con mod with a minimum of 1
    let hp = d20.roll(this.CharacterClass.HitDice) + (conMod > 0 ? conMod : 1);

    // If this is a dwarf reroll the HP and use the higher value
    if (this.Race.Id === RaceType.Dwarf) {
      let newHp =
        d20.roll(this.CharacterClass.HitDice) + (conMod > 0 ? conMod : 1);
      if (newHp > hp) {
        hp = newHp;
      }
    }

    // Set the hitpoints
    this.HitPoints = hp;
  }
}
