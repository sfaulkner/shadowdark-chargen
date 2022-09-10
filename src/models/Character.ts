import { d20 } from "@2toad/d20";
import { Alignment } from "./Alignments";
import { Background } from "./Backgrounds";
import { CharacterClass } from "./CharacterClass";
import { Deity } from "./Deities";
import { ClassType, RaceType, WeaponTypes } from "./Enumerations";
import { Language } from "./Languages";
import { PlayerStats } from "./PlayerStats";
import { Race } from "./Races";
import { Tables } from "./Tables";
import { Gear as GearType, Gears } from "./Gear";
import { Armors } from "./Armors";
import { Weapon, Weapons } from "./Weapons";
import { Talent, Talents } from "./Talents";
import { Spell, Spells } from "./Spells";

// Class to instantiate and roll a character
export class Character {
  readonly Level: number;
  readonly Race: Race;
  readonly Name: string;
  readonly CharacterClass: CharacterClass;
  readonly Alignment: Alignment;
  readonly Background: Background;
  readonly Title: string;
  readonly Deity: Deity;
  readonly Talents: Talent[];
  readonly Gear: GearType[];
  readonly Stats: PlayerStats;
  readonly HitPoints: number;
  readonly Languages: Language[];
  readonly TotalSlots: number;
  readonly ArmorClass: number;
  readonly FreeCarry: string[];
  readonly Weapons: Weapon[];
  readonly MeleeBonus: number;
  readonly MeleeDamageBonus: number;
  readonly RangedBonus: number;
  readonly SpellcastingBonus: number;
  readonly Spells: Spell[];

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

    // Initialize bonuses, spells, and gear
    this.MeleeBonus = 0;
    this.MeleeDamageBonus = 0;
    this.RangedBonus = 0;
    this.SpellcastingBonus = 0;
    this.Spells = [];
    this.Gear = [];
    this.Weapons = [];
    this.FreeCarry = [];

    // Create the stats
    this.Stats = new PlayerStats();

    // Add the talents for this race and class
    this.Talents = [
      this.Race.Talent,
      Tables.Talents.roll()[this.CharacterClass.Id],
    ];

    // If this race is a human add another talent roll
    if (this.Race.Id === RaceType.Human) {
      this.Talents.push(Tables.Talents.roll()[this.CharacterClass.Id]);
    }

    // Select a weapon based on class and stats
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

    // Add weapons to the gear list as well
    for (let i = 0; i < this.Weapons.length; i++) {
      this.Gear.push(this.Weapons[i]);
    }

    // Add special class items with no weight
    if (this.CharacterClass.Id === ClassType.Cleric) {
      this.FreeCarry.push("Holy symbol");
    } else if (this.CharacterClass.Id === ClassType.Thief) {
      this.FreeCarry.push("Thieves' tools");
    }

    // Calculate hp based on the con mod with a minimum of 1
    let hp =
      d20.roll(this.CharacterClass.HitDice) +
      (this.Stats.ConMod > 0 ? this.Stats.ConMod : 1);

    // If this is a dwarf reroll the HP and use the higher value
    if (this.Race.Id === RaceType.Dwarf) {
      let newHp =
        d20.roll(this.CharacterClass.HitDice) +
        (this.Stats.ConMod > 0 ? this.Stats.ConMod : 1);
      if (newHp > hp) {
        hp = newHp;
      }
    }

    // If this character is not a Wizard add leather armor
    if (this.CharacterClass.Id !== ClassType.Wizard) {
      this.Gear.push(Armors.LEATHER_ARMOR);
      this.ArmorClass = 11 + this.Stats.DexMod;
    } else {
      this.ArmorClass = 10 + this.Stats.DexMod;
    }

    // Roll for 1d6 items from the gear table
    for (let i = 0; i < d20.roll("1d6"); i++) {
      this.Gear.push(Tables.Gear.roll());
    }

    // Set the hitpoints
    this.HitPoints = hp;

    // Set Languages
    this.Languages = [];

    // Add the race languages
    if (this.Race.Languages.length > 0) {
      for (let i = 0; i < this.Race.Languages.length; i++) {
        this.Languages.push(this.Race.Languages[i]);
      }
    }

    // Add the cleric language
    if (
      this.CharacterClass.Languages &&
      this.CharacterClass.Id === ClassType.Cleric
    ) {
      this.Languages.push(this.CharacterClass.Languages[d20.roll("1d3") - 1]);
    }

    // Add the wizard languages
    if (this.CharacterClass.Id === ClassType.Wizard) {
      this.Languages.push(Tables.CommonLanguages.roll());
      this.Languages.push(Tables.CommonLanguages.roll());
      this.Languages.push(Tables.RareLanguages.roll());
      this.Languages.push(Tables.RareLanguages.roll());
    }

    // Calculate gear slots
    this.TotalSlots = this.Stats.Strength > 10 ? this.Stats.Strength : 10;

    // Fighter adds con mod to gear slots
    if (this.CharacterClass.Id === ClassType.Fighter && this.Stats.ConMod > 0) {
      this.TotalSlots += this.Stats.ConMod;
    }

    // Add spells, 3 for wizard and 2 for cleric
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

    // Handle talent bonuses
    for (let i = 0; i < this.Talents.length; i++) {
      switch (this.Talents[i]) {
        case Talents.CLERIC2:
          this.MeleeBonus += 1;
          break;
        case Talents.CLERIC3:
          this.SpellcastingBonus += 1;
          break;
        case Talents.CLERIC4:
          if (this.Stats.Wisdom < 18) {
            this.Stats.Wisdom += 2;
          } else {
            this.Stats.Strength += 2;
          }
          break;
        case Talents.FIGHTER2:
        case Talents.THIEF4:
          this.MeleeBonus += 1;
          this.RangedBonus += 1;
          break;
        case Talents.FIGHTER3:
          if (this.Weapons[0].Type[0] === WeaponTypes.Ranged) {
            this.Stats.Dexterity += 2;
          } else {
            this.Stats.Strength += 2;
          }
          break;
        case Talents.FIGHTER4:
          this.ArmorClass += 1;
          break;
        case Talents.THIEF3:
          if (
            this.Stats.Strength > this.Stats.Dexterity &&
            this.Stats.Strength < 18
          ) {
            this.Stats.Strength += 2;
          } else if (this.Stats.Dexterity < 18) {
            this.Stats.Dexterity += 2;
          } else {
            this.Stats.Charisma += 2;
          }
          break;
        case Talents.WIZARD2:
          if (this.Stats.Intelligence < 18) {
            this.Stats.Intelligence += 2;
          } else {
            this.SpellcastingBonus += 1;
          }
          break;
        case Talents.WIZARD4:
          this.Spells.push(Tables.WizardSpells.roll());
          break;
        case Talents.CLASS5:
          switch (this.CharacterClass.Id) {
            case ClassType.Cleric:
              if (this.Stats.Wisdom < 18) {
                this.Stats.Wisdom += 2;
              } else {
                this.Stats.Strength += 2;
              }
              break;
            case ClassType.Fighter:
              if (this.Weapons[0].Type[0] === WeaponTypes.Ranged) {
                this.Stats.Dexterity += 2;
              } else {
                this.Stats.Strength += 2;
              }
              break;
            case ClassType.Thief:
              if (
                this.Stats.Strength > this.Stats.Dexterity &&
                this.Stats.Strength < 18
              ) {
                this.Stats.Strength += 2;
              } else if (this.Stats.Dexterity < 18) {
                this.Stats.Dexterity += 2;
              } else {
                this.Stats.Charisma += 2;
              }
              break;
            case ClassType.Wizard:
              if (this.Stats.Intelligence < 18) {
                this.Stats.Intelligence += 2;
              } else {
                this.Stats.Constitution += 2;
              }
              break;
          }
          break;
        case Talents.ELF:
          if (
            this.CharacterClass.Id === (ClassType.Wizard || ClassType.Cleric)
          ) {
            this.SpellcastingBonus += 1;
          } else {
            this.RangedBonus += 1;
          }
          break;
        case Talents.HALFORC:
          this.MeleeBonus += 1;
          this.MeleeDamageBonus += 1;
          break;
      }
    }
  }
}
