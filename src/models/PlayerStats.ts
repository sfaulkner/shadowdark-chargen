import { d20 } from "@2toad/d20";

export interface Stats {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
}

const GenerateStats = () => {
  const stats = Array.from({ length: 6 }, () => d20.roll("3d6"));

  if (stats.find((p) => p > 13)) {
    return stats;
  } else {
    return null;
  }
};

export class PlayerStats {
  public readonly Strength: number;
  public readonly Dexterity: number;
  public readonly Constitution: number;
  public readonly Intelligence: number;
  public readonly Wisdom: number;
  public readonly Charisma: number;

  public constructor() {
    let statArray: number[] | null = null;
    while (statArray === null) {
      statArray = GenerateStats();
    }

    this.Strength = statArray[0];
    this.Dexterity = statArray[1];
    this.Constitution = statArray[2];
    this.Intelligence = statArray[3];
    this.Wisdom = statArray[4];
    this.Charisma = statArray[5];
  }
}
