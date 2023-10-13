import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe Search App</h1>
        </header>
        <SearchBar onSearch={handleSearch} />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/recipe/:id">
            <RecipeDetail />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/">
            <RecipeList searchQuery={searchQuery} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
