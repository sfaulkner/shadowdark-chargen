import { Gear } from "./Gear";

export interface Armor extends Gear {
  Slots: number;
  ArmorClass: number;
  DexBonus: boolean;
  ArmorBonus: number;
  Properties: string;
}

export class Armors {
  static readonly LEATHER_ARMOR: Armor = {
    Name: "Leather armor",
    Cost: 10,
    Slots: 1,
    ArmorClass: 11,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "",
  };

  static readonly CHAINMAIL: Armor = {
    Name: "Chainmail",
    Cost: 60,
    Slots: 2,
    ArmorClass: 13,
    DexBonus: true,
    ArmorBonus: 0,
    Properties: "Disadv on stealth, swim",
  };

  static readonly PLATE_MAIL: Armor = {
    Name: "Plate mail",
    Cost: 130,
    Slots: 3,
    ArmorClass: 15,
    DexBonus: false,
    ArmorBonus: 0,
    Properties: "No swim, disadv stealth",
  };

  static readonly SHIELD: Armor = {
    Name: "Shield",
    Cost: 10,
    Slots: 1,
    ArmorClass: 0,
    DexBonus: false,
    ArmorBonus: 2,
    Properties: "Occupies one hand",
  };
}
