const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs')
const moviesData = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8'))
const quotesData = JSON.parse(fs.readFileSync('./data/quotes.json', 'utf8'))

const resolvers = {
  Mutation: {
    createMovie:(_,{input}) => {
      // let result = db.movies.create({...input})
      // return result
      input.movie_id = Math.random().toString(36).substring(7); // random string
      return input;
    }
  },
  Query: {
    movies: () => {
      return moviesData
    },
    movie: (_, {movie_id}) => {
      return moviesData.find(x => x.movie_id === movie_id)
    }
  },
  Movie: {
    quotes: (movie) => {
      return quotesData.filter(y => y.movie_id === movie.movie_id)
    }
  }
}

const typeDefs = gql`
  type Mutation {
    createMovie(input: MovieInput): Movie
  }
  type Query {
    movies: [Movie]
    movie(movie_id: ID): Movie
  }
  type Movie {
    movie_id: ID,
    title: String,
    year: String,
    plot: String,
    poster: String,
    rated: String,
    runtime: String,
    quotes: [Quote],
  }
  type Quote {
    quote_id: ID,
    description: String,
  }
  input MovieInput {
    title: String,
    year: String,
    plot: String,
  }
`;

const server = new ApolloServer({ typeDefs,resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});