import { LanguageRarity } from "./Enumerations";

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
