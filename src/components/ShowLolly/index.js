import React, { useState, useEffect } from "react"

// Components
import Lolly from "../Lolly"
import Layout from "../Layout"

// Gatsby
import { Link } from "gatsby"

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
    <Layout>
      <div className="w-full lg:flex lg:flex-row">
        <div className="lg:w-2/5 flex items-center justify-center">
          {!loading ? (
            lollies.map(lolly => {
              const id = lolly._id

              // Get requested lolly
              if (id === lollyId) {
                return (
                  <Lolly
                    key={lollyId}
                    top={lolly.topColor}
                    middle={lolly.middleColor}
                    bottom={lolly.bottomColor}
                  />
                )
              } else {
                return null
              }
            })
          ) : (
            <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
              <h2 className="align-middle ml-2 text-3xl">Spinner</h2>
            </div>
          )}{" "}
        </div>

        <div className="lg:w-3/5 lg:flex lg:flex-col lg:justify-center items-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-10  text-white font-medium mt-10">
            Your Virtual Lolly
          </h1>

          <div
            htmlFor=""
            className="py-2 px-4 block border focus:ring focus:border-blue-300 outline-none my-4"
          >
            <span className="text-blue-400 text-lg  xl:text-xl">
              Your lolly is freezing. Share it with below link
            </span>
          </div>
          <div className="my-4 py-2 px-4 cursor-text  xl:text-lg flex bg-black bg-opacity-70 justify-center items-center  focus:ring focus:border-blue-300 outline-none">
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
                    <div className="py-6 px-4 drop-shadow-md shadow">
                      <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg xl:text-xl">
                        To: {lolly.to}
                      </label>
                      <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg xl:text-xl">
                        {lolly.message}
                      </label>
                      <label className="py-2 px-4 block text-white border border-gray-600 focus:ring focus:border-blue-300 outline-none my-4 text-lg xl:text-xl">
                        From: {lolly.from}
                      </label>
                    </div>
                    <span className="text-gray-200 my-4 block xl:text-lg">
                      {lolly.from} made this virtual lollipop for you.
                      <Link to="/" className="text-blue-400 underline">
                        You can make your own
                      </Link>
                      &nbsp;to send to a friend who deserve some sugary treat
                      which won't rot their teeth...
                    </span>
                  </div>
                )
              } else {
                return null
              }
            })
          ) : (
            <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
              <h2 className="align-middle ml-2 text-3xl">Spinner</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ShowLolly
