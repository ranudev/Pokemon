//import logo from './logo.svg';
import './App.css';
//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import CustomeRoute from "./components/routes/CustomeRoute";

function App() {
  return (
    <div className="outerpokedex">
      <h1 id="pekedex-head"><Link to="/">Pokedex </Link></h1>
    
  
  <CustomeRoute/>
 
    </div>
  );
}

export default App;
