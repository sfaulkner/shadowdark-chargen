import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import CharacterSheet from "./components/CharacterSheet";
import { Character } from "./models/Character";

function App() {
  const [player, setPlayer] = useState(new Character());

  const charactherSheetRef = useRef(null);

  const onRerollClick = () => {
    setPlayer(new Character());
  };

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
