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
  private _strength: number;
  private _strMod: number;
  private _dexterity: number;
  private _dexMod: number;
  private _constitution: number;
  private _conMod: number;
  private _intelligence: number;
  private _intMod: number;
  private _wisdom: number;
  private _wisMod: number;
  private _charisma: number;
  private _chaMod: number;

  public constructor() {
    // Continute to roll stats until it meets the requirements
    let statArray: number[] | null = null;
    while (statArray === null) {
      statArray = GenerateStats();
    }

    // Set each ability score
    this._strength = statArray[0];
    this._dexterity = statArray[1];
    this._constitution = statArray[2];
    this._intelligence = statArray[3];
    this._wisdom = statArray[4];
    this._charisma = statArray[5];

    // Set ability score modifiers
    this._strMod = Math.floor((this._strength - 10) / 2);
    this._dexMod = Math.floor((this._dexterity - 10) / 2);
    this._conMod = Math.floor((this._constitution - 10) / 2);
    this._intMod = Math.floor((this._intelligence - 10) / 2);
    this._wisMod = Math.floor((this._wisdom - 10) / 2);
    this._chaMod = Math.floor((this._charisma - 10) / 2);
  }

  get Strength() {
    return this._strength;
  }

  set Strength(value: number) {
    this._strength = value;
    this._strMod = Math.floor((this._strength - 10) / 2);
  }

  get StrMod() {
    return this._strMod;
  }

  get Dexterity() {
    return this._dexterity;
  }

  set Dexterity(value: number) {
    this._dexterity = value;
    this._dexMod = Math.floor((this._dexterity - 10) / 2);
  }

  get DexMod() {
    return this._dexMod;
  }

  get Constitution() {
    return this._constitution;
  }

  set Constitution(value: number) {
    this._constitution = value;
    this._conMod = Math.floor((this._constitution - 10) / 2);
  }

  get ConMod() {
    return this._conMod;
  }

  get Intelligence() {
    return this._intelligence;
  }

  set Intelligence(value: number) {
    this._intelligence = value;
    this._intMod = Math.floor((this._intelligence - 10) / 2);
  }

  get IntMod() {
    return this._intMod;
  }

  get Wisdom() {
    return this._wisdom;
  }

  set Wisdom(value: number) {
    this._wisdom = value;
    this._wisMod = Math.floor((this._wisdom - 10) / 2);
  }

  get WisMod() {
    return this._wisMod;
  }

  get Charisma() {
    return this._charisma;
  }

  set Charisma(value: number) {
    this._charisma = value;
    this._chaMod = Math.floor((this._charisma - 10) / 2);
  }

  get ChaMod() {
    return this._chaMod;
  }
}
