// Imports
const { CREATE_LOLLY } = require("./utils/linkQueries")
const sendQuery = require("./utils/sendQuery")

// Body
exports.handler = async event => {
  // Logic
  const { topColor, middleColor, bottomColor, to, from, message } = JSON.parse(
    event.body
  )
  const variables = { topColor, middleColor, bottomColor, to, from, message }

  // Response
  try {
    const { createLolly: createdLolly } = await sendQuery(
      CREATE_LOLLY,
      variables
    )
    return {
      statusCode: 200,
      body: JSON.stringify(createdLolly),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    }
  }
}
