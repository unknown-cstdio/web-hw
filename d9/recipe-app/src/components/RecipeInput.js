import React, { useState } from 'react';

export default function RecipeInput(props) {

  const [recipe, setRecipe] = useState("");
  const [name, setName] = useState("");

  function onRecipeFromSubmit(e) {
    e.preventDefault();

    props.onRecipeCreate(name, recipe);
    setRecipe('');
    setName("")
  }

  return (
    <div>
      <form onSubmit={onRecipeFromSubmit}>
        <div className="input-group mb-3">
            <input  
            value = {name} 
            onChange = {(e) => setName(e.target.value)} 
            type="text" 
            className='form-control' 
            placeholder='name'>

            </input>
          <input
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}

            type="text"
            className="form-control"
            placeholder="Recipe"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit" >
            +
          </button>
        </div>
      </form>

    </div>
  )
}