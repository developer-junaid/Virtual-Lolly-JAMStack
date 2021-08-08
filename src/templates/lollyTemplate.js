import React from "react"

// Components
import Lolly from "./../components/Lolly"

// Gatsby
import { Link } from "gatsby"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "../../static/lollipop.svg"

// Share Lolly
const LollyTemplate = ({ pageContext, location }) => {
  // Data
  const link = location.href
  const lolly = pageContext.lolly

  // Return
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Virtual Lolly</title>
        <link rel="icon" href={titleIcon} />
        <link rel="canonical" href="#" />
      </Helmet>
      <h1 className="text-3xl text-white font-medium mt-10">
        Your Virtual Lolly
      </h1>

      <Lolly
        key={lolly._id}
        className="mx-auto my-10"
        height={400}
        top={lolly.topColor}
        middle={lolly.middleColor}
        bottom={lolly.bottomColor}
      />

      <label className="py-2 px-4 block  border focus:ring focus:border-blue-300 outline-none my-4">
        <span className="text-blue-400 text-lg">
          Your lolly is freezing. Share it with below link
        </span>
      </label>
      <div className="my-4 py-2 px-4 cursor-text flex bg-black bg-opacity-70 justify-center items-center  focus:ring focus:border-blue-300 outline-none">
        <span className="text-blue-400 font-mediu text-sm md:text-lg overflow-auto">
          {link}
        </span>
      </div>
      <div className="py-6 px-4 drop-shadow-md shadow-2xl">
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          To: {lolly.to}
        </label>
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          {lolly.message}
        </label>
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          From: {lolly.from}
        </label>
      </div>
      <span className="text-gray-200 my-4 block">
        Hassan made this virtual lollipop for you.
        <Link to="/" className="text-blue-400 underline">
          You can make your own
        </Link>
        &nbsp;to send to a friend who deserve some sugary treat which won't rot
        their teeth...
      </span>
    </div>
  )
}

export default LollyTemplate
