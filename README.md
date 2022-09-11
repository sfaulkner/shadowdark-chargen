# shadowdark-chargen

Shadowdark Chargen is an independent product published under the
Shadowdark RPG Third-Party License and is not affiliated with The
Arcane Library, LLC. Shadowdark RPG © The Arcane Library, LLC.

## Description

React app to quickly generate random character sheets for Shadowdark RPG.

### Character creation flow

1. Roll for race using rules from Quickstart (**1d12**).
2. Roll for class using rules from Quickstart (**1d4**).
3. Roll for alignment using rules from Quickstart (**1d6**).
4. Roll for background using rules from Quickstart (**1d20**).
5. Set title based on class and alignment.
6. Roll for deity based on alignment (**1d2** or **1d3**).
7. Roll for ability scores using rules from Quickstart (**3d6** in order).
8. Roll for talent (or two if Human) from class and apply bonuses.
9. Roll for weapon based on list from class with preference for melee if STR is higher than DEX.
10. Add free carry item from Cleric or Thief if applicable.
11. Roll for languages if Cleric or Wizard.
12. Roll for spells if Cleric or Wizard.
13. Calculate gear slots based on STR (and CON if Fighter).
14. Calculate HP (reroll if Dwarf and use higher).
15. Add leather armor if not a Wizard.
16. Roll 1d6 number of items from Gear table (**1d12**) from Quickstart.

## Usage

Press **Reroll** button to reroll characters.

Press **Print** button to print the sheet. Set the orientation to Landscape. Open the more settings option and change scaling to custom and scale it until it fits on one page.
