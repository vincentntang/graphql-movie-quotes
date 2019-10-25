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

Create the `server.js` file:

```
npm run start
```

navigate to `localhost:4000/graphql` to see the playground

## Sample Queries

Grab list of movies
```
query {
  movies {
    title
  	year
    plot
  }
}
```

Grab a specific movie
```
query {
  movie(movie_id: "tt0468569") {
    title
  	year
    plot
  }
}
```

## Sample Queries with Object Resolvers

Grab a list of movies, and all their respective quotes
```
query {
  movies {
    title
  	year
    plot
    quotes {
      quote_id
      description
    }
  }
}
```

## Sample Mutation with Input Object

Create a movie with a list of variables
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
Variables
```
{
  "input": {
    "title": "The Water Boy"
    "year": "1998"
    "plot": "Adam Sandler is no longer just a waterboy"
  }
}
```
