import { Alignments } from "./Alignments";
import { Armors } from "./Armors";
import { Backgrounds } from "./Backgrounds";
import { CharacterClasses } from "./CharacterClass";
import { Deities } from "./Deities";
import { Gears } from "./Gear";
import { Languages } from "./Languages";
import { Races } from "./Races";
import { Spells } from "./Spells";
import { Talents } from "./Talents";
import { Weapons } from "./Weapons";

export const ClassData = [
  CharacterClasses.CLERIC,
  CharacterClasses.FIGHTER,
  CharacterClasses.THIEF,
  CharacterClasses.WIZARD,
];

export const RaceData = [
  Races.HUMAN,
  Races.HUMAN,
  Races.HUMAN,
  Races.HUMAN,
  Races.ELF,
  Races.ELF,
  Races.DWARF,
  Races.DWARF,
  Races.HALFLING,
  Races.HALFLING,
  Races.HALFORC,
  Races.GOBLIN,
];

export const AlignmentData = [
  Alignments.LAWFUL,
  Alignments.LAWFUL,
  Alignments.LAWFUL,
  Alignments.NEUTRAL,
  Alignments.NEUTRAL,
  Alignments.CHAOTIC,
];

export const GearData = [
  Gears.TORCH,
  Weapons.DAGGER,
  Gears.POLE,
  Gears.RATIONS,
  Gears.ROPE,
  Gears.OIL_FLASK,
  Gears.CROWBAR,
  Gears.IRON_SPIKES,
  Gears.FLINT_AND_STEEL,
  Gears.GRAPPLING_HOOK,
  Armors.SHIELD,
  Gears.CALTROPS,
];

export const BackgroundData = [
  Backgrounds.URCHIN,
  Backgrounds.WANTED,
  Backgrounds.CULT_INITIATE,
  Backgrounds.THIEVES_GUILD,
  Backgrounds.BANISHED,
  Backgrounds.ORPHANED,
  Backgrounds.WIZARDS_APPRENTICE,
  Backgrounds.JEWELER,
  Backgrounds.HERBALIST,
  Backgrounds.BARBARIAN,
  Backgrounds.MERCENARY,
  Backgrounds.SAILOR,
  Backgrounds.ACOLYTE,
  Backgrounds.SOLDIER,
  Backgrounds.RANGER,
  Backgrounds.SCOUT,
  Backgrounds.MINSTREL,
  Backgrounds.SCHOLAR,
  Backgrounds.NOBLE,
  Backgrounds.CHIRURGEON,
];

export const TalentData = [
  [
    Talents.CLERIC1,
    Talents.CLERIC1,
    Talents.CLERIC2,
    Talents.CLERIC2,
    Talents.CLERIC2,
    Talents.CLERIC2,
    Talents.CLERIC3,
    Talents.CLERIC3,
    Talents.CLERIC3,
    Talents.CLERIC4,
    Talents.CLERIC4,
    Talents.CLASS5,
  ],
  [
    Talents.FIGHTER1,
    Talents.FIGHTER1,
    Talents.FIGHTER2,
    Talents.FIGHTER2,
    Talents.FIGHTER2,
    Talents.FIGHTER2,
    Talents.FIGHTER3,
    Talents.FIGHTER3,
    Talents.FIGHTER3,
    Talents.FIGHTER4,
    Talents.FIGHTER4,
    Talents.CLASS5,
  ],
  [
    Talents.THIEF1,
    Talents.THIEF1,
    Talents.THIEF2,
    Talents.THIEF2,
    Talents.THIEF2,
    Talents.THIEF3,
    Talents.THIEF3,
    Talents.THIEF3,
    Talents.THIEF3,
    Talents.THIEF4,
    Talents.THIEF4,
    Talents.CLASS5,
  ],
  [
    Talents.WIZARD1,
    Talents.WIZARD1,
    Talents.WIZARD2,
    Talents.WIZARD2,
    Talents.WIZARD2,
    Talents.WIZARD2,
    Talents.WIZARD2,
    Talents.WIZARD3,
    Talents.WIZARD3,
    Talents.WIZARD4,
    Talents.WIZARD4,
    Talents.CLASS5,
  ],
];

export const TitleData = [
  [
    ["Acolyte", "Initiate", "Seeker"],
    ["Squire", "Knave", "Warrior"],
    ["Footpad", "Thug", "Robber"],
    ["Apprentice", "Adept", "Shaman"],
  ],
  [
    ["Acolyte", "Initiate", "Seeker"],
    ["Squire", "Knave", "Warrior"],
    ["Footpad", "Thug", "Robber"],
    ["Apprentice", "Adept", "Shaman"],
  ],
  [
    ["Crusader", "Zealot", "Invoker"],
    ["Cavalier", "Bandit", "Barbarian"],
    ["Burglar", "Cutthroat", "Outlaw"],
    ["Conjurer", "Channeler", "Seer"],
  ],
  [
    ["Crusader", "Zealot", "Invoker"],
    ["Cavalier", "Bandit", "Barbarian"],
    ["Burglar", "Cutthroat", "Outlaw"],
    ["Conjurer", "Channeler", "Seer"],
  ],
  [
    ["Templar", "Cultist", "Haruspex"],
    ["Knight", "Slayer", "Battlerager"],
    ["Rook", "Shadow", "Rogue"],
    ["Arcanist", "Witch/Warlock", "Warden"],
  ],
  [
    ["Templar", "Cultist", "Haruspex"],
    ["Knight", "Slayer", "Battlerager"],
    ["Rook", "Shadow", "Rogue"],
    ["Arcanist", "Witch/Warlock", "Warden"],
  ],
  [
    ["Champion", "Scourge", "Mystic"],
    ["Thane", "Reaver", "Warchief"],
    ["Underboss", "Assassin", "Renegade"],
    ["Mage", "Diabolist", "Sage"],
  ],
  [
    ["Champion", "Scourge", "Mystic"],
    ["Thane", "Reaver", "Warchief"],
    ["Underboss", "Assassin", "Renegade"],
    ["Mage", "Diabolist", "Sage"],
  ],
  [
    ["Paladin", "Chaos Knight", "Oracle"],
    ["Lord/Lady", "Warlord", "Chieftain"],
    ["Boss", "Wraith", "Bandit King/Queen"],
    ["Archmage", "Sorcerer", "Druid"],
  ],
  [
    ["Paladin", "Chaos Knight", "Oracle"],
    ["Lord/Lady", "Warlord", "Chieftain"],
    ["Boss", "Wraith", "Bandit King/Queen"],
    ["Archmage", "Sorcerer", "Druid"],
  ],
];

export const DeityData = [
  [Deities.SAINT_TERRAGNIS, Deities.MADEERA],
  [Deities.MEMNON, Deities.RAMLAAT, Deities.SHUNE],
  [Deities.GEDE, Deities.ORD],
];

export const NameData = [
  ["Hilde", "Eliara", "Iggs", "Willow", "Vara", "Zali"],
  ["Torbin", "Ryarn", "Tark", "Benny", "Gralk", "Bram"],
  ["Marga", "Sariel", "Nix", "Annie", "Ranna", "Clara"],
  ["Bruno", "Tirolas", "Lenk", "Tucker", "Korv", "Nattias"],
  ["Karina", "Galira", "Roke", "Marie", "Zasha", "Rina"],
  ["Naugrim", "Varos", "Fitz", "Hobb", "Hrogar", "Denton"],
  ["Brenna", "Daeniel", "Tila", "Cora", "Klara", "Mirena"],
  ["Darvin", "Axidor", "Riggs", "Gordie", "Tragan", "Aran"],
  ["Elga", "Hiralia", "Prim", "Rose", "Brolga", "Morgan"],
  ["Alric", "Cyrwin", "Zeb", "Ardo", "Drago", "Giralt"],
  ["Isolde", "Lothiel", "Finn", "Alma", "Yelena", "Tamra"],
  ["Gendry", "Zaphiel", "Borg", "Norbert", "Krull", "Oscar"],
  ["Bruga", "Nayra", "Yark", "Jennie", "Ulara", "Ishana"],
  ["Junnor", "Ithior", "Deeg", "Barvin", "Tulk", "Rogar"],
  ["Vidrid", "Amriel", "Nibs", "Tilly", "Shiraal", "Jasmin"],
  ["Torson", "Elyon", "Brak", "Pike", "Wulf", "Tarin"],
  ["Brielle", "Jirwyn", "Fink", "Lydia", "Ivara", "Yuri"],
  ["Ulfgar", "Natinel", "Rizzo", "Marlow", "Hirok", "Malchor"],
  ["Sarna", "Fiora", "Squib", "Astrid", "Aja", "Lienna"],
  ["Grimm", "Ruhiel", "Grix", "Jasper", "Zoraan", "Godfrey"],
];

export const CommonLanguageData = [
  Languages.COMMON,
  Languages.DWARVISH,
  Languages.ELVISH,
  Languages.GIANT,
  Languages.GOBLIN,
  Languages.MERRAN,
  Languages.ORCISH,
  Languages.REPTILLIAN,
  Languages.SYLVAN,
  Languages.THANIAN,
];

export const RareLanguageData = [
  Languages.CELESTIAL,
  Languages.DIABOLIC,
  Languages.DRACONIC,
  Languages.PRIMORDIAL,
];

export const ClericSpellData = [
  Spells.CURE_WOUNDS,
  Spells.HOLY_WEAPON,
  Spells.LIGHT,
  Spells.PROTECTION_FROM_EVIL,
  Spells.SHIELD_OF_FAITH,
  Spells.TURN_UNDEAD,
];

export const WizardSpellData = [
  Spells.ALARM,
  Spells.BURNING_HANDS,
  Spells.CHARM_PERSON,
  Spells.DETECT_MAGIC,
  Spells.FEATHER_FALL,
  Spells.FLOATING_DISK,
  Spells.HOLD_PORTAL,
  Spells.LIGHT,
  Spells.MAGE_ARMOR,
  Spells.MAGIC_MISSILE,
  Spells.PROTECTION_FROM_EVIL,
  Spells.SLEEP,
];
