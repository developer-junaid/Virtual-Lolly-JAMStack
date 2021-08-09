import React, { useRef, useState } from "react"

// Components
import Lolly from "../Lolly"
import Layout from "../Layout"

// API Functions
import { createLolly } from "../../api"

// Create Lolly
const CreateLolly = () => {
  // Colors
  const [topColor, setTopColor] = useState("#5e2c02")
  const [middleColor, setMiddleColor] = useState("#08072e")
  const [bottomColor, setBottomColor] = useState("#b8b8bf")

  // References
  const toRef = useRef()
  const fromRef = useRef()
  const messageRef = useRef()

  // Handlers
  const handleSubmit = async e => {
    // Submit form
    e.preventDefault()

    let to = toRef.current.value
    let from = fromRef.current.value
    let message = messageRef.current.value

    // Call CreateLolly
    await createLolly(to, from, message, topColor, middleColor, bottomColor)
  }

  // Return
  return (
    <Layout title={"Create Your Lolly"}>
      <Lolly top={topColor} middle={middleColor} bottom={bottomColor} />
      <form onSubmit={handleSubmit}>
        <div className="flex-row justify-center items-center">
          <input
            className="h-8"
            type="color"
            value={topColor}
            name="topColor"
            id="topColor"
            onChange={e => setTopColor(e.target.value)}
          />
          <input
            className="h-8 ml-3"
            type="color"
            value={middleColor}
            name="middleColor"
            id="middleColor"
            onChange={e => setMiddleColor(e.target.value)}
          />
          <input
            className="h-8 ml-3"
            type="color"
            value={bottomColor}
            name="bottomColor"
            id="bottomColor"
            onChange={e => setBottomColor(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <input
            className="py-2 px-4  focus:ring focus:border-blue-300 outline-none my-2 text-lg"
            type="text"
            name="to"
            ref={toRef}
            placeholder="To"
          />
          <input
            className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
            type="text"
            name="message"
            ref={messageRef}
            placeholder="Message"
          />
          <input
            className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
            type="text"
            name="from"
            ref={fromRef}
            placeholder="From"
          />

          <button
            type={"submit"}
            className="my-6 px-8 py-4 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
          >
            Create and Get Link
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default CreateLolly
