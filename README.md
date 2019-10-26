![](https://i.imgur.com/4q3305b.png)

## Slides

Please see my slidedeck for an overview of what GraphQL is, before 
going through the demo

https://slides.com/vincentntang/fullstack-graphql-nodejs-react#/

## Component Architecture

1. MovieList - A list of all movies are shown
2. MovieCreate - Create movie form
3. Movie - A detailed movie item

## Branch structure

* 01-frontend-only -> only has the frontend, starting point of demo
* 02-frontend-backend-graphql -> same frontend, but finished standalone backend
* 03-connected-frontend-backend -> same as master, fullstack integration

## Quickstart

Globally install these dependencies anywhere

```
npm install -g nodemon
```

To install this repo, install the frontend and run

```
cd frontend
npm install
npm run start
```

In a seperate terminal, install backend and run

```
cd backend
npm install
npm run start
```

## Sample Queries/Mutation

Once the backend is running, go to:

`localhost:4000/graphql` and try running these queries/mutations

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
