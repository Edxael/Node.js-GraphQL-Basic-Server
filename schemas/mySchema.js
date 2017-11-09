const graphql = require('graphql')
const { GraphQLObjectType , GraphQLString, GraphQLInt, GraphQLSchema, GraphQLListss } = graphql
const axios = require('axios')

// const GameType = new GraphQLObjectType({
//   name: 'Game',
//   fields: {
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     year: { type: GraphQLInt },
//     genres: { type:  }
//   }
// })

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields:{
    id: { type: GraphQLString },
    name: { type: GraphQLString } ,
    race: { type: GraphQLString },
    employer: { type: GraphQLString },
    abilitiy: { type: GraphQLString },
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
