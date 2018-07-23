import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from './api';
import { LoadHtml } from './loader/loader';

class RecipePage extends Component {

  state = {
    activeRecipe: [],
  };


  componentDidMount = async () => {

    const { recipeTitle } = this.props.location.state;

    const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeTitle}`);

    const data = await res.json();
    this.setState({ activeRecipe: data.recipes[0] });
  }

  render() {
    const recipe = this.state.activeRecipe;

    const style = {
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <div className="container mb-5" style={style}>
        {
          recipe.length !== 0 ? (
            <div style={{ display: 'inline-block' }}>
              <img src={recipe.image_url} className="img-fluid rounded mt-4 mb-4" alt={recipe.title} />
              <h4>{recipe.title}</h4>
              <p>
                <strong>Publisher: </strong>
                <span className="text-secondary">{recipe.publisher}</span>
              </p>
              <p>
                <strong>Website: </strong>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </p>
              <Link to="/">
                <button className="btn btn-outline-danger" type="button">
                  <strong className="text-dark">Go Home</strong>
                </button>
              </Link>
            </div>
          ) : (
            <LoadHtml />
          )
        }
      </div>
    );
  }
}

export default RecipePage;
