import { Armor, Armors } from "./Armors";
import { AbilityScores, ClassType } from "./Enumerations";
import { Language, Languages } from "./Languages";
import { Weapon, Weapons } from "./Weapons";

export interface CharacterClass {
  Id: ClassType;
  Name: string;
  HitDice: "1d4" | "1d6" | "1d8";
  Description: string;
  Weapons: Weapon[];
  Armor: Armor[];
  Features: string[];
  Languages?: Language[];
  Items?: string[];
  Spells?: string[];
  SpellAbility?: AbilityScores;
  PreferredAbility: AbilityScores;
}

export class CharacterClasses {
  static readonly CLERIC: CharacterClass = {
    Id: 0,
    Name: "Cleric",
    HitDice: "1d6",
    Description:
      "Crusading templars, prophetic shamans, or mad-eyed zealots who wield the power of their gods to cleanse the unholy.",
    Weapons: [
      Weapons.CLUB,
      Weapons.CROSSBOW,
      Weapons.DAGGER,
      Weapons.MACE,
      Weapons.LONGSWORD,
      Weapons.STAFF,
      Weapons.WARHAMMER,
    ],
    Armor: [
      Armors.LEATHER_ARMOR,
      Armors.CHAINMAIL,
      Armors.PLATE_MAIL,
      Armors.SHIELD,
    ],
    Features: [
      "Spellcasting. You can cast cleric spells you know.",
      "Deity. Choose a god to serve who matches your alignment (see Deities, pg. 30). You have a holy symbol for your god (it takes up no gear slots).",
    ],
    Languages: [Languages.CELESTIAL, Languages.DIABOLIC, Languages.PRIMORDIAL],
    Items: ["Holy symbol"],
    Spells: ["Turn Undead"],
    SpellAbility: AbilityScores.Wisdom,
    PreferredAbility: AbilityScores.Wisdom,
  };

  static readonly FIGHTER: CharacterClass = {
    Id: 1,
    Name: "Fighter",
    HitDice: "1d8",
    Description:
      "Blood-soaked gladiators in dented armor, acrobatic duelists with darting swords, or far-eyed elven archers who carve their legends with steel and grit.",
    Weapons: [
      Weapons.BASTARD_SWORD,
      Weapons.CLUB,
      Weapons.CROSSBOW,
      Weapons.DAGGER,
      Weapons.GREATAXE,
      Weapons.GREATSWORD,
      Weapons.JAVELIN,
      Weapons.LONGBOW,
      Weapons.LONGSWORD,
      Weapons.MACE,
      Weapons.SHORTBOW,
      Weapons.SHORTSWORD,
      Weapons.SPEAR,
      Weapons.STAFF,
      Weapons.WARHAMMER,
    ],
    Armor: [
      Armors.LEATHER_ARMOR,
      Armors.CHAINMAIL,
      Armors.PLATE_MAIL,
      Armors.SHIELD,
    ],
    Features: [
      "Hauler. Add your Constitution modifier, if positive, to your gear slots.",
      "Weapon Mastery. Choose one type of weapon, such as longswords. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).",
      "Grit. Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kicking open a stuck door (Strength) or slipping free of rusty chains (Dexterity).",
    ],
    PreferredAbility: AbilityScores.Strength,
  };

  static readonly THIEF: CharacterClass = {
    Id: 2,
    Name: "Thief",
    HitDice: "1d4",
    Description:
      "Rooftop assassins, grinning con artists, or cloaked cat burglars who can pluck a gem from the claws of a sleeping demon and sell it for twice its worth.",
    Weapons: [
      Weapons.CLUB,
      Weapons.CROSSBOW,
      Weapons.DAGGER,
      Weapons.SHORTBOW,
      Weapons.SHORTSWORD,
    ],
    Armor: [Armors.LEATHER_ARMOR],
    Features: [
      "Backstab. If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).",
      "Thievery. You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots).",
      "You are trained in the following tasks and have advantage on any associated ability checks: Climbing, Sneaking and hiding, Applying disguises, Finding and disabling traps, Delicate tasks such as picking pockets and opening locks",
    ],
    Items: ["Thieves' tools"],
    PreferredAbility: AbilityScores.Dexterity,
  };

  static readonly WIZARD: CharacterClass = {
    Id: 3,
    Name: "Wizard",
    HitDice: "1d4",
    Description:
      "Rune-tattooed adepts, bespectacled magi, and flame-conjuring witches who dare to manipulate the fell forces of magic.",
    Weapons: [Weapons.DAGGER, Weapons.STAFF],
    Armor: [],
    Features: [
      "Spellcasting. You can cast wizard spells you know.",
      "Learning Spells. You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. Whether you succeed or fail, you expend the spell scroll. Spells you learn in this way don't count toward your known spells.",
    ],
    SpellAbility: AbilityScores.Intelligence,
    PreferredAbility: AbilityScores.Intelligence,
  };
}
