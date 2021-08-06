import React from "react"

// Components
import Lolly from "../Lolly"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "./../../../static/lollipop.svg"

// Router
import { Link } from "gatsby"

// Home
export default function Landing() {
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Virtual Lolly</title>
        <link rel="icon" href={titleIcon} />
        <link rel="canonical" href="#" />
      </Helmet>
      <h1 className="text-3xl text-white font-medium mt-10">
        Virtual Lolly App
      </h1>
      <Lolly
        className="mx-auto my-10"
        height={400}
        top={"#5e2c02"}
        middle={"#08072e"}
        bottom={"#b8b8bf"}
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
      <Link
        to={"/create-lolly"}
        className="my-6 px-8 py-4 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
      >
        Get Started
      </Link>

      <footer className="border-t bottom-0 mt-6 p-4 ">
        <h2 className="text-white">
          Developed by{" "}
          <a
            href="https://github.com/developer-junaid"
            className="text-blue-400 hover:text-blue-600 underline cursor-pointer"
          >
            Junaid
          </a>
        </h2>
      </footer>
    </div>
  )
}
