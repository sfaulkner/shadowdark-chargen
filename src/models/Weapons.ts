import { WeaponHandedness, WeaponRanges, WeaponTypes } from "./Enumerations";
import { Gear } from "./Gear";

export interface WeaponProperties {
  Handed: WeaponHandedness;
  Loading: boolean;
  Thrown: boolean;
  Finesse: boolean;
}

export interface Weapon extends Gear {
  Type: WeaponTypes[];
  Range: WeaponRanges;
  Damage: "1d4" | "1d6" | "1d8" | "1d10" | "1d12";
  VersatileDamage?: "1d8" | "1d10";
  Properties: WeaponProperties;
}

export class Weapons {
  static readonly BASTARD_SWORD: Weapon = {
    Name: "Bastard sword",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Slots: 2,
    Properties: {
      Handed: WeaponHandedness.Versatile,
      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly CLUB: Weapon = {
    Name: "Club",
    Cost: 0.05,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly CROSSBOW: Weapon = {
    Name: "Crossbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d6",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Versatile,

      Loading: true,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly DAGGER: Weapon = {
    Name: "Dagger",
    Cost: 1,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d4",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: true,
      Finesse: true,
    },
  };

  static readonly GREATAXE: Weapon = {
    Name: "Greataxe",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    VersatileDamage: "1d10",
    Slots: 2,
    Properties: {
      Handed: WeaponHandedness.Versatile,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly GREATSWORD: Weapon = {
    Name: "Greatsword",
    Cost: 12,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d12",
    Slots: 2,
    Properties: {
      Handed: WeaponHandedness.Twohand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly JAVELIN: Weapon = {
    Name: "Javelin",
    Cost: 0.5,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  };

  static readonly LONGBOW: Weapon = {
    Name: "Longbow",
    Cost: 8,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d8",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Twohand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly LONGSWORD: Weapon = {
    Name: "Longsword",
    Cost: 9,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    VersatileDamage: "1d8",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Versatile,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly MACE: Weapon = {
    Name: "Mace",
    Cost: 5,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SHORTBOW: Weapon = {
    Name: "Shortbow",
    Cost: 6,
    Type: [WeaponTypes.Ranged],
    Range: WeaponRanges.Far,
    Damage: "1d4",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Twohand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SHORTSWORD: Weapon = {
    Name: "Shortsword",
    Cost: 7,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d6",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly SPEAR: Weapon = {
    Name: "Spear",
    Cost: 0.5,
    Type: [WeaponTypes.Melee, WeaponTypes.Ranged],
    Range: WeaponRanges.Near,
    Damage: "1d6",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Onehand,

      Loading: false,
      Thrown: true,
      Finesse: false,
    },
  };

  static readonly STAFF: Weapon = {
    Name: "Staff",
    Cost: 0.5,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d4",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Twohand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };

  static readonly WARHAMMER: Weapon = {
    Name: "Warhammer",
    Cost: 10,
    Type: [WeaponTypes.Melee],
    Range: WeaponRanges.Close,
    Damage: "1d8",
    Slots: 1,
    Properties: {
      Handed: WeaponHandedness.Twohand,

      Loading: false,
      Thrown: false,
      Finesse: false,
    },
  };
}
