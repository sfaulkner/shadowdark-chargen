import { RaceType } from "./Enumerations";
import { Language, Languages } from "./Languages";
import { Talent, Talents } from "./Talents";

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
