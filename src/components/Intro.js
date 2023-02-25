import React from "react"

export default function Intro({ displaySettings }) {
  return (
    <div className="text-center h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-bold mb-4">Quizzical</h1>
      <p className="text-2xl font-semibold mb-4">
        Test your knowledge, if you dare!
      </p>
      <button
        type="button"
        className="py-4 px-6 bg-[var(--btn-bg)] rounded-2xl text-[var(--btn-font)] duration-500 hover:bg-[var(--btn-bg-hover)]  text-xl"
        onClick={() => displaySettings()}
      >
        Begin
      </button>
    </div>
  )
}
