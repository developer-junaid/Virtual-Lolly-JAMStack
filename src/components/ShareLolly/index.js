import React, { useState, useEffect } from "react"

// Components
import Lolly from "../Lolly"

// Router
import { Link } from "gatsby"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "./../../../static/lollipop.svg"

// Share Lolly
const ShareLolly = () => {
  // Colors
  const [topColor, setTopColor] = useState("#5e2c02")
  const [middleColor, setMiddleColor] = useState("#08072e")
  const [bottomColor, setBottomColor] = useState("#b8b8bf")

  // Data
  const [lollies, setLollies] = useState([])
  const [loading, setLoading] = useState(false)

  // Get Data, display, create, edit, delete
  const loadLollies = async () => {
    try {
      setLoading(true)
      const res = await fetch("/.netlify/functions/getAllLollies")
      const lollies = await res.json() // Get lollies
      setLollies(lollies)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadLollies()
  }, [])

  console.log("lollies", lollies)

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
      {!loading ? (
        lollies.map(lolly => (
          <Lolly
            className="mx-auto my-10"
            height={400}
            top={lolly.topColor}
            middle={lolly.middleColor}
            bottom={lolly.bottomColor}
          />
        ))
      ) : (
        <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
          <h2 className="align-middle ml-2 text-3xl">Spinner</h2>
        </div>
      )}

      <label className="py-2 px-4 block text-blue-400 border focus:ring focus:border-blue-300 outline-none my-4 text-lg">
        Your lolly is freezing. Share it with this link
      </label>
      <label className="py-2 px-4 cursor-text block text-blue-400 flex bg-black bg-opacity-70 justify-center items-center font-medium focus:ring focus:border-blue-300 outline-none my-4 text-lg">
        https://lollyapp-byahsen.netlify.app/ShowLolly/nEVNMJadf
      </label>
      <div className="py-6 px-4 drop-shadow-md shadow-2xl">
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          To: Hassan
        </label>
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          Hello this is my message for you
        </label>
        <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg">
          From: Junaid
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

export default ShareLolly
