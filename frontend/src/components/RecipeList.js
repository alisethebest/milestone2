import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/recipes?query=${searchQuery}`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
