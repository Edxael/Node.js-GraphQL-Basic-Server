const graphql = require('graphql')
const { GraphQLObjectType , GraphQLString, GraphQLInt, GraphQLSchema } = graphql
const axios = require('axios')



const UserType = new GraphQLObjectType({
  name: 'User',
  fields:{
    id: { type: GraphQLString },
    name: { type: GraphQLString } ,
    from: { type: GraphQLString },
    year: { type: GraphQLInt },
    pic: { type: GraphQLString }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve( parentValue, args ) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then( (resp)=>{ return resp.data } )    // { data: { id: x, ....... } }
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
