## Quickstart

To install this repo, install the frontend and run

```
cd frontend
npm install
npm run start
```

Install backend and run

```
cd backend
npm install
npm run start
```

## Installation steps from the very beginning

```
npm install -g create-react-app
npx create-react-app frontend
cd ..
mkdir backend
cd backend
npm init
npm install apollo-server graphql
```

Create the `server.js` file with typedef and resolvers

```
npm run start
```

navigate to `localhost:4000/graphql` to see the playground

to connect the frontend with graphql
```
cd frontend
npm install apollo-boost @apollo/react-hooks graphql
# https://www.apollographql.com/docs/react/get-started/
```

add the apollo-client to frontend

## Sample Queries/Mutation

#### Query a list of movies + their quotes
```
query {
  movies {
    movie_id
    title
    year
    plot
    poster
    quotes {
      quote_id
      description
    }
  }
}
```

#### Query a specific movie + their quotes
```
query Movie($movie_id: ID){
  movie(movie_id: $movie_id) {
    title
    year
    plot
    poster
    quotes {
      quote_id
      description
    }
  }
}
```
Query variables
```
{
  "movie_id": "tt0468569"
}
```

#### Mutation - Create a movie with a list of inputs

```
mutation CreateMovie($input: MovieInput!) {
  createMovie(input: $input) {
    movie_id
    title
    year
    plot
  }
}
```
Query Variables
```
{
  "input": {
    "title": "The Water Boy"
    "year": "1998"
    "plot": "Adam Sandler is no longer just a waterboy"
  }
}
```
