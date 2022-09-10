import { Alignment, Alignments } from "./Alignments";

export interface Deity {
  Name: string;
  Description: string;
  Alignment: Alignment;
}

export class Deities {
  static readonly SAINT_TERRAGNIS: Deity = {
    Name: "Saint Terragnis",
    Description:
      "A legendary knight who is the patron of most lawful humans. She ascended to godhood long ago and is the embodiment of righteousness and justice.",
    Alignment: Alignments.LAWFUL,
  };

  static readonly GEDE: Deity = {
    Name: "Gede",
    Description:
      "The god of feasts, mirth, and the wilds. Gede is usually peaceful, but primal storms rage when her anger rises. Many elves and halflings worship her.",
    Alignment: Alignments.NEUTRAL,
  };

  static readonly MADEERA: Deity = {
    Name: "Madeera the Covenant",
    Description:
      "Madeera was the first manifestation of Law. She carries every law of reality, a dictate called the Covenant, written on her skin in precise symbols.",
    Alignment: Alignments.LAWFUL,
  };

  static readonly ORD: Deity = {
    Name: "Ord",
    Description:
      "Ord the Unbending, the Wise, the Secret-Keeper. He is the god of magic, knowledge, secrets, and equilibrium.",
    Alignment: Alignments.NEUTRAL,
  };

  static readonly MEMNON: Deity = {
    Name: "Memnon",
    Description:
      "Memnon was the first manifestation of Chaos. He is Madeera’s twin, a red-maned, leonine being whose ultimate ambition is to rend the cosmic laws of the Covenant from his sister’s skin.",
    Alignment: Alignments.CHAOTIC,
  };

  static readonly RAMLAAT: Deity = {
    Name: "Ramlaat",
    Description:
      "Ramlaat is the Pillager, the Barbaric, the Horde. Many orcs worship him and live by the Blood Rite, a prophecy that says only the strongest will survive a coming doom.",
    Alignment: Alignments.CHAOTIC,
  };

  static readonly SHUNE: Deity = {
    Name: "Shune the Vile",
    Description:
      "Shune whispers arcane secrets to sorcerers and witches who call to her in the dark hours. She schemes to displace Ord so she can control the vast flow of magic herself.",
    Alignment: Alignments.CHAOTIC,
  };
}
