import React from "react"

export default function Settings({ formData, handleChange, displayQuestions }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center max-w-full">
      <h2 className="text-3xl mb-2 font-semibold">Choose your settings:</h2>
      <form className="flex flex-col">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film </option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musical & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animation</option>
        </select>
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          name="difficulty"
        >
          <option value={""}>Surprise me</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button
          type="button"
          className="py-4 px-6 bg-[var(--btn-bg)] rounded-2xl text-[var(--btn-font)] duration-500 hover:bg-[var(--btn-bg-hover)]  text-xl"
          onClick={() => displayQuestions()}
        >
          Start Quiz
        </button>
      </form>
    </div>
  )
}
