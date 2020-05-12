import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Leave from './Leave';
import Live from './Live';
import Change from './Change';
import Connect from './Connect';

export default function App() {
  return (
    <>
      <Header />
      <Content>
        <Switch>
          <Route path="/odejdi">
            <Leave />
          </Route>
          <Route path="/zij">
            <Live />
          </Route>
          <Route path="/zmen">
            <Change />
          </Route>
          <Route path="/spoj-se">
            <Connect />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </>
  );
}
