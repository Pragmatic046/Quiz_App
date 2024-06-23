import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let questions = [
  {
    question: "Name of the founder of Pakistan ?",
    answer: "Quaid-E-Azam",
    options: [
      "Quaid-E-Azam",
      "Sir Syed Ahmad Khan",
      "Alama Iqbal",
      "Chudry Rehmat Ali",
    ],
  },
  {
    question: "Name of the fastest animal in the world ?",
    answer: "Cheetah",
    options: ["Leopard", "Lion", "Rabbit", "Cheetah"],
  },
  {
    question: "Name of the largest jungle in the world ?",
    answer: "Amazon",
    options: ["Sahara", "Guigaki", "Changa Manga", "Amazon"],
  },
];

function App() {
  const [Indexing, setIndexing] = useState(0);
  const [Score, setScore] = useState(0);
  const [Show, setShow] = useState(true);

  // --------Handling Click for Option Buttons---------------
  function handleOptionClick(SelectedOption) {
    if (Indexing < questions.length - 1) {
      setIndexing(Indexing + 1);
      if (SelectedOption === questions[Indexing].answer) {
        setScore(Score + 10);
        console.log(SelectedOption);
        console.log(Score);
      } else {
        setScore(Score);
        console.log("not working");
        console.log(Score);
      }
    } else {
      setShow(false);
      console.log('Score will be shown finally')
    }
  }

  // ---------Generating Options Buttons---------------
  const generateOptions = function (option, index) {
    return (
      <>
        <button
          id="opt-btn"
          key={index}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      </>
    );
  };

  return (
    <>
      <h4>{questions[Indexing].question}</h4>

      {Show ? (
        questions[Indexing].options.map(generateOptions)
      ) : (
        <h5>Your Score: {Score}</h5>
      )}
    </>
  );
}

export default App;
