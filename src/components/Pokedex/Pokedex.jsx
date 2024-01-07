import Pokemonlist from "../pokemonlist/Pokemonlist";
import Search from "../search/Search";
import "./Pokedex.css";
const Pokedex=()=> {

    return(
        <div className="pokedex-wrapper">
            
        <Search/>
         <Pokemonlist/>

        </div>
    )
}
export default Pokedex;