export interface Background {
  Name: string;
  Description: string;
}

export class Backgrounds {
  static readonly URCHIN: Background = {
    Name: "Urchin",
    Description: "You grew up in the merciless streets of a large city",
  };

  static readonly WANTED: Background = {
    Name: "Wanted",
    Description: "There's a price on your head, but you have allies",
  };

  static readonly CULT_INITIATE: Background = {
    Name: "Cult Initiate",
    Description: "You know blasphemous secrets and rituals",
  };

  static readonly THIEVES_GUILD: Background = {
    Name: "Thieves' Guild",
    Description: "You have connections, contacts, and debts",
  };

  static readonly BANISHED: Background = {
    Name: "Banished",
    Description: "Your people cast you out for supposed crimes",
  };

  static readonly ORPHANED: Background = {
    Name: "Orphaned",
    Description: "An unusual guardian rescued and raised you",
  };

  static readonly WIZARDS_APPRENTICE: Background = {
    Name: "Wizard's Apprentice",
    Description: "You have a knack and eye for magic",
  };

  static readonly JEWELER: Background = {
    Name: "Jeweler",
    Description: "You can easily appraise value and authenticity",
  };

  static readonly HERBALIST: Background = {
    Name: "Herbalist",
    Description: "You know plants, medicines, and poisons",
  };

  static readonly BARBARIAN: Background = {
    Name: "Barbarian",
    Description: "You left the horde, but it never quite left you",
  };

  static readonly MERCENARY: Background = {
    Name: "Mercenary",
    Description: "You fought friend and foe alike for your coin",
  };

  static readonly SAILOR: Background = {
    Name: "Sailor",
    Description: "Pirate, privateer, or merchant -- the seas are yours",
  };

  static readonly ACOLYTE: Background = {
    Name: "Acolyte",
    Description: "You're well trained in religious rites and doctrines",
  };

  static readonly SOLDIER: Background = {
    Name: "Soldier",
    Description: "You served as a fighter in an organized army",
  };

  static readonly RANGER: Background = {
    Name: "Ranger",
    Description: "The woods and wilds are your true home",
  };

  static readonly SCOUT: Background = {
    Name: "Scout",
    Description: "You survived on stealth, observation, and speed",
  };

  static readonly MINSTREL: Background = {
    Name: "Minstrel",
    Description: "You've traveled far with your charm and talent",
  };

  static readonly SCHOLAR: Background = {
    Name: "Scholar",
    Description: "You know much about ancient history and lore",
  };

  static readonly NOBLE: Background = {
    Name: "Noble",
    Description: "A famous name has opened many doors for you",
  };

  static readonly CHIRURGEON: Background = {
    Name: "Chirurgeon",
    Description: "You know anatomy, surgery, and first aid",
  };
}
