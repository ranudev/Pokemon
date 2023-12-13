import Pokemonlist from "../pokemonlist/Pokemonlist";
import Search from "../search/Search";
import "./Pokedex.css";
const Pokedex=()=> {

    return(
        <div className="pokedex-wrapper">
            <h1 id="pekedex-head"> Pokedex</h1>
        <Search/>
         <Pokemonlist/>

        </div>
    )
}
export default Pokedex;