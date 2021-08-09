import React from "react"

// Meta
import { Helmet } from "react-helmet"
import titleIcon from "./../../../static/lollipop.svg"

// Footer
import Footer from "../Footer"

const Layout = ({ children, title }) => {
  return (
    <div className="container w-5/6 min-h-screen mx-auto px-2 flex-col items-center justify-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Virtual Lolly</title>
        <link rel="icon" href={titleIcon} />
        <link rel="canonical" href="#" />
      </Helmet>
      <h1 className="text-3xl text-white font-medium mt-10">{title}</h1>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
