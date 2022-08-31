import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Recipes extends Component {
  state = {
    activeRecipe: [],
    recipe: [],
    title: ''
  };

 handleClick =  async (title) => {
  const API_KEY = "4dd694a5b3029d410adcd47af975f66c";
  console.log(this.state.activeRecipe.length);
  if(this.state.activeRecipe.length==0  ){
  const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
  
  const res = await req.json();
  this.setState({ activeRecipe: res.recipes[0] });
  const rec=JSON.stringify(res.recipes[0])
  
}
}
componentDidMount = () => {
  const json = localStorage.getItem("recipes");
  const recipes = JSON.parse(json);
  if(recipes.length>0){
  this.setState({ recipe: this.props.recipes });
}
}

componentDidUpdate(prevProps) {
  if(prevProps.recipe !== this.props.recipe){
    console.log('hola');
    console.log(prevProps.recipe);
  this.setState({recipe: this.props.recipes});
}else{ }
}
render() {
  console.log(this.props.recipes);
  return (
  <div className="container left">
    <div className="row">
    
    { this.props.recipes.map(recipe => {
       return (
        <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
            <img 
            
              className="recipe__box-img" 
              src={recipe.image_url} 
              alt={recipe.title}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Autor: <span>
                  { recipe.publisher }
                </span></p>
              </div>
              <button onClick={() => this.handleClick(recipe.title)}  className="recipe_buttons">
              
                <Link  to={{ 
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe}
                }}>Ver Receta</Link>
                
              </button>
             
          </div>
        </div>
       );
    })}
    </div>
  </div>
);
  };
};

export default Recipes;