import { d20 } from "@2toad/d20";
import { Alignment } from "./Alignments";
import { Background } from "./Backgrounds";
import { CharacterClass } from "./CharacterClass";
import { Deity } from "./Deities";
import { ClassType, RaceType } from "./Enumerations";
import { Language } from "./Languages";
import { PlayerStats } from "./PlayerStats";
import { Race } from "./Races";
import { Tables } from "./Tables";
import { Gear as GearType, Gears } from "./Gear";
import { Armors } from "./Armors";
import { Weapon, Weapons } from "./Weapons";
import { Talent } from "./Talents";
import { Spell, Spells } from "./Spells";

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
  public readonly Talents: Talent[];
  public readonly Gear: GearType[];
  public readonly Stats: PlayerStats;
  public readonly HitPoints: number;
  public readonly Languages: Language[];
  public readonly TotalSlots: number;
  public readonly ArmorClass: number;
  public readonly FreeCarry: string[];
  public readonly Weapons: Weapon[];
  public readonly MeleeBonus: number;
  public readonly RangedBonus: number;
  public readonly SpellcastingBonus: number;
  public readonly Spells: Spell[];

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

    this.MeleeBonus = 0;
    this.RangedBonus = 0;
    this.SpellcastingBonus = 0;

    this.Spells = [];

    // Add the talents for this race and class
    this.Talents = [
      this.Race.Talent,
      Tables.Talents.roll()[this.CharacterClass.Id],
    ];

    // If this race is a human add another talent roll
    if (this.Race.Id === RaceType.Human) {
      this.Talents.push(Tables.Talents.roll()[this.CharacterClass.Id]);
    }

    // Create the stats
    this.Stats = new PlayerStats();

    this.Gear = [];

    this.Weapons = [];

    if (this.CharacterClass.Id === ClassType.Cleric) {
      this.Weapons.push(Weapons.WARHAMMER);
    } else if (this.CharacterClass.Id === ClassType.Fighter) {
      if (this.Stats.Strength > this.Stats.Dexterity) {
        this.Weapons.push(Weapons.GREATSWORD);
      } else {
        this.Weapons.push(Weapons.LONGBOW);
        this.Gear.push(Gears.ARROWS);
      }
    } else if (this.CharacterClass.Id === ClassType.Thief) {
      if (this.Stats.Dexterity > this.Stats.Strength) {
        this.Weapons.push(Weapons.DAGGER);
      } else {
        this.Weapons.push(Weapons.SHORTSWORD);
      }
    } else if (this.CharacterClass.Id === ClassType.Wizard) {
      this.Weapons.push(Weapons.STAFF);
    }

    for (let i = 0; i < this.Weapons.length; i++) {
      this.Gear.push(this.Weapons[i]);
    }

    this.FreeCarry = [];

    if (this.CharacterClass.Id === ClassType.Cleric) {
      this.FreeCarry.push("Holy symbol");
    } else if (this.CharacterClass.Id === ClassType.Thief) {
      this.FreeCarry.push("Thieves' tools");
    }

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

    // Calculate the dexterity mod
    const dexMod = Math.floor((this.Stats.Dexterity - 10) / 2);

    // If this character is not a Wizard add leather armor
    if (this.CharacterClass.Id !== ClassType.Wizard) {
      this.Gear.push(Armors.LEATHER_ARMOR);
      this.ArmorClass = 11 + dexMod;
    } else {
      this.ArmorClass = 10 + dexMod;
    }

    // Roll for 1d6 items from the gear table
    for (let i = 0; i < d20.roll("1d6"); i++) {
      this.Gear.push(Tables.Gear.roll());
    }

    // Set the hitpoints
    this.HitPoints = hp;

    // Set Languages
    this.Languages = [];

    if (this.Race.Languages.length > 0) {
      for (let i = 0; i < this.Race.Languages.length; i++) {
        this.Languages.push(this.Race.Languages[i]);
      }
    }

    if (
      this.CharacterClass.Languages &&
      this.CharacterClass.Id === ClassType.Cleric
    ) {
      this.Languages.push(this.CharacterClass.Languages[d20.roll("1d3") - 1]);
    }

    if (this.CharacterClass.Id === ClassType.Wizard) {
      this.Languages.push(Tables.CommonLanguages.roll());
      this.Languages.push(Tables.CommonLanguages.roll());
      this.Languages.push(Tables.RareLanguages.roll());
      this.Languages.push(Tables.RareLanguages.roll());
    }

    this.TotalSlots = this.Stats.Strength > 10 ? this.Stats.Strength : 10;

    if (this.CharacterClass.Id === ClassType.Fighter && conMod > 0) {
      this.TotalSlots += conMod;
    }

    if (this.CharacterClass.Id === ClassType.Wizard) {
      for (let i = 0; i < 3; i++) {
        this.Spells.push(Tables.WizardSpells.roll());
      }
    } else if (this.CharacterClass.Id === ClassType.Cleric) {
      this.Spells.push(Spells.TURN_UNDEAD);
      for (let i = 0; i < 2; i++) {
        this.Spells.push(Tables.ClericSpells.roll());
      }
    }
  }
}
