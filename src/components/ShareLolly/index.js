import React, { useState } from "react"

// Components
import Lolly from "../Lolly"

// Share Lolly
const ShareLolly = () => {
  // Colors
  const [topColor, setTopColor] = useState("#5e2c02")
  const [middleColor, setMiddleColor] = useState("#08072e")
  const [bottomColor, setBottomColor] = useState("#b8b8bf")

  // Return
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <h1 className="text-3xl text-white font-medium mt-10">
        Share Your Lolly
      </h1>
      <Lolly
        className="mx-auto my-10"
        height={400}
        top={topColor}
        middle={middleColor}
        bottom={bottomColor}
      />

      <form className="mt-8">
        <input
          className="py-2 px-4  focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="To"
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="Message"
        />
        <input
          className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
          type="text"
          placeholder="From"
        />
      </form>
    </div>
  )
}

export default ShareLolly
