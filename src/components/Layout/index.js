import React from "react"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "./../../../static/lollipop.svg"

// Footer
import Footer from "../Footer"

// Layout
const Layout = ({ children }) => {
  return (
    <div className="container w-5/6 min-h-screen  mx-auto px-2 flex flex-col items-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Virtual Lolly</title>
        <link rel="icon" href={titleIcon} />
        <link rel="canonical" href="#" />
      </Helmet>
      <div className="w-full lg:min-h-90v p-5 my-auto flex flex-col lg:flex-row-reverse">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
