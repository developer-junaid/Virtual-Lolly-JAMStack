import React from "react"

// Components
import Lolly from "../Lolly"
import Layout from "../Layout"

// Form
import { Formik } from "formik"

// API Functions
import { createLolly } from "../../api"

// Create Lolly
const CreateLolly = () => {
  // Return
  return (
    <Formik
      // Initial
      initialValues={{
        topColor: "#5e2c02",
        middleColor: "#08072e",
        bottomColor: "#b8b8bf",
        to: "",
        from: "",
        message: "",
      }}
      // Validate
      validate={values => {
        // Validation
        const errors = {}
        if (!values.to) {
          errors.to = "Required"
        }
        if (!values.from) {
          errors.from = "Required"
        }
        if (!values.message) {
          errors.message = "Required"
        }

        return errors
      }}
      // Submit
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const topColor = values.topColor
        const middleColor = values.middleColor
        const bottomColor = values.bottomColor
        const to = values.to
        const from = values.from
        const message = values.message

        // Post Data
        await createLolly(to, from, message, topColor, middleColor, bottomColor)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Layout>
          <h1 className="text-4xl lg:text-5xl  text-white font-medium mt-10">
            Create Your Lolly
          </h1>
          <Lolly
            top={values.topColor}
            middle={values.middleColor}
            bottom={values.bottomColor}
          />

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex-row justify-center items-center">
              <input
                className="h-8"
                type="color"
                value={values.topColor}
                name="topColor"
                id="topColor"
                onChange={handleChange}
              />

              <input
                className="h-8 ml-3"
                type="color"
                value={values.middleColor}
                name="middleColor"
                id="middleColor"
                onChange={handleChange}
              />
              <input
                className="h-8 ml-3"
                type="color"
                value={values.bottomColor}
                name="bottomColor"
                id="bottomColor"
                onChange={handleChange}
              />
            </div>
            <div className="mt-8 flex flex-col">
              <input
                className="py-2 px-4  focus:ring focus:border-blue-300 outline-none my-2 text-lg"
                type="text"
                name="to"
                placeholder="To*"
                autoFocus
                onChange={handleChange}
                value={values.to || ""}
              />
              <span className="text-white text-2xl">
                {errors.to && touched.to && errors.to}
              </span>

              <input
                className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
                type="text"
                name="message"
                placeholder="Message*"
                value={values.message || ""}
                onChange={handleChange}
              />
              <span className="text-white text-2xl">
                {errors.message && touched.message && errors.message}
              </span>
              <input
                className="py-2 px-4 focus:ring focus:border-blue-300 outline-none my-2 text-lg"
                type="text"
                name="from"
                placeholder="From*"
                value={values.from || ""}
                onChange={handleChange}
              />
              <span className="text-white text-2xl">
                {errors.from && touched.from && errors.from}
              </span>
              <button
                type={"submit"}
                className="my-6 px-8 py-4 inline-block border border-blue-400 font-medium text-lg text-white hover:bg-blue-400 hover:bg-opacity-90 transition duration-500"
              >
                {isSubmitting ? (
                  <span>Submitting</span>
                ) : (
                  <span> Create and Get Link</span>
                )}
              </button>
            </div>
          </form>
        </Layout>
      )}
    </Formik>
  )
}

export default CreateLolly
