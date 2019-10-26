import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
// import ApolloClient from 'apollo-boost';
// import { gql } from "apollo-boost";


// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));