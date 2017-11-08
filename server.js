const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const MySchema = require('./schemas/mySchema.js')

app.use('/graphql', expressGraphQL({
  schema: MySchema,
  graphiql: true
}))



app.listen(4000, (err)=>{
  if(err){ throw err }
  console.log(" \n Server Up and Running....")
})
