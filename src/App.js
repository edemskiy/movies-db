import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movie_id" component={MoviePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
