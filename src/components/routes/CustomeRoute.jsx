import { Route, Routes } from "react-router-dom";
import Pokedex from "../Pokedex/Pokedex";
import PokemonDetaila from "../PokemonDetails/PokemonDetaila";



const CustomeRoute=()=>{

return(
    <Routes>

<Route path="/" element={<Pokedex/>}></Route>
<Route path="/Pokemon/:id" element={<PokemonDetaila/>}></Route>
    </Routes>

    )

}
export default CustomeRoute;
