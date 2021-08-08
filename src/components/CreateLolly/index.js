import React, { useRef, useState } from "react"

// Components
import Lolly from "../Lolly"
import Layout from "../Layout"

// Link
import { navigate } from "gatsby"

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
  const handleSubmit = e => {
    // Submit form
    e.preventDefault()

    let to = toRef.current.value
    let from = fromRef.current.value
    let message = messageRef.current.value

    // Call CreateLolly
    fetch(`/.netlify/functions/createLolly`, {
      method: "POST",
      body: JSON.stringify({
        topColor,
        middleColor,
        bottomColor,
        to,
        from,
        message,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log("result", result)
        navigate(`/show-lolly?${result._id}`)
      })
      .catch(err => {
        console.log(err)
      })
    // CreateLolly
  }

  // Return
  return (
    <Layout>
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
          ref={toRef}
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="Message"
          ref={messageRef}
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="From"
          ref={fromRef}
        />

        <button
          onClick={handleSubmit}
          className="my-6 px-8 py-4 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
        >
          Create and Get Link
        </button>
      </form>
    </Layout>
  )
}

export default CreateLolly
