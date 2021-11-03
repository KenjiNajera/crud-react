import { render, screen,fireEvent } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect' 
import React from 'react' 
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Formulario from "../src/components/Form.js";
// con que comando lo ejecutas? npm test dame permiso para escribir  como se hace? XD ejecuta el comandoxd
//ejecutalo asixd
test('renderizar formulario', () => {
   
   render(<Router><Formulario/></Router>)
   const inputNombre =screen.getByLabelText(/Nombre/i)
   const inputApellido =screen.getByLabelText(/Apellido/i)
   const inputCorreo =screen.getByLabelText(/Correo/i)
   const inputFechaIngreso =screen.getByLabelText(/Fecha de ingreso/i)
   const btnSub= screen.getByRole('button',{value: '<i className="fas fa-check"></i>' })
   fireEvent.change(inputNombre, {target:{ value:"kenji"}})
   fireEvent.change(inputApellido, {target:{ value:"Najera"}})
   fireEvent.change(inputCorreo, {target:{ value:"kenji@test.com"}})
   fireEvent.change(inputFechaIngreso, {target:{ value: new Date().toISOString().split("T")[0] }})
   fireEvent.click(btnSub)
});

