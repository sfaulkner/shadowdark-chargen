export interface TalentItem {
  Name: string;
  Description: string;
}

export interface RaceTableItem {
  Id: number;
  Name: string;
  Talent: TalentItem;
}

export const RaceData = [
  {
    Range: 4,
    Value: {
      Id: 5,
      Name: "Human",
      Talent: {
        Name: "Ambitious",
        Description: "You gain one additional talent roll at 1st level.",
      },
    },
  },
  {
    Range: 6,
    Value: {
      Id: 1,
      Name: "Elf",
      Talent: {
        Name: "Farsight",
        Description:
          "You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks.",
      },
    },
  },
  {
    Range: 8,
    Value: {
      Id: 0,
      Name: "Dwarf",
      Talent: {
        Name: "Stout",
        Description: "Roll your hit dice gains with advantage.",
      },
    },
  },
  {
    Range: 10,
    Value: {
      Id: 3,
      Name: "Halfling",
      Talent: {
        Name: "Stealthy",
        Description: "Once per day, you can become invisible for 3 rounds.",
      },
    },
  },
  {
    Range: 11,
    Value: {
      Id: 4,
      Name: "Half-orc",
      Talent: {
        Name: "Mighty",
        Description:
          "You have a +1 bonus to attack and damage rolls with melee weapons.",
      },
    },
  },
  {
    Range: 12,
    Value: {
      Id: 2,
      Name: "Goblin",
      Talent: {
        Name: "Keen Senses",
        Description: "You can't be surprised.",
      },
    },
  },
];

export interface ClassTableItem {
  Id: number;
  Name: string;
  HitDice: string;
}

export const ClassData = [
  {
    Range: 1,
    Value: {
      Id: 0,
      Name: "Cleric",
      HitDice: "1d6",
    },
  },
  {
    Range: 2,
    Value: {
      Id: 1,
      Name: "Fighter",
      HitDice: "1d8",
    },
  },
  {
    Range: 3,
    Value: {
      Id: 2,
      Name: "Thief",
      HitDice: "1d4",
    },
  },
  {
    Range: 4,
    Value: {
      Id: 3,
      Name: "Wizard",
      HitDice: "1d4",
    },
  },
];

export interface AlignmentTableItem {
  Id: number;
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
