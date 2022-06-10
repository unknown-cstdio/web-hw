import React from 'react'

export default function RecipeTable(props) {


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.recipes.map((recipe) =>
              <tr key={recipe.id}>
                <td>{recipe.name}</td>

                <td>{recipe.content}</td>

                <td>
                  <div onClick={(e) => props.onRecipeRemove(recipe.id)}>
                    <i className="bi bi-trash">x</i>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}