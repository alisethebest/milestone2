import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
  // Declare a state variable to hold the recipes
  const [recipes, setRecipes] = useState([]);

  // Function to fetch recipes from the backend
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/recipes");
      setRecipes(response.data); // Update the recipes state variable with the fetched data
    } catch (error) {
      console.error("There was an error fetching the data", error);
    }
  };

  // useEffect to call fetchRecipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
