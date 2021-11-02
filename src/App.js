import './App.css';
import Listar from "./components/list";
import editarEmpl from "./components/editar";
import Formulario from "./components/form";

import { Route,BrowserRouter as Router,Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="nav navbar-nav">
             <Link className="nav-item nav-link active" to={"/"}>CRUD Empleado</Link>
             
             
         </div>
    </nav>
    <div className="container">
    
     <Route exact path="/" component={Listar}></Route>
     
     <Route path="/edituser/:id" component={editarEmpl}></Route>
     <Route path="/add" component={Formulario}></Route>
     
    </div>


    </Router>
  );
}

export default App;
