import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import routes from './routes';
import { Header } from './components/Header/Header';
import { theme } from './theme';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700,900'],
  },
});

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 30px auto;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Router>
        <Header />
        <Switch>
          {routes.map(({ path, name, Component }) => (
            <Route
              exact
              path={path}
              key={name}
              render={(props) => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) => path.replace(`:${param}`, props.match.params[param]),
                          path
                        )
                      : path,
                    ...rest,
                  }));

                return <Component crumbs={crumbs} />;
              }}
            />
          ))}
        </Switch>
      </Router>
    </Container>
  </ThemeProvider>
);

export default App;
