import {
  AbilityScores,
  AttackBonus,
  ClassType,
  RaceType,
} from "./Enumerations";

export interface Talent {
  Name?: string;
  Description: string;
  Source: ClassType | RaceType | "class";
  AbilityScoreBonus?: number;
  AbilityScoreBonusType?: AbilityScores[];
  SpellcastingBonus?: number;
  SpellcastingBonusType?: ClassType.Cleric | ClassType.Wizard;
  BackstabBonus?: boolean;
  AttackBonus?: AttackBonus[];
  AttackBonusBoth?: boolean;
  TalentBonus?: boolean;
}

export class Talents {
  static readonly CLERIC1: Talent = {
    Description: "Gain advantage on casting one spell you know",
    Source: ClassType.Cleric,
  };

  static readonly CLERIC2: Talent = {
    Description: "+1 to melee or ranged attacks",
    Source: ClassType.Cleric,
    AttackBonus: [AttackBonus.Melee, AttackBonus.Ranged],
    AttackBonusBoth: false,
  };

  static readonly CLERIC3: Talent = {
    Description: "+1 to cleric spellcasting checks",
    Source: ClassType.Cleric,
    SpellcastingBonus: 1,
    SpellcastingBonusType: ClassType.Cleric,
  };

  static readonly CLERIC4: Talent = {
    Description: "+2 to Strength or Wisdom score",
    Source: ClassType.Cleric,
    AbilityScoreBonus: 2,
    AbilityScoreBonusType: [AbilityScores.Strength, AbilityScores.Wisdom],
  };

  static readonly FIGHTER1: Talent = {
    Description: "Gain Weapon Mastery with one additional weapon",
    Source: ClassType.Fighter,
  };

  static readonly FIGHTER2: Talent = {
    Description: "+1 to melee and ranged attacks",
    Source: ClassType.Fighter,
    AttackBonus: [AttackBonus.Melee, AttackBonus.Ranged],
    AttackBonusBoth: true,
  };

  static readonly FIGHTER3: Talent = {
    Description: "+2 to Strength, Dexterity, or Constitution score",
    Source: ClassType.Fighter,
    AbilityScoreBonus: 2,
    AbilityScoreBonusType: [
      AbilityScores.Strength,
      AbilityScores.Dexterity,
      AbilityScores.Constitution,
    ],
  };

  static readonly FIGHTER4: Talent = {
    Description: "Choose one kind of armor. You get +1 AC from that armor",
    Source: ClassType.Fighter,
  };

  static readonly THIEF1: Talent = {
    Description: "Gain advantage on initiative rolls (reroll if duplicate)",
    Source: ClassType.Thief,
  };

  static readonly THIEF2: Talent = {
    Description: "Your Backstab deals +1 dice of damage",
    Source: ClassType.Thief,
    BackstabBonus: true,
  };

  static readonly THIEF3: Talent = {
    Description: "+2 to Strength, Dexterity, or Charisma score",
    Source: ClassType.Thief,
    AbilityScoreBonus: 2,
    AbilityScoreBonusType: [
      AbilityScores.Strength,
      AbilityScores.Dexterity,
      AbilityScores.Charisma,
    ],
  };

  static readonly THIEF4: Talent = {
    Description: "+1 to melee and ranged attacks",
    Source: ClassType.Thief,
    AttackBonus: [AttackBonus.Melee, AttackBonus.Ranged],
    AttackBonusBoth: true,
  };

  static readonly WIZARD1: Talent = {
    Description: "Make one random magic item (see GM Quickstart Guide)",
    Source: ClassType.Wizard,
  };

  static readonly WIZARD2: Talent = {
    Description: "+2 to Intelligence score or +1 to wizard spellcasting checks",
    Source: ClassType.Wizard,
    AbilityScoreBonus: 2,
    AbilityScoreBonusType: [AbilityScores.Intelligence],
    SpellcastingBonus: 1,
    SpellcastingBonusType: ClassType.Wizard,
  };

  static readonly WIZARD3: Talent = {
    Description: "Gain advantage on casting one spell you know",
    Source: ClassType.Wizard,
  };

  static readonly WIZARD4: Talent = {
    Description: "Learn one additional wizard spell of any tier you know",
    Source: ClassType.Wizard,
  };

  static readonly CLASS5: Talent = {
    Description: "Choose a talent or +2 points to distribute to ability scores",
    Source: "class",
    AbilityScoreBonus: 2,
    AbilityScoreBonusType: [
      AbilityScores.Strength,
      AbilityScores.Dexterity,
      AbilityScores.Constitution,
      AbilityScores.Intelligence,
      AbilityScores.Wisdom,
      AbilityScores.Charisma,
    ],
    TalentBonus: true,
  };

  static readonly HUMAN: Talent = {
    Name: "Ambitious",
    Description: "You gain one additional talent roll at 1st level.",
    Source: RaceType.Human,
  };

  static readonly ELF: Talent = {
    Name: "Farsight",
    Description:
      "You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks.",
    Source: RaceType.Elf,
  };

  static readonly DWARF: Talent = {
    Name: "Stout",
    Description: "Roll your hit dice gains with advantage.",
    Source: RaceType.Dwarf,
  };

  static readonly HALFLING: Talent = {
    Name: "Stealthy",
    Description: "Once per day, you can become invisible for 3 rounds.",
    Source: RaceType.Halfling,
  };

  static readonly HALFORC: Talent = {
    Name: "Mighty",
    Description:
      "You have a +1 bonus to attack and damage rolls with melee weapons.",
    Source: RaceType.Halforc,
  };

  static readonly GOBLIN: Talent = {
    Name: "Keen Senses",
    Description: "You can't be surprised.",
    Source: RaceType.Goblin,
  };
}
