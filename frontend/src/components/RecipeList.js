import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from an API
    axios.get("API_URL_HERE").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
