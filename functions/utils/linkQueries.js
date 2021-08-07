const CREATE_LOLLY = `
mutation($topColor: String!, $middleColor: String!, $bottomColor: String!, $to: String!, $from: String!, $message: String!){
    createLolly(data:{topColor:$topColor, middleColor:$middleColor, bottomColor:$bottomColor, to:$to, from:$from, message:$message}){
      _id
    }
  }
`

const GET_LOLLY_BY_ID = `
query($id: ID!){
  findLollyByID(id:$id){
    topColor
    middleColor
    bottomColor
    to
    from
    message
  }
}
`

const GET_ALL_LOLLIES = `
query{
  allLollies{
    data{
      _id
       topColor
    middleColor
    bottomColor
    to
    from
    message
    }
  }
}`

module.exports = {
  CREATE_LOLLY,
  GET_LOLLY_BY_ID,
  GET_ALL_LOLLIES,
}
