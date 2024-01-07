import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Pokemon from "../pokemonlist/Pokemon";
//import Pokedex from "../Pokedex/Pokedex";
import axios from "axios";
import"./PokemonDetail.css";

const PokemonDetaila=()=>{

    const {id }= useParams();
    const [pokedex,SetPokedex] = useState({});
    async function download(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        //console.log(response.data)
        SetPokedex({
            name: response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })
    }


    useEffect(()=>
    {
        download();
    }, []);



    return(
        <div className="pokemon-detail-wrapper">
        <div className="pokemon-details-name">Name: {pokedex.name}</div>
        <img className="pokemon-details-image" src={pokedex.image} alt="" />
        <div>Height:{pokedex.height}</div>
        <div>Weight:{pokedex.weight}</div>
        <div>
            {pokedex.types && pokedex.types.map((t)=><div key={t}>{t}</div>)}
        </div>
        </div>
    )
}
export default PokemonDetaila;