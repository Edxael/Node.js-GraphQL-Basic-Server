const graphql = require('graphql')
const { GraphQLObjectType , GraphQLString, GraphQLInt, GraphQLSchema } = graphql
const urlSrc = 'https://raw.githubusercontent.com/Edxael/Swap-Characters/master/src/comps/jsonData/data.json'



const UserType = new GraphQLObjectType({
  name: 'User',
  fields:{
    id: { type: GraphQLString },
    firstName: {type: GraphQLString } ,
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve( parentValue, args ) {
        return _.find(users, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })


// --------- Temp DataBase ----------

// const _ = require('lodash')

// const users = [
//   { id: "1", firstName: "Hyolin", age: 27 },
//   { id: "2", firstName: "Soyu", age: 28 },
//   { id: "3", firstName: "Dawsom", age: 25 },
//   { id: "4", firstName: "Bora", age: 26 },
//   { id: "5", firstName: "Kodoma", age: 21 },
//   { id: "6", firstName: "Hamasaki", age: 36 }
// ]
