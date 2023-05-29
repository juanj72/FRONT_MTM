

export const DetailModal=({paciente})=>{
    let data ={}

   if(paciente!=null){
    // console.log(paciente)
    data = paciente
    console.log(data)
   }

    return(
        <>
        <h1>Detalle Modal</h1>
        {data.nombre}
        {data.apellido}
     

        
        </>
    )
}