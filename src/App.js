import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  "🍩": "Donut",
  "🍔": "Burger",
  "🍟": "Fries",
  "🍣": "Sushi",
  "🍕": "Pizza",
  "🍗": "Chicken",
  "🍭": "Candy",
  "🍺": "Beer",
  "🍰": "Pastry",
};

const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failed to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
   <div className="App">
      <h1>inside outttttt</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}

export default App;
