import React from 'react';

import { Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const API_KEY = "763500038b6796b89fb79912d902d9fe";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }


  render() {
    let history = createBrowserHistory();

    {console.log(history)}
    const recipe = this.props.location.state.recipe;
    return (
      <div className="container right">
        { this.props.location.state.recipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Autor: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Sitio Web: 
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Regresar</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;