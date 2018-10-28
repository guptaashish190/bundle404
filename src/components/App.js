import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Intro from './Bundle/index';
import CreateBundle from './CreateBundle';

const client = new ApolloClient({
  uri: 'https://bundle-sudo.herokuapp.com/v1alpha1/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        'X-Hasura-Access-Key': 'sudo-bundle',
        'Content-Type': 'application/json',
      },
    });
  },
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Intro} />
            <Route exact path="/create" component={CreateBundle} />
          </div>
        </Router>
      </ApolloProvider >
    );
  }
}

export default App;
