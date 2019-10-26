## Installation steps from the very beginning

Step by step instructions on how everything was made

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