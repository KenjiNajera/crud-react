import React from "react";
import { Link } from "react-router-dom";
import _baseUrl from "../service/api";
import Axios from "axios";

class editUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      empleado: [],
    };
  }
  cambioValor = (e) => {
    const state = this.state.empleado;
    state[e.target.name] = e.target.value;
    this.setState({ empleado: state });
  };
  enviarDatos = (e) => {
    e.preventDefault();
    const { id, nombre, apellido, correo, fechaIngreso } = this.state.empleado;

    var data = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      fechaIngreso: fechaIngreso,
    };
    Axios.put(_baseUrl + id + "/", data).then(this.props.history.push("/"));
  };

  componentDidMount() {
    Axios.get(_baseUrl + this.props.match.params.id + "/").then((res) => {
      this.setState({ datosCargados: true, empleado: res.data });
    });
  }
  render() {
    const { datosCargados, empleado } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <>
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-6">
                <br></br>
                <div className="card">
                  <div className="card-header">Editar Empleado</div>
                  <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                      <div className="form-group">
                        <label htmlFor="">Clave:</label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={empleado.id}
                          name="id"
                          id="id"
                          aria-describedby="helpId"
                          placeholder=""
                        ></input>
                        <small id="helpId" className="form-text text-muted">
                          Clave
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="">Nombre</label>
                        <input
                          type="text"
                          name="nombre"
                          id="nombre"
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          value={empleado.nombre}
                          onChange={this.cambioValor}
                          required
                        ></input>
                        <small id="helpId" className="text-muted">
                          Escribe el nombre del empleado
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="">Apellido</label>
                        <input
                          type="text"
                          name="apellido"
                          id="apellido"
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          value={empleado.apellido}
                          onChange={this.cambioValor}
                          required
                        ></input>
                        <small id="helpId" className="text-muted">
                          Escribe el Apellido
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="">Correo</label>
                        <input
                          type="correo"
                          name="correo"
                          id="correo"
                          value={empleado.correo}
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={this.cambioValor}
                          required
                        ></input>
                        <small id="helpId" className="text-muted">
                          Escribir correo
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="">fechaIngreso</label>
                        <input
                          type="date"
                          name="fechaIngreso"
                          id="fechaIngreso"
                          value={empleado.fechaIngreso}
                          onChange={this.cambioValor}
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        ></input>
                        <small id="helpId" className="text-muted">
                          Ingresar Fecha
                        </small>
                      </div>

                      <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">
                        <i className="fas fa-check"></i>
                        </button>
                        <Link to={"/"} className="btn btn-danger">
                        <i className="fas fa-times"></i>
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-muted"></div>
                </div>
                <br></br>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default editUser;
