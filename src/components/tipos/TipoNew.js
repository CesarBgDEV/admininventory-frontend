import React, {useState, useEffect} from 'react';
import {crearTipoEquipo} from '../../services/tipoEquipoService';
import Swal from 'sweetalert2';

export const TipoNew = ({handleOpenModal, listarTipos}) => {

  const [valoresForm, setValoresForm] = useState({});
    const {nombre= '', estado = ''} = valoresForm;

    const handleOnCHange = ({ target }) => {
        const{name, value} = target;
        setValoresForm({...valoresForm, [name]:value})//spread
    }

    const hadleOnSubmit = async (e) =>{
        e.preventDefault();
        const tipo= {
            nombre, estado
        };
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });

            Swal.showLoading();
            const {data} = await crearTipoEquipo(tipo);
            Swal.close();
            handleOpenModal();
            listarTipos();
            
        } catch (error) {
            Swal.close();
            let mensaje;
            if(error && error.response && error.response.data){
                mensaje = error.response.data
            }else{
                mensaje = 'Ocurrio un error, por favor intente de nuevo';
            }
        }
    }

  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3> Nuevo Tipo </h3>
              <i className='fa-solid fa-xmark' onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <hr/>
          </div>
        </div>
        <form onSubmit= {(e) => hadleOnSubmit(e)}>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label className="form-label">Nombre</label>
                <input type="text" name='nombre'
                  required
                  value={nombre}
                  onChange= { (e) => handleOnCHange(e)}
                  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Estatus</label>
                <select className='form-select'
                  name='estado'
                  value={estado}
                  required
                  onChange={(e) => handleOnCHange(e)}>
                    <option value="">-- SELECCIONE --</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <button className="btn btn-primary">Guardar</button>
                            
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
