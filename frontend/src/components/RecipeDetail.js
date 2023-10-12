import React from "react";

function RecipeDetail({ match }) {
  // Fetch recipe details using match.params.id or accept as a prop

  const handleSave = () => {
    // POST request to your backend to save this recipe
  };

  return (
    <div>
      <h1>Recipe Detail for {match.params.id}</h1>
      {/* Render other details here */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default RecipeDetail;
