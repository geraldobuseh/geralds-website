"use client";
import { useState } from "react";

interface Answer {
  text: string;
  choice: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    question: "Where does Gerald currently study?",
    answers: [
      { text: "Texas State University", choice: true },
      { text: "Harvard University", choice: false },
      { text: "University of Lagos", choice: false },
      { text: "Purdue University", choice: false }
    ]
  },
  {
    question: "What is Gerald’s academic standing?",
    answers: [
      { text: "Freshman", choice: false },
      { text: "Sophomore", choice: false },
      { text: "Junior", choice: false },
      { text: "Senior", choice: true }
    ]
  },
  {
    question: "Which game left the biggest impression on Gerald?",
    answers: [
      { text: "The Last Of Us", choice: true },
      { text: "EAFC", choice: false },
      { text: "Mortal Kombat", choice: false },
      { text: "GTA", choice: false }
    ]
  },
  {
    question: "Which football (soccer) club does Gerald support?",
    answers: [
      { text: "Manchester United", choice: false },
      { text: "Manchester City", choice: true },
      { text: "Real Madrid", choice: false },
      { text: "Chelsea", choice: false }
    ]
  },
  {
    question: "Gerald traces his roots back to which country?",
    answers: [
      { text: "South Africa", choice: false },
      { text: "Nigeria", choice: true },
      { text: "United States", choice: false },
      { text: "Ghana", choice: false }
    ]
  },
  {
    question: "What meal does Gerald never turn down?",
    answers: [
      { text: "Pasta", choice: false },
      { text: "Rice", choice: false },
      { text: "Burger (no cheese)", choice: false },
      { text: "Medium-cooked steak", choice: true }
    ]
  },
  {
    question: "Which programming language does Gerald enjoy working in the most?",
    answers: [
      { text: "C#", choice: false },
      { text: "Python", choice: false },
      { text: "C++", choice: true },
      { text: "JavaScript", choice: false }
    ]
  },
  {
    question: "How long has Gerald been writing code?",
    answers: [
      { text: "About a year", choice: false },
      { text: "Around two years", choice: false },
      { text: "Roughly three years", choice: false },
      { text: "Four years or more", choice: true }
    ]
  },
  {
    question: "Which subject did Gerald enjoy the most in high school?",
    answers: [
      { text: "English Language", choice: false },
      { text: "Biology", choice: false },
      { text: "Mathematics", choice: true },
      { text: "Economics", choice: false }
    ]
  },
  {
    question: "Who is Gerald’s most-played artist?",
    answers: [
      { text: "Bnxn", choice: false },
      { text: "Future", choice: false },
      { text: "Lil Baby", choice: false },
      { text: "Burna Boy", choice: true }
    ]
  }
];


export default function TriviaQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowNext(false);
    setShowScore(false);
  };

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowNext(false);
    } else {
      setShowScore(true);
    }
  };

  const getScoreMessage = () => {
    if (score > 8) {
      return `Sensational! You scored ${score} out of ${questions.length} points!`;
    } else if (score >= 5 && score <= 8) {
      return `Nice! You scored ${score} out of ${questions.length} points!`;
    } else {
      return `Oops! You scored ${score} out of ${questions.length} points! You should try again and think harder!`;
    }
  };

  if (showScore) {
    return (
      <div className="border border-gray-800 rounded-lg p-8 hover:border-secondary transition">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {getScoreMessage()}
        </h2>
        <button
          onClick={startQuiz}
          className="w-full border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition"
        >
          Play Again
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  return (
    <div className="border border-gray-800 rounded-lg p-8 hover:border-secondary transition">
      <h2 className="text-xl font-semibold mb-6 text-neutral-300 tracking-[2.2em] ">
        {questionNumber}. {currentQuestion.question}
      </h2>
      <div className="space-y-3 mb-6 ">
        {currentQuestion.answers.map((answer, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = answer.choice;
          const showCorrect = selectedAnswer !== null && isCorrect;
          const showIncorrect = isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index, isCorrect)}
              disabled={selectedAnswer !== null}
              className={`w-full text-neutral-400 text-left p-4 rounded border transition ${
                showCorrect
                  ? "bg-green-900/30 border-green-500 text-green-300"
                  : showIncorrect
                  ? "bg-red-900/30 border-red-500 text-red-300"
                  : selectedAnswer !== null
                  ? "border-gray-700 text-gray-500 cursor-not-allowed"
                  : "border-gray-800 text-gray-300 hover:border-secondary hover:text-secondary"
              }`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      {showNext && (
        <button
          onClick={handleNext}
          className="w-full border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition"
        >
          Next
        </button>
      )}
    </div>
  );
}

