import React from "react"

// Components
import Lolly from "../components/Lolly"

// Home
export default function Home() {
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <h1 className="text-3xl text-white font-medium mt-10">
        Virtual Lolly App
      </h1>
      <Lolly
        className="mx-auto my-10"
        height={400}
        top={"#544442"}
        middle={"#422e2c"}
        bottom={"#171d1f"}
      />
      <h2 className="text-white text-2xl mt-8">
        Create a virtual lolly pop and send to your friend
      </h2>
      <p className="text-base mt-4 p-2 text-gray-300">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button className="my-6 px-8 py-4 border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500">
        Get Started
      </button>
    </div>
  )
}
