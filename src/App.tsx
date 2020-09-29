import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/">hello world </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
