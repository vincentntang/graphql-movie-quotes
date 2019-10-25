const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs')
const moviesData = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8'))
const quotesData = JSON.parse(fs.readFileSync('./data/quotes.json', 'utf8'))

const resolvers = {
  Query: {
    movies: () => moviesData,
    // movie: (_, {movie_id}) => moviesData.find(x.id=>)
  }
}

const typeDefs = gql`
  type Query {
    movies: [movie]
    movie(movie_id: ID): movie
  }

  type movie {
    movie_id: ID,
    title: String,
    year: String,
    plot: String,
    poster: String,
    rated: String,
    runtime: String,
    quotes: [quote],
  }

  type quote {
    quote_id: ID,
    description: String,
  }
`;

const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
