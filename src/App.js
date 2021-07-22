import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const emojidictionary = {
    
    "🤓": "When I see my friend studying",
    "😳": "What's happening, I can't belive",
    "😁": "Reacting to something that I did funny ",
    "😘": "Take my heart ",
    "😎": "Showing some attitude", 
  };
  
var emojisWeKnow = Object.keys(emojidictionary)

const [meaning, setmeaning]  = useState("")
  function onChangeHandler(event){   
  var userInput = event.target.value;
  var meaning = emojidictionary[userInput];
 
  if (meaning === undefined){
meaning = "We don't have that in our database,Soon I will add them"
  }
setmeaning(meaning) 
}
function emojiClickHandler(emoji){   
   var meaning = emojidictionary[emoji];
   setmeaning(meaning) 
}

  return (
    <div className="App">
      <h1> E   M   😁  J I   <em>meaning</em></h1>
     <h3 className="h3text">Enter  emoji in search box to know the meaning</h3>
     <h3 className="h3text"> 'Or' You can click emojis that are given below</h3>
      <input  className = "input" onChange = {onChangeHandler} placeholder="Enter your Emoji here"></input>
      
       <div className="output">{meaning} </div>  
      <h3 className="h3text">Click on Emoji</h3>
      {
      emojisWeKnow.map(function(emoji){
      return <span 
      onClick = {()=>emojiClickHandler(emoji)} style = {{fontSize: "3rem",padding : "0.5rem", cursor:"pointer "}} key = {emoji}>{emoji}</span>
})
            
      }
    </div>

  );
}
