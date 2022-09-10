export enum AbilityScores {
  Strength = 0,
  Dexterity,
  Constitution,
  Intelligence,
  Wisdom,
  Charisma,
}

export enum AttackBonus {
  Melee = 0,
  Ranged,
}

export enum ClassType {
  Cleric = 0,
  Fighter = 1,
  Thief = 2,
  Wizard = 3,
}

export enum RaceType {
  Dwarf = 0,
  Elf,
  Goblin,
  Halfling,
  Halforc,
  Human,
}

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
    Source: ClassType.Fighter,
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

export interface TalentItem {
  Name: string;
  Description: string;
}

export enum LanguageRarity {
  Common = 0,
  Rare,
}

export interface Language {
  Name: string;
  Speakers: string;
  Rarity: LanguageRarity;
}

export class Languages {
  static readonly COMMON: Language = {
    Name: "Common",
    Speakers: "Most humanoids",
    Rarity: LanguageRarity.Common,
  };

  static readonly DWARVISH: Language = {
    Name: "Dwarvish",
    Speakers: "Dwarves",
    Rarity: LanguageRarity.Common,
  };

  static readonly ELVISH: Language = {
    Name: "Elvish",
    Speakers: "Elves",
    Rarity: LanguageRarity.Common,
  };

  static readonly GIANT: Language = {
    Name: "Giant",
    Speakers: "Giants, ogres, trolls",
    Rarity: LanguageRarity.Common,
  };

  static readonly GOBLIN: Language = {
    Name: "Goblin",
    Speakers: "Bugbears, goblins, hobgoblins",
    Rarity: LanguageRarity.Common,
  };

  static readonly MERRAN: Language = {
    Name: "Merran",
    Speakers: "Merfolk, sahuagin, sirens",
    Rarity: LanguageRarity.Common,
  };

  static readonly ORCISH: Language = {
    Name: "Orcish",
    Speakers: "Orcs",
    Rarity: LanguageRarity.Common,
  };

  static readonly REPTILLIAN: Language = {
    Name: "Reptilian",
    Speakers: "Lizardfolks, viperians",
    Rarity: LanguageRarity.Common,
  };

  static readonly SYLVAN: Language = {
    Name: "Sylvan",
    Speakers: "Centaurs, dryads, faeries",
    Rarity: LanguageRarity.Common,
  };

  static readonly THANIAN: Language = {
    Name: "Thanian",
    Speakers: "Minotaurs, beastmen, manticores",
    Rarity: LanguageRarity.Common,
  };

  static readonly CELESTIAL: Language = {
    Name: "Celestial",
    Speakers: "Angels",
    Rarity: LanguageRarity.Rare,
  };

  static readonly DIABOLIC: Language = {
    Name: "Diabolic",
    Speakers: "Demons, devils",
    Rarity: LanguageRarity.Rare,
  };

  static readonly DRACONIC: Language = {
    Name: "Draconic",
    Speakers: "Dragons",
    Rarity: LanguageRarity.Rare,
  };

  static readonly PRIMORDIAL: Language = {
    Name: "Primordial",
    Speakers: "Elder things, elementals",
    Rarity: LanguageRarity.Rare,
  };
}

export interface Race {
  Id: RaceType;
  Name: string;
  Talent: Talent;
  Languages: Language[];
  Description: string;
}

export class Races {
  static readonly HUMAN: Race = {
    Id: 5,
    Name: "Human",
    Talent: Talents.HUMAN,
    Languages: [Languages.COMMON],
    Description:
      "Bold, adaptable, and diverse people who learn quickly and accomplish mighty deeds.",
  };

  static readonly ELF: Race = {
    Id: 1,
    Name: "Elf",
    Talent: Talents.ELF,
    Languages: [Languages.COMMON, Languages.ELVISH, Languages.SYLVAN],
    Description:
      "Ethereal, graceful people who revere knowledge and beauty. Elves see far and live long.",
  };

  static readonly DWARF: Race = {
    Id: 0,
    Name: "Dwarf",
    Talent: Talents.DWARF,
    Languages: [Languages.COMMON, Languages.DWARVISH],
    Description:
      "Brave, stalwart folk as sturdy as the stone kingdoms they carve inside mountains.",
  };

  static readonly HALFLING: Race = {
    Id: 3,
    Name: "Halfling",
    Talent: Talents.HALFLING,
    Languages: [Languages.COMMON],
    Description:
      "Small, cheerful country folk with mischievous streaks. They enjoy life’s simple pleasures.",
  };

  static readonly HALFORC: Race = {
    Id: 4,
    Name: "Half-orc",
    Talent: Talents.HALFORC,
    Languages: [Languages.COMMON, Languages.ORCISH],
    Description:
      "Towering, tusked warriors who are as daring as humans and as relentless as orcs.",
  };

  static readonly GOBLIN: Race = {
    Id: 2,
    Name: "Goblin",
    Talent: Talents.GOBLIN,
    Languages: [Languages.COMMON, Languages.GOBLIN],
    Description:
      "Green, clever beings who thrive in dark, cramped places. As fierce as they are tiny.",
  };
}

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

export interface ClassTableItem {
  Id: ClassType;
  Name: string;
  HitDice: string;
  Description: string;
  Weapons: string[];
  Armor: string[];
  Features: string[];
  Languages?: string[];
  Items?: string[];
  Spells?: string[];
  SpellAbility?: AbilityScores;
  PreferredAbility: AbilityScores;
}

export const ClassData = [
  {
    Range: 1,
    Value: {
      Id: 0,
      Name: "Cleric",
      HitDice: "1d6",
      Description:
        "Crusading templars, prophetic shamans, or mad-eyed zealots who wield the power of their gods to cleanse the unholy.",
      Weapons: [
        "Club",
        "Crossbow",
        "Dagger",
        "Mace",
        "Longsword",
        "Staff",
        "Warhammer",
      ],
      Armor: ["Leather armor", "Chainmail", "Plate mail", "Shield"],
      Features: [
        "Spellcasting. You can cast cleric spells you know.",
        "Deity. Choose a god to serve who matches your alignment (see Deities, pg. 30). You have a holy symbol for your god (it takes up no gear slots).",
      ],
      Languages: ["Celestial", "Diabolic", "Primordial"],
      Items: ["Holy symbol"],
      Spells: ["Turn Undead"],
      SpellAbility: AbilityScores.Wisdom,
      PreferredAbility: AbilityScores.Wisdom,
    },
  },
  {
    Range: 2,
    Value: {
      Id: 1,
      Name: "Fighter",
      HitDice: "1d8",
      Description:
        "Blood-soaked gladiators in dented armor, acrobatic duelists with darting swords, or far-eyed elven archers who carve their legends with steel and grit.",
      Weapons: ["All"],
      Armor: ["Leather armor", "Chainmail", "Plate mail", "Shield"],
      Features: [
        "Hauler. Add your Constitution modifier, if positive, to your gear slots.",
        "Weapon Mastery. Choose one type of weapon, such as longswords. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).",
        "Grit. Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kicking open a stuck door (Strength) or slipping free of rusty chains (Dexterity).",
      ],
      PreferredAbility: AbilityScores.Strength,
    },
  },
  {
    Range: 3,
    Value: {
      Id: 2,
      Name: "Thief",
      HitDice: "1d4",
      Description:
        "Rooftop assassins, grinning con artists, or cloaked cat burglars who can pluck a gem from the claws of a sleeping demon and sell it for twice its worth.",
      Weapons: ["Club", "Crossbow", "Dagger", "Shortbow", "Shortsword"],
      Armor: ["Leather armor"],
      Features: [
        "Backstab. If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).",
        "Thievery. You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots).",
        "You are trained in the following tasks and have advantage on any associated ability checks: Climbing, Sneaking and hiding, Applying disguises, Finding and disabling traps, Delicate tasks such as picking pockets and opening locks",
      ],
      Items: ["Thieves' tools"],
      PreferredAbility: AbilityScores.Dexterity,
    },
  },
  {
    Range: 4,
    Value: {
      Id: 3,
      Name: "Wizard",
      HitDice: "1d4",
      Description:
        "Rune-tattooed adepts, bespectacled magi, and flame-conjuring witches who dare to manipulate the fell forces of magic.",
      Weapons: ["Dagger", "Staff"],
      Armor: [],
      Features: [
        "Spellcasting. You can cast wizard spells you know.",
        "Learning Spells. You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. Whether you succeed or fail, you expend the spell scroll. Spells you learn in this way don't count toward your known spells.",
      ],
      Languages: [
        "You know two additional common languages and two rare languages (see pg.29).",
      ],
      SpellAbility: AbilityScores.Intelligence,
      PreferredAbility: AbilityScores.Intelligence,
    },
  },
];

export enum AlignmentType {
  Lawful = 0,
  Chaotic,
  Neutral,
}

export interface AlignmentTableItem {
  Id: AlignmentType;
  Name: string;
}

export const AlignmentData = [
  {
    Range: 3,
    Value: {
      Id: 0,
      Name: "Lawful",
    },
  },
  {
    Range: 5,
    Value: {
      Id: 2,
      Name: "Neutral",
    },
  },
  {
    Range: 6,
    Value: {
      Id: 1,
      Name: "Chaotic",
    },
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

export interface BackgroundTableItem {
  Name: string;
  Description: string;
}

export const BackgroundData = [
  {
    Range: 1,
    Value: {
      Name: "Urchin",
      Description: "You grew up in the merciless streets of a large city",
    },
  },
  {
    Range: 2,
    Value: {
      Name: "Wanted",
      Description: "There's a price on your head, but you have allies",
    },
  },
  {
    Range: 3,
    Value: {
      Name: "Cult Initiate",
      Description: "You know blasphemous secrets and rituals",
    },
  },
  {
    Range: 4,
    Value: {
      Name: "Thieves' Guild",
      Description: "You have connections, contacts, and debts",
    },
  },
  {
    Range: 5,
    Value: {
      Name: "Banished",
      Description: "Your people cast you out for supposed crimes",
    },
  },
  {
    Range: 6,
    Value: {
      Name: "Orphaned",
      Description: "An unusual guardian rescued and raised you",
    },
  },
  {
    Range: 7,
    Value: {
      Name: "Wizard's Apprentice",
      Description: "You have a knack and eye for magic",
    },
  },
  {
    Range: 8,
    Value: {
      Name: "Jeweler",
      Description: "You can easily appraise value and authenticity",
    },
  },
  {
    Range: 9,
    Value: {
      Name: "Herbalist",
      Description: "You know plants, medicines, and poisons",
    },
  },
  {
    Range: 10,
    Value: {
      Name: "Barbarian",
      Description: "You left the horde, but it never quite left you",
    },
  },
  {
    Range: 11,
    Value: {
      Name: "Mercenary",
      Description: "You fought friend and foe alike for your coin",
    },
  },
  {
    Range: 12,
    Value: {
      Name: "Sailor",
      Description: "Pirate, privateer, or merchant -- the seas are yours",
    },
  },
  {
    Range: 13,
    Value: {
      Name: "Acolyte",
      Description: "You're well trained in religious rites and doctrines",
    },
  },
  {
    Range: 14,
    Value: {
      Name: "Soldier",
      Description: "You served as a fighter in an organized army",
    },
  },
  {
    Range: 15,
    Value: {
      Name: "Ranger",
      Description: "The woods and wilds are your true home",
    },
  },
  {
    Range: 16,
    Value: {
      Name: "Scout",
      Description: "You survived on stealth, observation, and speed",
    },
  },
  {
    Range: 17,
    Value: {
      Name: "Minstrel",
      Description: "You've traveled far with your charm and talent",
    },
  },
  {
    Range: 18,
    Value: {
      Name: "Scholar",
      Description: "You know much about ancient history and lore",
    },
  },
  {
    Range: 19,
    Value: {
      Name: "Noble",
      Description: "A famous name has opened many doors for you",
    },
  },
  {
    Range: 20,
    Value: {
      Name: "Chirurgeon",
      Description: "You know anatomy, surgery, and first aid",
    },
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

export interface DeityTableItem {
  Name: string;
  Description: string;
}

export const DeityData = [
  [
    {
      Range: 1,
      Value: {
        Name: "Saint Terragnis",
        Description:
          "A legendary knight who is the patron of most lawful humans. She ascended to godhood long ago and is the embodiment of righteousness and justice.",
      },
    },
    {
      Range: 2,
      Value: {
        Name: "Madeera the Covenant",
        Description:
          "Madeera was the first manifestation of Law. She carries every law of reality, a dictate called the Covenant, written on her skin in precise symbols.",
      },
    },
  ],
  [
    {
      Range: 1,
      Value: {
        Name: "Memnon",
        Description:
          "Memnon was the first manifestation of Chaos. He is Madeera’s twin, a red-maned, leonine being whose ultimate ambition is to rend the cosmic laws of the Covenant from his sister’s skin.",
      },
    },
    {
      Range: 2,
      Value: {
        Name: "Ramlaat",
        Description:
          "Ramlaat is the Pillager, the Barbaric, the Horde. Many orcs worship him and live by the Blood Rite, a prophecy that says only the strongest will survive a coming doom.",
      },
    },
    {
      Range: 3,
      Value: {
        Name: "Shune the Vile",
        Description:
          "Shune whispers arcane secrets to sorcerers and witches who call to her in the dark hours. She schemes to displace Ord so she can control the vast flow of magic herself.",
      },
    },
  ],
  [
    {
      Range: 1,
      Value: {
        Name: "Gede",
        Description:
          "The god of feasts, mirth, and the wilds. Gede is usually peaceful, but primal storms rage when her anger rises. Many elves and halflings worship her.",
      },
    },
    {
      Range: 2,
      Value: {
        Name: "Ord",
        Description:
          "Ord the Unbending, the Wise, the Secret-Keeper. He is the god of magic, knowledge, secrets, and equilibrium.",
      },
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

export interface Armor {
  Name: string;
  Cost: number;
  Slots: number;
  ArmorClass: number;
  DexBonus: boolean;
  ArmorBonus: number;
  Properties: string;
}

export class Armors {
  static readonly LEATHER_ARMOR: Armor = {
    Name: "Leather armor",
    Cost: 10,
    Slots: 1,
    ArmorClass: 11,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "",
  };

  static readonly CHAINMAIL: Armor = {
    Name: "Chainmail",
    Cost: 60,
    Slots: 2,
    ArmorClass: 13,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "Disadv on stealth, swim",
  };

  static readonly PLATE_MAIL: Armor = {
    Name: "Plate mail",
    Cost: 130,
    Slots: 3,
    ArmorClass: 15,
    DexBonus: false,
    ArmorBonus: 0,
    Properties: "No swim, disadv stealth",
  };

  static readonly SHIELD: Armor = {
    Name: "Shield",
    Cost: 10,
    Slots: 1,
    ArmorClass: 0,
    DexBonus: false,
    ArmorBonus: 2,
    Properties: "Occupies one hand",
  };
}

export const ArmorData: Armor[] = [
  {
    Name: "Leathar armor",
    Cost: 10,
    Slots: 1,
    ArmorClass: 11,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "",
  },
  {
    Name: "Chainmail",
    Cost: 60,
    Slots: 2,
    ArmorClass: 13,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "Disadv on stealth, swim",
  },
  {
    Name: "Plate mail",
    Cost: 130,
    Slots: 3,
    ArmorClass: 15,
    DexBonus: false,
    ArmorBonus: 0,
    Properties: "No swim, disadv stealth",
  },
  {
    Name: "Shield",
    Cost: 10,
    Slots: 1,
    ArmorClass: 0,
    DexBonus: false,
    ArmorBonus: 2,
    Properties: "Occupies one hand",
  },
];

export enum WeaponTypes {
  Melee = 0,
  Ranged,
}

export enum WeaponRanges {
  Close = 0,
  Near,
  Far,
}

export enum WeaponHandedness {
  Onehand = 0,
  Twohand,
  Versatile,
}

export interface WeaponProperties {
  Handed: WeaponHandedness;
  Slots: number;
  Loading: boolean;
  Thrown: boolean;
  Finesse: boolean;
}

export interface Weapon {
  Name: string;
  Cost: number;
  Type: WeaponTypes[];
  Range: WeaponRanges;
  Damage: "1d4" | "1d6" | "1d8" | "1d10" | "1d12";
  VersatileDamage?: "1d8" | "1d10";
  Properties: WeaponProperties;
}

export class Weapons {
  static readonly BASTARD_SWORD: Weapon = {
    Name: "Bastard sword",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly CLUB: Weapon = {
    Name: "Club",
    Cost: 0.05,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly CROSSBOW: Weapon = {
    Name: "Crossbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 1,
      Loading: true,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly DAGGER: Weapon = {
    Name: "Dagger",
    Cost: 1,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: true,
    },
  };

  static readonly GREATAXE: Weapon = {
    Name: "Greataxe",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly GREATSWORD: Weapon = {
    Name: "Greatsword",
    Cost: 12,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d12",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly JAVELIN: Weapon = {
    Name: "Javelin",
    Cost: 0.05,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  };

  static readonly LONGBOW: Weapon = {
    Name: "Longbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly LONGSWORD: Weapon = {
    Name: "Longsword",
    Cost: 9,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    VersatileDamage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly MACE: Weapon = {
    Name: "Mace",
    Cost: 5,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SHORTBOW: Weapon = {
    Name: "Shortbow",
    Cost: 6,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SHORTSWORD: Weapon = {
    Name: "Shortsword",
    Cost: 7,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SPEAR: Weapon = {
    Name: "Spear",
    Cost: 0.05,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  };

  static readonly STAFF: Weapon = {
    Name: "Staff",
    Cost: 0.05,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly WARHAMMER: Weapon = {
    Name: "Warhammer",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };
}

export const WeaponData: Weapon[] = [
  {
    Name: "Bastard sword",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Club",
    Cost: 0.05,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Crossbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 1,
      Loading: true,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Dagger",
    Cost: 1,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: true,
    },
  },
  {
    Name: "Greataxe",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Greatsword",
    Cost: 12,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d12",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 2,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Javelin",
    Cost: 0.05,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  },
  {
    Name: "Longbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Longsword",
    Cost: 9,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    VersatileDamage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Mace",
    Cost: 5,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Shortbow",
    Cost: 6,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Shortsword",
    Cost: 7,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Spear",
    Cost: 0.05,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d6",
    Properties: {
      Handed: WeaponHandedness.Onehand,
      Slots: 1,
      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  },
  {
    Name: "Staff",
    Cost: 0.05,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  },
  {
    Name: "Warhammer",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    Properties: {
      Handed: WeaponHandedness.Twohand,
      Slots: 1,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
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
