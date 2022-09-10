import "./App.scss";
import { useState } from "react";
// import QuizCard from "./components/QuizCard";

function App() {
  const questions = [
    {
      questionText: "What is the capital of Australia?",
      answerOptions: [
        { answerText: "Melbourne", isCorrect: false },
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Darwin", isCorrect: false },
        { answerText: "Perth", isCorrect: false },
      ],
    },
    {
      questionText: "What is the besting selling Nintendo console?",
      answerOptions: [
        { answerText: "Switch", isCorrect: false },
        { answerText: "GameCube", isCorrect: false },
        { answerText: "SNES", isCorrect: false },
        { answerText: "Wii", isCorrect: true },
      ],
    },
    {
      questionText: "Who is Kaido's son in One piece",
      answerOptions: [
        { answerText: "Yamato", isCorrect: true },
        { answerText: "Uldi", isCorrect: false },
        { answerText: "Zoro", isCorrect: false },
        { answerText: "Momonosuke", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          Your score is {score} out of {questions.length}
        </div>
      ) : (
        <>
          <h1>Quiz game</h1>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="question-card">
            <div className="question-list">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <p
                  className="question-item"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
