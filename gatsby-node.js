const path = require("path")
const { GET_ALL_LOLLIES } = require("./functions/utils/linkQueries")
const sendQuery = require("./functions/utils/sendQuery")

// Get Lollies
const getLollies = async () => {
  const res = await sendQuery(GET_ALL_LOLLIES)
  const data = res.allLollies.data

  return data
}

// Create Pages
exports.createPages = async ({ actions: { createPage } }) => {
  const lollies = await getLollies()

  console.log("LOLLIES", lollies)
  console.log("CREATE PAGES")

  // Create Pages
  lollies.forEach(lolly => {
    createPage({
      path: `/lollies/${lolly._id}`,
      component: path.resolve("./src/templates/lollyTemplate.js"),
      context: { lolly },
    })
  })
}
