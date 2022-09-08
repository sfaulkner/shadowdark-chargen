import { useState } from "react";
import "./App.css";
import { Character } from "./models/Character";

function App() {
  const [player, setPlayer] = useState(new Character());

  const onRerollClick = () => {
    setPlayer(new Character());
  };

  return (
    <>
      <button onClick={onRerollClick}>Reroll</button>
      <ul>
        <li>Name: {player.Name}</li>
        <li>Race: {player.Race.Name}</li>
        <li>Class: {player.CharacterClass.Name}</li>
        <li>Level: {player.Level}</li>
        <li>XP: 0</li>
        <li>Title: {player.Title}</li>
        <li>Alignment: {player.Alignment.Name}</li>
        <li>Background: {player.Background.Name}</li>
        <li>Deity: {player.Deity.Name}</li>
      </ul>
      <ul>
        <li>Strength: {player.Stats.Strength}</li>
        <li>Dexterity: {player.Stats.Dexterity}</li>
        <li>Constitution: {player.Stats.Constitution}</li>
        <li>Intelligence: {player.Stats.Intelligence}</li>
        <li>Wisdom: {player.Stats.Wisdom}</li>
        <li>Charisma: {player.Stats.Charisma}</li>
      </ul>
      <ul>
        <li>HP: {player.HitPoints}</li>
        <li>AC:</li>
      </ul>
      <ul>
        <li>Attacks</li>
        <li>
          Talents & Spells
          <ul>
            {player.Talents.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </li>
        <li>Gear</li>
      </ul>
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
