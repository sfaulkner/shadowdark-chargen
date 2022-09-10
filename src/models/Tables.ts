import { d20 } from "@2toad/d20";
import {
  AlignmentData,
  AlignmentTableItem,
  AlignmentType,
  BackgroundData,
  BackgroundTableItem,
  ClassData,
  ClassTableItem,
  DeityData,
  GearData,
  NameData,
  RaceData,
  Race,
  TalentData,
  TitleData,
} from "./RawData";

// Interface to hold the type of item on a rollable table
export interface RollableTableItem<T> {
  Range: number;
  Value: T;
}

// Class to instantiate a rollable table with a generic type
export class RollableTable<T> {
  private items: Array<RollableTableItem<T>>;
  private die: number;
  private numDie: number;

  // Take in the array of items to roll for
  // And the die to be used
  // Optional parameter of number of die
  public constructor(
    items: Array<RollableTableItem<T>>,
    die: number,
    numDie: number = 1
  ) {
    this.items = items;
    this.die = die;
    this.numDie = numDie;
  }

  // Return the list of items being rolled for
  public getItems() {
    return this.items;
  }

  // Roll the die and find the first element in the array
  // that matches the range
  public roll() {
    const roll = this.items.find(
      (p) => p.Range >= d20.roll(`${this.numDie}d${this.die}`)
    );
    return roll ? roll.Value : this.items[0].Value;
  }
}

// Create the tables for a character to roll on
const Races = new RollableTable<Race>(RaceData, 12);
const Classes = new RollableTable<ClassTableItem>(ClassData, 4);
const Alignments = new RollableTable<AlignmentTableItem>(AlignmentData, 6);
const Gear = new RollableTable(GearData, 12);
const Backgrounds = new RollableTable<BackgroundTableItem>(BackgroundData, 20);

// Titles aren't a rollable table, instead find them based on
// the level, class, and alignment
const Titles = (level: number, classId: number, alignmentId: number) => {
  const title = TitleData.find((p) => p.Range >= level);

  return title ? title.Value[classId][alignmentId] : "";
};

// Return a dynamic rollable table based on the alignment
const Deities = (alignmentId: number) => {
  const deityTableLength = alignmentId === AlignmentType.Chaotic ? 3 : 2;
  return new RollableTable(DeityData[alignmentId], deityTableLength);
};

const Names = new RollableTable(NameData, 20);

const Talents = new RollableTable(TalentData, 6, 2);

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
  Talents,
};
