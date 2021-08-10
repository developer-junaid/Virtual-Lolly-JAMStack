// Link
import { navigate } from "gatsby"

// Create Lolly
export const createLolly = async (
  to,
  from,
  message,
  topColor,
  middleColor,
  bottomColor
) => {
  try {
    // const response = await fetch(`/.netlify/functions/createLolly`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     topColor,
    //     middleColor,
    //     bottomColor,
    //     to,
    //     from,
    //     message,
    //   }),
    // })
    // const result = await response.json()
    // // Navigate
    // navigate(`/show-lolly?${result._id}`)
    navigate(`/show-lolly?306356893708714566`)
  } catch (error) {
    console.log(error)
  }
}
