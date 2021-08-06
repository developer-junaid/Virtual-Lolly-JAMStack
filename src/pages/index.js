import React from "react"

// Components
import Lolly from "./components/Lolly"

// Home
export default function Home() {
  return (
    <div className="container min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <h2 className="text-3xl text-white font-medium my-6">
        Virtual Lolly App
      </h2>
      <Lolly
        className="mx-auto my-6"
        height={300}
        top={"#544442"}
        middle={"#422e2c"}
        bottom={"#171d1f"}
      />
      <button className="mt-6 px-8 py-4 border-2 border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500">
        Click Me
      </button>
    </div>
  )
}
