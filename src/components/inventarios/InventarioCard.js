import React from 'react'
import { Link } from 'react-router-dom';

export const InventarioCard = (props) => {
    const {inventario} = props;
    
  return (
                <div className="col">
                    <div className="card">
                      <img src={inventario.foto} className="card-img-top img-card" alt='https://www.americares.org/wp-content/uploads/xylem.gif' />
                      <div className="card-body">
                            <h5 className="card-title">Características</h5>
                            <hr />
                            <p className="card-text">{`Activo Fijo: ${inventario.af}`}</p>
                            {/* <p className="card-text">{`Marca: ${inventario.marca.nombre}`}</p> */}
                            <p className="card-text">{`Empleado: ${inventario.usuario.nombre}`}</p>
                            <p className='card-text'>
                                <Link to={`inventarios/edit/${inventario._id}`}>Editar</Link>
                            </p>
                            <p>
                                <Link to={`inventarios/empleado/${inventario.usuario._id}`}>Ver mas...</Link>
                            </p>
                      </div>
                    </div>
                </div>
  )
}

