import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import RecipeService from './services/recipe.service';

import RecipeInput from './components/RecipeInput';
import RecipeTable from './components/RecipeTable';

import { Recipe } from './model/recipe';




function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    const recipes = await RecipeService.fetchRecipes();
    setRecipes(recipes);
  }

  async function onRecipeCreate(name, content) {
  // create the task
  const recipe = new Recipe(Math.random(), name, content)
  /*
  const recipe = await RecipeService.createRecipe(
    new Recipe(null, name, content)
  );*/

  // add the task to the tasks state
  setRecipes([...recipes, recipe]);
  console.log(recipes)
 }

 async function onRecipeRemove(recipeId) {
  //await RecipeService.deleteRecipe(recipeId);

  // update the tasks state with the filtered tasks
  setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
}

  return (
    <div className='container my-4'>

      <div className='card card-body text-center'>

        <h1>Recipe</h1>

        <hr></hr>

        <RecipeInput onRecipeCreate={onRecipeCreate} />

        <p>Recipe List</p>

        <RecipeTable
          onRecipeRemove={onRecipeRemove}
          recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
