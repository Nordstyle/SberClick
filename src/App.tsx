import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { Header } from './components/Header/Header';
import { theme } from './theme';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700,900'],
  },
});

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route path="/">hello world </Route>
        </Switch>
      </Router>
    </Container>
  </ThemeProvider>
);

export default App;
