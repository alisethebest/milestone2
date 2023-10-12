import React, { useEffect, useState } from "react";

function UserProfile() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Fetch saved recipes from the backend
    // setSavedRecipes(response.data)
  }, []);

  const handleDelete = (recipeId) => {
    // Delete request to your backend
  };

  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name}{" "}
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
