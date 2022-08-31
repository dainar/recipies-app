import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "3d58bb96b88883813e6d4c4893f050f1";

const mapState = (state) => {
  return {
      ediciones: state.admin.ediciones,
  };
}

const mapDispatch = (dispatch) => {
  return {
      getRes: (callback)=>{
          dispatch(getRecipes(callback));
      }
  };
}

class App extends Component {
  state = {
    recipes: []
  }

  
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);

    this.props.geRes(function(){
           
      
  }.bind(this));


  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
    
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
   
  }
  render() {
    
    return (
      <div className="App">
      
        <Form getRecipe={this.getRecipe} />
        {
          this.state.recipes ? (<Recipes recipes={this.state.recipes} />) : ''
        
      }
      </div>
    );
  }
}

export default App;