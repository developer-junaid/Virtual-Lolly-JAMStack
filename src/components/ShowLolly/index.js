import React, { useState, useEffect } from "react"

// Components
import Lolly from "../Lolly"

// Gatsby
import { Link } from "gatsby"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "../../../static/lollipop.svg"

// Share Lolly
const ShowLolly = ({ location }) => {
  // Data
  const [lollies, setLollies] = useState([])
  const [loading, setLoading] = useState(false)
  const lollyId = location.search.slice(1)
  const link = location.href

  //Get Lollies
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
        lollies.map(lolly => {
          const id = lolly._id

          // Get requested lolly
          if (id === lollyId) {
            return (
              <Lolly
                key={lollyId}
                className="mx-auto my-10"
                height={400}
                top={lolly.topColor}
                middle={lolly.middleColor}
                bottom={lolly.bottomColor}
              />
            )
          }
        })
      ) : (
        <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
          <h2 className="align-middle ml-2 text-3xl">Spinner</h2>
        </div>
      )}

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

      {!loading ? (
        lollies.map(lolly => {
          const id = lolly._id

          // Get requested lolly
          if (id === lollyId) {
            return (
              <div key={lollyId}>
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
                  {lolly.from} made this virtual lollipop for you.
                  <Link to="/" className="text-blue-400 underline">
                    You can make your own
                  </Link>
                  &nbsp;to send to a friend who deserve some sugary treat which
                  won't rot their teeth...
                </span>
              </div>
            )
          }
        })
      ) : (
        <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
          <h2 className="align-middle ml-2 text-3xl">Spinner</h2>
        </div>
      )}
    </div>
  )
}

export default ShowLolly
