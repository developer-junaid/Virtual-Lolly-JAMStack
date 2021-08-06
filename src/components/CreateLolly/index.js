import React, { useRef, useState } from "react"

// Components
import Lolly from "../Lolly"

// Create Lolly
const CreateLolly = () => {
  // Colors
  const [topColor, setTopColor] = useState("#5e2c02")
  const [middleColor, setMiddleColor] = useState("#08072e")
  const [bottomColor, setBottomColor] = useState("#b8b8bf")

  // References
  const to = useRef()
  const from = useRef()
  const message = useRef()

  // Handlers
  const handleSubmit = e => {
    // Submit form
    console.log(
      "Values",
      to.current.value,
      from.current.value,
      message.current.value
    )
  }

  // Return
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <h1 className="text-3xl text-white font-medium mt-10">
        Create Your Lolly
      </h1>
      <Lolly
        className="mx-auto my-10"
        height={400}
        top={topColor}
        middle={middleColor}
        bottom={bottomColor}
      />
      <div className="flex-row justify-center items-center">
        <input
          className="h-8"
          type="color"
          value={topColor}
          name="top"
          id="top"
          onChange={e => setTopColor(e.target.value)}
        />
        <input
          className="h-8 ml-3"
          type="color"
          value={middleColor}
          name="middle"
          id="middle"
          onChange={e => setMiddleColor(e.target.value)}
        />
        <input
          className="h-8 ml-3"
          type="color"
          value={bottomColor}
          name="bottome"
          id="bottom"
          onChange={e => setBottomColor(e.target.value)}
        />
      </div>
      <form className="mt-8">
        <input
          className="py-2 px-4  focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="To"
          ref={to}
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="Message"
          ref={message}
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="From"
          ref={from}
        />
        <button
          onClick={handleSubmit}
          className="my-6 px-8 py-4 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
        >
          Create and Get Link
        </button>
      </form>
    </div>
  )
}

export default CreateLolly
