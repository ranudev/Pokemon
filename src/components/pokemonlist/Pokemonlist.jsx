import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import "./Pokemonlist.css";
const Pokemonlist=()=>{
const [pokemonlist, SetPokemnlist] =useState([]);
const [isLoading, SetIsLoading] = useState(true);
//use promises
async function downloadpokemn(){

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon') // this downloads list of 20 pokemons
   // console.log(response.data);
    const pokemomResult =response.data.results;//we get the array of pokemon from results
    //iterating the array of pokemons,& using their url to cretate an aray of promises.
    const pokemomResultPromise = pokemomResult.map((pokemon)=> axios.get(pokemon.url));
    //passing the promise array to axios.all
    const pokeMonData= await axios.all(pokemomResultPromise);//aray of pokemon detail data
    //console.log(pokeMonData)
    //iterate on the data of each pokemon & extarct id,name ,image ,typres
    const res =  pokeMonData.map((pokeData)=>{
  const pokemon = pokeData.data;
  return {
           id :pokemon.id,
          name: pokemon.name,
           image:(pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default :pokemon.front_shiny ,
         types: pokemon.types
        }

    });
    console.log(res);
    SetPokemnlist(res);
    SetIsLoading(false);
}

useEffect (()=>{

    downloadpokemn();
}, [ ]);

    return(
    
    <div className="pokemon-list-wrapper">   
         List pokeo 
        
         {(isLoading)? 'Loading....' :
         
         pokemonlist.map((p)=> <Pokemon name={p.name} image ={p.image} key ={p.id}/>
         )}
        
        
        
     </div>
    )
}
export default Pokemonlist;

