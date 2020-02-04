import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { PersonPage } from "./pages/PersonPage";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/">
          <NavBar />
          <Route path="/movies/:movie_id" component={MoviePage} />
          <Route path="/persons/:person_id" component={PersonPage} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
