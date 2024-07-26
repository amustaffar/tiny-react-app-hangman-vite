import { useState } from "react";
//import "./App.css";
import Header from "./Header";
import Alphabet from "./Alphabet";

function App() {
  const title = "Hangman";
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header title={title} />
      <Alphabet />
    </>
  );
}

export default App;

// alphabet button
//
