const graphql = require('graphql')
const { GraphQLObjectType , GraphQLString, GraphQLInt, GraphQLSchema } = graphql
const axios = require('axios')



const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields:{
    id: { type: GraphQLString },
    name: { type: GraphQLString } ,
    race: { type: GraphQLString },
    employer: { type: GraphQLString },
    abilities: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
    pic: { type: GraphQLString },
    gameId: { type: GraphQLString }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLString } },
      resolve( parentValue, args ) {
        return axios.get(`http://localhost:3000/characters/${args.id}`)
          .then( (resp)=>{ return resp.data } )    // { data: { id: x, ....... } }
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })

// http://localhost:3000/characters
