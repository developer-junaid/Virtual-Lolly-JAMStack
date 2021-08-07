// Imports
const { GET_LOLLY_BY_ID } = require("./utils/linkQueries")
const sendQuery = require("./utils/sendQuery")

// Body
exports.handler = async event => {
  // Logic
  const { id } = JSON.parse(event.body)
  const variables = { id }

  console.log("id", id)
  console.log("variables", variables)

  // Response
  try {
    const res = await sendQuery(GET_LOLLY_BY_ID, variables)
    // const data = res

    // console.log("DATA LOLLY: ", res)

    return {
      statusCode: 200,
      body: JSON.stringify("success"),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    }
  }
}
