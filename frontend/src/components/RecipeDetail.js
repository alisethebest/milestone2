import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Steps: {recipe.steps}</p>
    </div>
  );
};

export default RecipeDetail;
