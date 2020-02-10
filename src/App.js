import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import { NavBar } from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/">
          <NavBar />
          <Route path="/media/:movie_type/:movie_id" component={MoviePage} />
          <Route path="/person/:person_id" component={PersonPage} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
