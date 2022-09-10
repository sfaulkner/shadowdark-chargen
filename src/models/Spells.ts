import { ClassType } from "./Enumerations";

export interface Spell {
  Name: string;
  Tier: number;
  Duration: string;
  Range: "Self" | "Close" | "Near" | "Far";
  Description: string;
  CharacterClass: ClassType[];
}

export class Spells {
  static readonly ALARM: Spell = {
    Name: "Alarm",
    Tier: 1,
    Duration: "1 day",
    Range: "Close",
    Description:
      "You touch one object, such as a door threshold, setting a magical alarm on it. If any creature you do not designate while casting the spell touches or crosses through the object, a magical alarm sounds in your head.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly BURNING_HANDS: Spell = {
    Name: "Burning Hands",
    Tier: 1,
    Duration: "Instant",
    Range: "Close",
    Description:
      "You spread your fingers with thumbs touching, unleashing a circle of flame that fills a close area around where you stand. Creatures within the area of effect take 1d6 damage. Unattended flammable objects ignite.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly CHARM_PERSON: Spell = {
    Name: "Charm Person",
    Tier: 1,
    Duration: "1d8 days",
    Range: "Near",
    Description:
      "You magically beguile one humanoid of 2 HD or less within near range, who regards you as a friend for the duration. The spell ends if you or your allies do anything harmful to the target. The target knows it was magically charmed after the spell ends.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly CURE_WOUNDS: Spell = {
    Name: "Cure Wounds",
    Tier: 1,
    Duration: "Instant",
    Range: "Close",
    Description:
      "Your touch restores ebbing life. Roll a number of d6s equal to 1 + half your level (rounded down). One target you touch regains that many hit points.",
    CharacterClass: [ClassType.Cleric],
  };

  static readonly DETECT_MAGIC: Spell = {
    Name: "Detect Magic",
    Tier: 1,
    Duration: "Concentration",
    Range: "Near",
    Description:
      "You can sense the presence of magic within near range for the spell's duration. Complete barriers such as walls and doors block this spell.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly FEATHER_FALL: Spell = {
    Name: "Feather Fall",
    Tier: 1,
    Duration: "Instant",
    Range: "Self",
    Description:
      "You may make an attempt to cast this spell when you fall. Your rate of descent slows so that you land safely on your feet.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly FLOATING_DISK: Spell = {
    Name: "Floating Disk",
    Tier: 1,
    Duration: "10 rounds",
    Range: "Near",
    Description:
      "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can’t cross over drop-offs or pits taller than a human.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly HOLD_PORTAL: Spell = {
    Name: "Hold Portal",
    Tier: 1,
    Duration: "10 rounds",
    Range: "Near",
    Description:
      "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal. The knock spell ends this spell.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly HOLY_WEAPON: Spell = {
    Name: "Holy Weapon",
    Tier: 1,
    Duration: "5 rounds",
    Range: "Close",
    Description:
      "One weapon you touch is imbued with a sacred blessing. The weapon becomes magical and has +1 to attack and damage rolls for the duration.",
    CharacterClass: [ClassType.Cleric],
  };

  static readonly LIGHT: Spell = {
    Name: "Light",
    Tier: 1,
    Duration: "1 hour real time",
    Range: "Close",
    Description:
      "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time.",
    CharacterClass: [ClassType.Wizard, ClassType.Cleric],
  };

  static readonly MAGE_ARMOR: Spell = {
    Name: "Mage Armor",
    Tier: 1,
    Duration: "10 rounds",
    Range: "Self",
    Description:
      "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell’s duration.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly MAGIC_MISSILE: Spell = {
    Name: "Magic Missile",
    Tier: 1,
    Duration: "Instant",
    Range: "Far",
    Description:
      "You have advantage on your check to cast this spell. A glowing bolt of force streaks from your open hand, dealing 1d4 damage to one target.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly PROTECTION_FROM_EVIL: Spell = {
    Name: "Protection From Evil",
    Tier: 1,
    Duration: "Concentration",
    Range: "Close",
    Description:
      "For the spell’s duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can’t possess, compel, or beguile it. When cast on an already-possessed target, the possessing entity makes a CHA check vs. the last spellcasting check. On a failure, the entity is expelled.",
    CharacterClass: [ClassType.Wizard, ClassType.Cleric],
  };

  static readonly SHIELD_OF_FAITH: Spell = {
    Name: "Shield of Faith",
    Tier: 1,
    Duration: "5 rounds",
    Range: "Self",
    Description:
      "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration.",
    CharacterClass: [ClassType.Cleric],
  };

  static readonly SLEEP: Spell = {
    Name: "Sleep",
    Tier: 1,
    Duration: "Concentration",
    Range: "Far",
    Description:
      "This spell fills a near-sized cube extending from you. Choose a number of living creatures in the area up to your level. Those creatures fall into a deep sleep if they have 2 HD or less. Injury or vigorous shaking wakes them.",
    CharacterClass: [ClassType.Wizard],
  };

  static readonly TURN_UNDEAD: Spell = {
    Name: "Turn Undead",
    Tier: 1,
    Duration: "Instant",
    Range: "Far",
    Description:
      "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell. Undead creatures of 9 HD or less within range must make a CHA check opposed by your spellcasting check. If a creature fails, it flees for 5 rounds and cannot come within near of you during that time. If it fails by 10 or more points, it is destroyed.",
    CharacterClass: [ClassType.Cleric],
  };
}
