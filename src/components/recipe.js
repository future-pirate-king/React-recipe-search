import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './loader/loader';

const Recipe = (props) => {
  return (
    <div className="container">
      <div className="row">
        {
          props.recipes.map(recipe => {
            return (
              <div key={recipe.recipe_id} className="col-md-4 mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={recipe.image_url} alt={recipe.title} style={{ maxHeight: 190 }} />
                  <div className="card-body">
                    <h5 className="card-title text-danger">
                      {
                        recipe.title.length > 20 ? `${recipe.title.substring(0, 22)}...` : recipe.title
                      }
                    </h5>
                    <p className="card-text">
                      <strong>Publisher: </strong>
                      <span className="card-subtitle mb-2 text-muted">
                        {
                          recipe.publisher.length > 15 ? `${recipe.publisher.substring(0, 20)}...` : recipe.publisher
                        }
                      </span>
                    </p>
                    <Link to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipeTitle: recipe.title },
                    }}>
                      <button className="btn btn-outline-danger" type="button">
                        <strong className="text-dark">View Recipe</strong>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Loader(Recipe);
