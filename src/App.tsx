import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CharacterSheet from "./components/CharacterSheet";
import { Character } from "./models/Character";

// Main component to hold all the others
function App() {
  // Holds the state of the currently rolled character
  const [player, setPlayer] = useState(new Character());

  // Ref to the character sheet component for print button
  const charactherSheetRef = useRef(null);

  // Rerolling the character creates a new one
  const onRerollClick = () => {
    setPlayer(new Character());
  };

  // Event handler to print the character sheet
  const handlePrint = useReactToPrint({
    content: () => charactherSheetRef.current,
  });

  return (
    <>
      <div className="buttonContainer">
        <button className="button" onClick={onRerollClick}>
          Reroll
        </button>
        <button className="button" onClick={handlePrint}>
          Print
        </button>
      </div>

      <div className="sheetContainer">
        <CharacterSheet player={player} ref={charactherSheetRef} />
      </div>

      <footer>
        <p>
          Shadowdark Chargen is an independent product published under the
          Shadowdark RPG Third-Party License and is not affiliated with The
          Arcane Library, LLC. Shadowdark RPG © The Arcane Library, LLC.
        </p>
      </footer>
    </>
  );
}

export default App;
