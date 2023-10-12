import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={SearchBar} />
        <Route path="/recipes" component={RecipeList} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
