import React from "react"

// Components
import Lolly from "../Lolly"
import Layout from "../Layout"

// Router
import { Link } from "gatsby"

// Home
export default function Landing() {
  return (
    <Layout>
      <div className="lg:w-2/5 flex items-center justify-center">
        <Lolly
          className="mx-auto m-10"
          top={"#5e2c02"}
          middle={"#08072e"}
          bottom={"#b8dddd"}
        />
      </div>

      <div className="lg:w-3/5 lg:flex lg:flex-col lg:justify-center items-start">
        <h1 className="text-4xl lg:text-5xl text-white font-medium mt-10">
          Virtual Lolly App
        </h1>

        <h2 className="text-white text-2xl mt-8">
          Create a virtual lolly pop and send to your friend
        </h2>
        <p className="text-base lg:text-left mt-4 p-2 lg:px-0 text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link
          to={"/create-lolly"}
          className="my-6 px-8 py-4 lg:w-1/2 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
        >
          Get Started
        </Link>
      </div>
    </Layout>
  )
}
