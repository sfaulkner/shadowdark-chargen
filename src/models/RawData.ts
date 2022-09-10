import { Alignments } from "./Alignments";
import { Backgrounds } from "./Backgrounds";
import { CharacterClasses } from "./CharacterClass";
import { Deities } from "./Deities";
import { Languages } from "./Languages";
import { Races } from "./Races";

export const ClassData = [
  {
    Range: 1,
    Value: CharacterClasses.CLERIC,
  },
  {
    Range: 2,
    Value: CharacterClasses.FIGHTER,
  },
  {
    Range: 3,
    Value: CharacterClasses.THIEF,
  },
  {
    Range: 4,
    Value: CharacterClasses.WIZARD,
  },
];

export const RaceData = [
  {
    Range: 4,
    Value: Races.HUMAN,
  },
  {
    Range: 6,
    Value: Races.ELF,
  },
  {
    Range: 8,
    Value: Races.DWARF,
  },
  {
    Range: 10,
    Value: Races.HALFLING,
  },
  {
    Range: 11,
    Value: Races.HALFORC,
  },
  {
    Range: 12,
    Value: Races.GOBLIN,
  },
];

export const AlignmentData = [
  {
    Range: 3,
    Value: Alignments.LAWFUL,
  },
  {
    Range: 5,
    Value: Alignments.NEUTRAL,
  },
  {
    Range: 6,
    Value: Alignments.CHAOTIC,
  },
];

export const GearData = [
  {
    Range: 1,
    Value: "Torch",
  },
  {
    Range: 2,
    Value: "Dagger",
  },
  {
    Range: 3,
    Value: "Pole",
  },
  {
    Range: 4,
    Value: "Rations (3)",
  },
  {
    Range: 5,
    Value: "Rope, 60'",
  },
  {
    Range: 6,
    Value: "Oil, flask",
  },
  {
    Range: 7,
    Value: "Crowbar",
  },
  {
    Range: 8,
    Value: "Iron spikes (10)",
  },
  {
    Range: 9,
    Value: "Flint and steel",
  },
  {
    Range: 10,
    Value: "Grappling hook",
  },
  {
    Range: 11,
    Value: "Shield",
  },
  {
    Range: 12,
    Value: "Caltrops (one bag)",
  },
];

export const BackgroundData = [
  {
    Range: 1,
    Value: Backgrounds.URCHIN,
  },
  {
    Range: 2,
    Value: Backgrounds.WANTED,
  },
  {
    Range: 3,
    Value: Backgrounds.CULT_INITIATE,
  },
  {
    Range: 4,
    Value: Backgrounds.THIEVES_GUILD,
  },
  {
    Range: 5,
    Value: Backgrounds.BANISHED,
  },
  {
    Range: 6,
    Value: Backgrounds.ORPHANED,
  },
  {
    Range: 7,
    Value: Backgrounds.WIZARDS_APPRENTICE,
  },
  {
    Range: 8,
    Value: Backgrounds.JEWELER,
  },
  {
    Range: 9,
    Value: Backgrounds.HERBALIST,
  },
  {
    Range: 10,
    Value: Backgrounds.BARBARIAN,
  },
  {
    Range: 11,
    Value: Backgrounds.MERCENARY,
  },
  {
    Range: 12,
    Value: Backgrounds.SAILOR,
  },
  {
    Range: 13,
    Value: Backgrounds.ACOLYTE,
  },
  {
    Range: 14,
    Value: Backgrounds.SOLDIER,
  },
  {
    Range: 15,
    Value: Backgrounds.RANGER,
  },
  {
    Range: 16,
    Value: Backgrounds.SCOUT,
  },
  {
    Range: 17,
    Value: Backgrounds.MINSTREL,
  },
  {
    Range: 18,
    Value: Backgrounds.SCHOLAR,
  },
  {
    Range: 19,
    Value: Backgrounds.NOBLE,
  },
  {
    Range: 20,
    Value: Backgrounds.CHIRURGEON,
  },
];

export const TitleData = [
  {
    Range: 2,
    Value: [
      ["Acolyte", "Initiate", "Seeker"],
      ["Squire", "Knave", "Warrior"],
      ["Footpad", "Thug", "Robber"],
      ["Apprentice", "Adept", "Shaman"],
    ],
  },
  {
    Range: 4,
    Value: [
      ["Crusader", "Zealot", "Invoker"],
      ["Cavalier", "Bandit", "Barbarian"],
      ["Burglar", "Cutthroat", "Outlaw"],
      ["Conjurer", "Channeler", "Seer"],
    ],
  },
  {
    Range: 6,
    Value: [
      ["Templar", "Cultist", "Haruspex"],
      ["Knight", "Slayer", "Battlerager"],
      ["Rook", "Shadow", "Rogue"],
      ["Arcanist", "Witch/Warlock", "Warden"],
    ],
  },
  {
    Range: 8,
    Value: [
      ["Champion", "Scourge", "Mystic"],
      ["Thane", "Reaver", "Warchief"],
      ["Underboss", "Assassin", "Renegade"],
      ["Mage", "Diabolist", "Sage"],
    ],
  },
  {
    Range: 10,
    Value: [
      ["Paladin", "Chaos Knight", "Oracle"],
      ["Lord/Lady", "Warlord", "Chieftain"],
      ["Boss", "Wraith", "Bandit King/Queen"],
      ["Archmage", "Sorcerer", "Druid"],
    ],
  },
];

export const DeityData = [
  [
    {
      Range: 1,
      Value: Deities.SAINT_TERRAGNIS,
    },
    {
      Range: 2,
      Value: Deities.MADEERA,
    },
  ],
  [
    {
      Range: 1,
      Value: Deities.MEMNON,
    },
    {
      Range: 2,
      Value: Deities.RAMLAAT,
    },
    {
      Range: 3,
      Value: Deities.SHUNE,
    },
  ],
  [
    {
      Range: 1,
      Value: Deities.GEDE,
    },
    {
      Range: 2,
      Value: Deities.ORD,
    },
  ],
];

export const NameData = [
  { Range: 1, Value: ["Hilde", "Eliara", "Iggs", "Willow", "Vara", "Zali"] },
  { Range: 2, Value: ["Torbin", "Ryarn", "Tark", "Benny", "Gralk", "Bram"] },
  { Range: 3, Value: ["Marga", "Sariel", "Nix", "Annie", "Ranna", "Clara"] },
  {
    Range: 4,
    Value: ["Bruno", "Tirolas", "Lenk", "Tucker", "Korv", "Nattias"],
  },
  { Range: 5, Value: ["Karina", "Galira", "Roke", "Marie", "Zasha", "Rina"] },
  { Range: 6, Value: ["Naugrim", "Varos", "Fitz", "Hobb", "Hrogar", "Denton"] },
  { Range: 7, Value: ["Brenna", "Daeniel", "Tila", "Cora", "Klara", "Mirena"] },
  {
    Range: 8,
    Value: ["Darvin", "Axidor", "Riggs", "Gordie", "Tragan", "Aran"],
  },
  { Range: 9, Value: ["Elga", "Hiralia", "Prim", "Rose", "Brolga", "Morgan"] },
  { Range: 10, Value: ["Alric", "Cyrwin", "Zeb", "Ardo", "Drago", "Giralt"] },
  {
    Range: 11,
    Value: ["Isolde", "Lothiel", "Finn", "Alma", "Yelena", "Tamra"],
  },
  {
    Range: 12,
    Value: ["Gendry", "Zaphiel", "Borg", "Norbert", "Krull", "Oscar"],
  },
  { Range: 13, Value: ["Bruga", "Nayra", "Yark", "Jennie", "Ulara", "Ishana"] },
  { Range: 14, Value: ["Junnor", "Ithior", "Deeg", "Barvin", "Tulk", "Rogar"] },
  {
    Range: 15,
    Value: ["Vidrid", "Amriel", "Nibs", "Tilly", "Shiraal", "Jasmin"],
  },
  { Range: 16, Value: ["Torson", "Elyon", "Brak", "Pike", "Wulf", "Tarin"] },
  { Range: 17, Value: ["Brielle", "Jirwyn", "Fink", "Lydia", "Ivara", "Yuri"] },
  {
    Range: 18,
    Value: ["Ulfgar", "Natinel", "Rizzo", "Marlow", "Hirok", "Malchor"],
  },
  { Range: 19, Value: ["Sarna", "Fiora", "Squib", "Astrid", "Aja", "Lienna"] },
  {
    Range: 20,
    Value: ["Grimm", "Ruhiel", "Grix", "Jasper", "Zoraan", "Godfrey"],
  },
];

export const TalentData = [
  {
    Range: 2,
    Value: [
      "Gain advantage on casting one spell you know",
      "Gain Weapon Mastery with one additional weapon",
      "Gain advantage on initiative rolls (reroll if duplicate)",
      "Make one random magic item (see GM Quickstart Guide)",
    ],
  },
  {
    Range: 6,
    Value: [
      "+1 to melee or ranged attacks",
      "+1 to melee and ranged attacks",
      "Your Backstab deals +1 dice of damage",
      "+2 to Intelligence score or +1 to wizard spellcasting checks",
    ],
  },
  {
    Range: 9,
    Value: [
      "+1 to cleric spellcasting checks",
      "+2 to Strength, Dexterity, or Constitution score",
      "+2 to Strength, Dexterity, or Charisma score",
      "Gain advantage on casting one spell you know",
    ],
  },
  {
    Range: 11,
    Value: [
      "+2 to Strength or Wisdom score",
      "Choose one kind of armor. You get +1 AC from that armor",
      "+1 to melee and ranged attacks",
      "Learn one additional wizard spell of any tier you know",
    ],
  },
  {
    Range: 12,
    Value: [
      "Choose a talent or +2 points to distribute to ability scores",
      "Choose a talent or +2 points to distribute to ability scores",
      "Choose a talent or +2 points to distribute to ability scores",
      "Choose a talent or +2 points to distribute to ability scores",
    ],
  },
];

export const CommonLanguageData = [
  {
    Range: 1,
    Value: Languages.COMMON,
  },
  {
    Range: 2,
    Value: Languages.DWARVISH,
  },
  {
    Range: 3,
    Value: Languages.ELVISH,
  },
  {
    Range: 4,
    Value: Languages.GIANT,
  },
  {
    Range: 5,
    Value: Languages.GOBLIN,
  },
  {
    Range: 6,
    Value: Languages.MERRAN,
  },
  {
    Range: 7,
    Value: Languages.ORCISH,
  },
  {
    Range: 8,
    Value: Languages.REPTILLIAN,
  },
  {
    Range: 9,
    Value: Languages.SYLVAN,
  },
  {
    Range: 10,
    Value: Languages.THANIAN,
  },
];

export const ExoticLanguageData = [
  {
    Range: 1,
    Value: Languages.CELESTIAL,
  },
  {
    Range: 2,
    Value: Languages.DIABOLIC,
  },
  {
    Range: 3,
    Value: Languages.DRACONIC,
  },
  {
    Range: 4,
    Value: Languages.PRIMORDIAL,
  },
];
