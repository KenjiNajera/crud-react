import React from "react";
import { Link } from "react-router-dom";
import _baseUrl from "../service/api";
import Axios from "axios";
import Swal from "sweetalert2";
//import getUsuarios from "../models/getUsuarios.js";

class list extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, empleados: [] };
    //    this.getUsuarios();
  }

  cargarDatos() {
    //getUsuarios().then(res=>{this.setState({ datosCargados: true, empleados: res });});
    Axios.get(_baseUrl).then((res) => {
      this.setState({ datosCargados: true, empleados: res.data });
    });
  }

  borrarRegistro = (id) => {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar este usuario?",
      text: "No se puede recuperar",
      showDenyButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "Recargando datos espere...", "success");
        Axios.delete(_baseUrl + id + "/").then(setTimeout(() => {
          window.location.reload()
        }, 1500));
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, empleados } = this.state;

    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <>
        <br></br>
        <div className="card">
          <div className="card-header"  >
          <div className="row">
    <div className="col">
    <h4>Lista Empleado</h4>
    </div>
    <div className="col" align="right">
    <Link className="btn btn-success" to={"/add"}>
            <i className="fas fa-plus"></i>
            </Link>
    </div>
  </div>
          
          
            
          </div>
          <div className="card-body">
            
            <table className="table">
              <thead>
                <tr className="table-Light">
                  
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Fecha Ingreso</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.correo}</td>
                    <td>{empleado.fechaIngreso}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                        <Link
                          className="btn btn-warning"
                          to={"/edituser/" + empleado.id}
                        >
                          <i className="fas fa-pen"></i>
                          
                        </Link>
                        
                        <button
                          className="btn btn-danger"
                          onClick={() => this.borrarRegistro(empleado.id)}
                        >
                         <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
        <br></br>
        </>
      );
    }
  }
}

export default list;
