const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');

const typeDefs = gql`
  type Query {
    movies: [movie];
    movie(movie_id: ID): movie
    quotes: [quote]: quote;
    quote: quote;
  }

  type movie {
    imdbId: ID,
    Title: String,
    Year: String,
    Plot: String,
  }

  type quote {
    quotesID: ID,
  }
`;

const server = new ApolloServer({ typeDefs });