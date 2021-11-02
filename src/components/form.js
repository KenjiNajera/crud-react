import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link} from "react-router-dom";
import _baseUrl from "../service/api";
import Axios from "axios";

const Formulario = ({history})=> {
  
 
  
  let initValues={
    nombre: "",
      apellido: "",
      correo: "",
      fechaIngreso: new Date().toISOString().split("T")[0],
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <br></br>
            <Formik
            
              initialValues={initValues}
              //Validaciones
              validate={(valores) => {
                let errores = {};

                // Validacion nombre
                if (!valores.nombre) {
                  errores.nombre = "Por favor ingresa un nombre";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre =
                    "El nombre solo puede contener letras y espacios";
                }

                if (!valores.apellido) {
                  errores.apellido = "Por favor ingresa un apellido";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                  errores.apellido =
                    "El apelldio solo puede contener letras y espacios";
                }

                // Validacion correo
                if (!valores.correo) {
                  errores.correo = "Por favor ingresa un correo electronico";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.correo
                  )
                ) {
                  errores.correo =
                    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
                }

                return errores;
              }}
              //Enviar Formulario
              
              onSubmit={(valores) => {
                Axios.post(_baseUrl, valores).then(history.push("/"));
              }}

            >
              {({ errors, values }) => {
                
                
                return(
                <div className="card bg-light">
                <div className="card-header">Empleado</div>
                <div className="card-body">
                  <Form className="form">
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <Field
                        className="form-control"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="John"
                      />
                      <ErrorMessage
                        name="nombre"
                        component={() => (
                          <div className="alert alert-dismissible alert-danger">
                            <strong>Oh alto!</strong> {errors.nombre}
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido">apellidos</label>
                      <Field
                        className="form-control"
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Doe"
                      />
                      <ErrorMessage
                        name="apellido"
                        component={() => (
                          <div className="alert alert-dismissible alert-danger">
                            <strong>Oh alto!</strong> {errors.apellido}
                          </div>
                        )}
                      />
                    </div>

                    <div>
                      <label htmlFor="correo">Correo</label>
                      <Field
                        className="form-control"
                        type="text"
                        id="correo"
                        name="correo"
                        placeholder="correo@correo.com"
                      />
                      <ErrorMessage
                        name="correo"
                        component={() => (
                          <div className="alert alert-dismissible alert-danger">
                            <strong>Oh alto!</strong> {errors.correo}
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <label htmlFor="fechaIngreso">Fecha de ingreso</label>
                      <Field
                        type="date"
                        className="form-control"
                        id="FechaIngreso"
                        name="fechaIngreso"
                        value={values.fechaIngreso}
                      />
                    </div>

                    <button type="submit" className="btn btn-success">
                    <i className="fas fa-check"></i>
                    </button>
                    <Link to={"/"} className="btn btn-danger">
                    <i className="fas fa-times"></i>
                    </Link>
                  </Form>
                </div>
                <div className="card-footer text-muted"></div>
              </div>
              );
                
}}
            </Formik>
            <br></br>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );





  

  
};

export default Formulario;
