// Imports
const { GET_ALL_LOLLIES } = require("./utils/linkQueries")
const sendQuery = require("./utils/sendQuery")

// Body
exports.handler = async event => {
  // Logic
  // Response
  try {
    const res = await sendQuery(GET_ALL_LOLLIES)
    const data = res.allLollies.data

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    }
  }
}
