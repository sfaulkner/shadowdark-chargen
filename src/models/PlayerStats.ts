import { d20 } from "@2toad/d20";

// Function to roll stats for a character
// returns null if there was no stat higher
// than 13
const GenerateStats = () => {
  const stats = Array.from({ length: 6 }, () => d20.roll("3d6"));

  if (stats.find((p) => p > 13)) {
    return stats;
  } else {
    return null;
  }
};

// Class for instantiating and rolling
// attributes for the character
export class PlayerStats {
  public readonly Strength: number;
  public readonly Dexterity: number;
  public readonly Constitution: number;
  public readonly Intelligence: number;
  public readonly Wisdom: number;
  public readonly Charisma: number;

  public constructor() {
    // Continute to roll stats until it meets the requirements
    let statArray: number[] | null = null;
    while (statArray === null) {
      statArray = GenerateStats();
    }

    // Set each ability score
    this.Strength = statArray[0];
    this.Dexterity = statArray[1];
    this.Constitution = statArray[2];
    this.Intelligence = statArray[3];
    this.Wisdom = statArray[4];
    this.Charisma = statArray[5];
  }
}
