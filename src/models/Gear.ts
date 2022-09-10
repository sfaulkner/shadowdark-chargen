export interface Gear {
  Name: string;
  Cost: number;
  Slots: number;
  FirstFree?: boolean;
}

export class Gears {
  static readonly ARROWS: Gear = {
    Name: "Arrows (20)",
    Cost: 1,
    Slots: 1,
  };

  static readonly BACKPACK: Gear = {
    Name: "Backpack",
    Cost: 2,
    Slots: 1,
    FirstFree: true,
  };

  static readonly CALTROPS: Gear = {
    Name: "Caltrops (one bag)",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly CROSSBOW_BOLTS: Gear = {
    Name: "Crossbow bolts (20)",
    Cost: 1,
    Slots: 1,
  };

  static readonly CROWBAR: Gear = {
    Name: "Crowbar",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly FLASK: Gear = {
    Name: "Flask or bottle",
    Cost: 3,
    Slots: 1,
  };

  static readonly FLINT_AND_STEEL: Gear = {
    Name: "Flint and steel",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly GRAPPLING_HOOK: Gear = {
    Name: "Grappling hook",
    Cost: 1,
    Slots: 1,
  };

  static readonly IRON_SPIKES: Gear = {
    Name: "Iron spikes (10)",
    Cost: 1,
    Slots: 1,
  };

  static readonly LANTERN: Gear = {
    Name: "Lantern",
    Cost: 5,
    Slots: 1,
  };

  static readonly MIRROR: Gear = {
    Name: "Mirror",
    Cost: 10,
    Slots: 1,
  };

  static readonly OIL_FLASK: Gear = {
    Name: "Oil, flask",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly POLE: Gear = {
    Name: "Pole",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly RATIONS: Gear = {
    Name: "Rations (3)",
    Cost: 0.05,
    Slots: 1,
  };

  static readonly ROPE: Gear = {
    Name: "Rope, 60'",
    Cost: 1,
    Slots: 1,
  };

  static readonly TORCH: Gear = {
    Name: "Torch",
    Cost: 0.05,
    Slots: 1,
  };
}
