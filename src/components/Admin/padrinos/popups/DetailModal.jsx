import * as Facons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai'


export const DetailModal = ({ padrino }) => {
    let data = {}

    if (padrino != null) {
        // console.log(paciente)
        data = padrino
        console.log(data)
    }

    return (
        <>
            <h1><Facons.FaUserAlt /> {data.nombre} </h1>

            <div className='alert alert-secondary' > <h2><b>Código:</b> {data.id}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Apellido:</b> {data.apellido}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Nui:</b> {data.nui}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Fecha de tratamiento:</b> {data.fecha_inicio_tratamiento}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Fecha de ingreso:</b> {data.fecha_ingreso}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Seguro funebre:</b> {data.seguro_funebre}</h2>  </div>
            <div className='alert alert-secondary' > <h2><b>Correo:</b> {data.correo}</h2>  </div>

           


        </>
    )
}