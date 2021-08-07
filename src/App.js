import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojidictionary = {
    "🤓": "When I see my friend studying",
    "😳": "What's happening there",
    "😁": "he heheheh ",
    "😘": "Take my heart -  ",
    "😎": "Showing some attitude ",
    "😡": "I am getting angry ",
    "👨‍🐷": "made for each other ",
    " 🗣 ": "I'm telling you that ",
    "👶":"Your small kid rey in fornt of me",
    "🐵": "Your relative"
  };
  // console.log(Object.keys(emojidictionary)) this print object to array
  var emojisWeKnow = Object.keys(emojidictionary);

  const [meaning, setmeaning] = useState("");
  function onChangeHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojidictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have that in our database,Soon I will add them";
    }
    setmeaning(meaning); //react call to show output
  }
  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojidictionary[emoji];
    setmeaning(meaning); //react call output
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
        <input
          className="input"
          onChange={onChangeHandler}
          placeholder="Enter your Emoji here"
        ></input>
        <div className="output">{meaning} </div>{" "}
        {/*//acutal output set by React using useState */}
        <h3 className="h3text">Click on Emoji</h3>
        <div className="emoji">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span className='element'
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
