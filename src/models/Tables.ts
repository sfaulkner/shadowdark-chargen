import { d20 } from "@2toad/d20";
import {
  AlignmentData,
  BackgroundData,
  BackgroundTableItem,
  ClassData,
  ClassTableItem,
  DeityData,
  GearData,
  NameData,
  RaceData,
  TalentData,
  TitleData,
} from "./RawData";

export interface RollableTableItem<T> {
  Range: number;
  Value: T;
}

export class RollableTable<T> {
  private items: Array<RollableTableItem<T>>;
  private die: number;
  private numDie: number;

  public constructor(
    items: Array<RollableTableItem<T>>,
    die: number,
    numDie: number = 1
  ) {
    this.items = items;
    this.die = die;
    this.numDie = numDie;
  }

  public getItems() {
    return this.items;
  }

  public roll() {
    const roll = this.items.find(
      (p) => p.Range >= d20.roll(`${this.numDie}d${this.die}`)
    );
    return roll ? roll.Value : this.items[0].Value;
  }
}

const Races = new RollableTable(RaceData, 12);
const Classes = new RollableTable<ClassTableItem>(ClassData, 4);
const Alignments = new RollableTable(AlignmentData, 6);
const Gear = new RollableTable(GearData, 12);
const Backgrounds = new RollableTable<BackgroundTableItem>(BackgroundData, 20);
const Titles = (level: number, classId: number, alignmentId: number) => {
  const title = TitleData.find((p) => p.Range >= level);

  return title ? title.Value[classId][alignmentId] : "";
};

const Deities = (alignmentId: number) => {
  const deityTableLength = alignmentId === 1 ? 3 : 2;
  return new RollableTable(DeityData[alignmentId], deityTableLength);
};

const Names = new RollableTable(NameData, 20);

const Talents = new RollableTable(TalentData, 6, 2);

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
