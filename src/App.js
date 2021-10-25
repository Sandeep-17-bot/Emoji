import React, { useState } from "react";
import { emojiList } from "./emoji";
import "./styles.css";

export default function App() {
  const emojidictionary = {
    "😍": "Eyes with hearts? Believe me, He loves you!",
    "😁": "Grinning. P.S. Brush your teeth twice, before using this.",
    "😘": "Flying Kiss, (Seriosuly? Who prefers that!) ",
    "😋": "Specifically : I'm Lovin 'it!",
    "🐵": "Your relative"
  };
  var emojisWeKnow = Object.keys(emojidictionary);

  const [meaning, setmeaning] = useState("Emoji meaning");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiList[userInput];
    if (meaning === undefined) {
      meaning = "We don't have that in our database,Soon I will add them";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>
          {" "}
          E M 😁 J I <em>meaning</em>
        </h1>
        <h3 className="h3text">
          Enter emoji in search box to know the meaning
        </h3>
        <h3 className="h3text">
          {" "}
          'Or' You can click emojis that are given below
        </h3>
        <div className="output">{meaning}</div>{" "}
        <input
          className="input"
          onChange={onChangeHandler}
          placeholder="Enter your Emoji here"
        ></input>
        <h3 className="h3text">Click on Emoji</h3>
        <div className="emoji">
          {emojisWeKnow.map(function (emoji) {
            return (
              <span
                className="element"
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "3rem",
                  padding: "0.5rem",
                  cursor: "pointer "
                }}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
