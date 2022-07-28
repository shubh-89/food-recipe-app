import './App.css';
import "./key.js";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from './RecipeTile';


function App() {

  const[query, setquery] = useState("");
  const[recipes, setrecipes] = useState([]);


  const YOUR_APP_ID = "53329683";
  const YOUR_APP_KEY = "71fd215feb21f7187e310cec64f1c571";
 
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function getRecipes(){
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);
  } 
  
  const onSubmit = e => {
    e.preventDefault();
    getRecipes();
  }
  
  return (
    <div className="app">
        <h1 onClick={getRecipes}>Food Recipe App🍔</h1>
        <form className="app_searchForm" onSubmit={onSubmit}> 
          <input 
          type = "text" 
          className="app__input"
          placeholder = "enter ingridient"
          value={query} 
          onChange = {(e) => setquery(e.target.value)}
          />
          <input className= "app__submit" type="submit" value="Search" />

        </form>
        
        <div className="app__recipes">
          {recipes.map((recipe) =>{
             return <RecipeTile recipe={recipe}/>;
          })}
        </div>
    </div>
  );
}

export default App;
