import { render, screen,fireEvent } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect' 
import React from 'react' 
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Form from './Form.js'

test('renderizar formulario', () => {
   
   render(<Router><Form/></Router>)
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

