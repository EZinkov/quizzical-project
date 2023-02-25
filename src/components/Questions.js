import React, { useState } from "react"
import shuffleArray from "shuffle-array"
import { decode } from "html-entities"
import Answers from "./Answers"

export default function Questions({
  game,
  questions,
  endGame,
  countPoints,
  clearState,
}) {
  const data = questions.map(question => {
    return {
      number: questions.indexOf(question) + 1,
      id: question.id,
      question: question.question,
      correct_answer: question.correct_answer,
      answers: shuffleArray(question.answers),
      playerAnswer: "",
      isCorrect: "no data",
    }
  })

  const [questionState, setQuestionState] = useState(data)

  const questionsHtml = questionState.map(item => {
    return (
      <div key={item.id} id={item.id} className="">
        <h2 className="text-xl font-medium">
          {item.number}. {decode(item.question)}
        </h2>
        <Answers
          isGameOver={game.isOver}
          questionId={item.id}
          all_answers={item.answers}
          correct_answer={item.correct_answer}
          savePickedAnswers={savePickedAnswers}
          isCorrect={item.isCorrect}
        />
      </div>
    )
  })

  function savePickedAnswers(idQuestion, answer) {
    setQuestionState(questions => {
      return questions.map(question => {
        return question.id === idQuestion
          ? {
              ...question,
              playerAnswer: answer,
            }
          : question
      })
    })
  }

  function checkAnswers() {
    endGame()
    questionState.map(question => {
      if (question.correct_answer === question.playerAnswer) {
        countPoints()
        question.isCorrect = true
      } else {
        question.isCorrect = false
      }
    })
  }

  return (
    <div className="container border w-11/12 my-0 mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Quizzical</h1>
      <div>
        <p className="text-xl font-semibold mb-4 text-center">
          Out of 10 questions, how many will you get right? Let's find out!
        </p>
        {questionsHtml}
        {game.isOver ? (
          <p className="text-center mt-2 font-semibold">
            Correct answers: {game.points} / 10
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col justify-center items-center">
          <button
            className="py-2 px-4 w-3/6 mt-4 bg-[var(--btn-bg)] rounded-2xl text-[var(--btn-font)] duration-500 hover:bg-[var(--btn-bg-hover)]  text-xl"
            onClick={game.isOver ? clearState : checkAnswers}
          >
            {game.isOver ? "New Game" : "Check answers"}
          </button>
        </div>
      </div>
    </div>
  )
}
