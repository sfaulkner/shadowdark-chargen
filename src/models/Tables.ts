import { d20 } from "@2toad/d20";
import { Alignment } from "./Alignments";
import { Background } from "./Backgrounds";
import { CharacterClass } from "./CharacterClass";
import { Gear } from "./Gear";
import { Race } from "./Races";
import {
  AlignmentData,
  BackgroundData,
  ClassData,
  ClericSpellData,
  CommonLanguageData,
  DeityData,
  GearData,
  NameData,
  RaceData,
  RareLanguageData,
  TalentData,
  TitleData,
  WizardSpellData,
} from "./RawData";

// Class to instantiate a rollable table with a generic type
export class RollableTable<T> {
  private items: Array<T>;
  private die: number;
  private numDie: number;

  // Take in the array of items to roll for
  // And the die to be used
  // Optional parameter of number of die
  public constructor(items: Array<T>, numDie: number = 1) {
    this.items = items;
    this.die = items.length;
    this.numDie = numDie;
  }

  // Return the list of items being rolled for
  public getItems() {
    return this.items;
  }

  // Roll the die and find the first element in the array
  // that matches the range
  public roll(excluded: Array<T> = []) {
    if (excluded.length === 0) {
      const roll = d20.roll(`${this.numDie}d${this.die}`) - 1;
      return this.items[roll];
    } else {
      const filteredArray = this.items.filter(
        (item) => !excluded.includes(item)
      );

      const roll = d20.roll(`${this.numDie}d${filteredArray.length}`) - 1;
      return filteredArray[roll];
    }
  }
}

// Create the tables for a character to roll on
const Races = new RollableTable<Race>(RaceData);
const Classes = new RollableTable<CharacterClass>(ClassData);
const Alignments = new RollableTable<Alignment>(AlignmentData);
const Gear = new RollableTable<Gear>(GearData);
const Backgrounds = new RollableTable<Background>(BackgroundData);

// Titles aren't a rollable table, instead find them based on
// the level, class, and alignment
const Titles = (level: number, classId: number, alignmentId: number) => {
  const title = TitleData[level - 1];

  return title ? title[classId][alignmentId] : "";
};

// Return a dynamic rollable table based on the alignment
const Deities = (alignmentId: number) => {
  return new RollableTable(DeityData[alignmentId]);
};

const Talents = (classId: number) => {
  return new RollableTable(TalentData[classId]);
};

const Names = new RollableTable(NameData);

const CommonLanguages = new RollableTable(CommonLanguageData);

const RareLanguages = new RollableTable(RareLanguageData);

const ClericSpells = new RollableTable(ClericSpellData);

const WizardSpells = new RollableTable(WizardSpellData);

// Export the tables object for use on the character
export const Tables = {
  Races,
  Classes,
  Alignments,
  Gear,
  Backgrounds,
  Titles,
  Deities,
  Names,
  CommonLanguages,
  RareLanguages,
  ClericSpells,
  WizardSpells,
  Talents,
};
