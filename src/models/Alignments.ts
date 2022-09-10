import { AlignmentType } from "./Enumerations";

export interface Alignment {
  Id: AlignmentType;
  Name: string;
  Description: string;
}

export class Alignments {
  static readonly LAWFUL: Alignment = {
    Id: 0,
    Name: "Lawful",
    Description:
      "Lawful characters align themselves with fairness, order, and virtue. Lawful characters operate from a “good of the whole” mentality.",
  };

  static readonly CHAOTIC: Alignment = {
    Id: 1,
    Name: "Chaotic",
    Description:
      "Chaotic characters align themselves with destruction, ambition, and wickedness. Chaotic characters adopt a “survival of the fittest” mentality.",
  };

  static readonly NEUTRAL: Alignment = {
    Id: 2,
    Name: "Neutral",
    Description:
      "Neutral characters find balance between Law and Chaos. They align with the cycle of growth and decline, adopting a “nature must take its course” mentality.",
  };
}
