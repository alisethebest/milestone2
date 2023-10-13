import React from "react";

const UserProfile = ({ savedRecipes }) => {
  return (
    <div>
      <h1>Your saved recipes</h1>
      {savedRecipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
