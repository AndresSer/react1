import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

//forma de llamar nuestro componentes 
// {Header()} <Header></Header>

function App() {

  // los hook siempre se deben declarar fuera del return
  const [mostrarFormulario,actualizarmostrar] = useState(false) // moestrarFomrulario = true
  //arreglo colaboradores
  const [colaboradores,actualizarcolaboradores]= useState([
    {
      id: uuidv4(),
      equipo:"Programación",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Andres serrano ",
      puesto:"Bernardo Feria",
      Fav: true,
    },
    {
      id: uuidv4(),
      equipo:"UX y Diseño",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Andres serrano",
      puesto:"Diseñador grafico",
      Fav: false,
    },
    {
      id: uuidv4(),
      equipo:"UX y Diseño",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Andres serrano ",
      puesto:"Luisa Amaya ",
      Fav: false,
    },
    {
      id: uuidv4(),
      equipo:"UX y Diseño",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Javier Leon ",
      puesto:"Diseñador grafico ",
      Fav: false,
    },
    {
      id: uuidv4(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Andres serrano ",
      puesto:"Diseñador grafico ",
      Fav: false,
    },
    {
      id: uuidv4(),
      equipo:"Móvil",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Jaime Barrios ",
      puesto:"Diseñador grafico ",
      Fav: false,
    },

  ])
  //arreglo equipos
  const [equipos,actualizarEquipos] = useState([

      {
        id: uuidv4(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9",
  
      },
      {
        id: uuidv4(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF",
  
      },
      {
        id: uuidv4(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2",
  
      },
      {
        id: uuidv4(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8",
  
      },
      {
        id: uuidv4(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5",
  
      },
      {
        id: uuidv4(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"FFF5D9",
  
      },
      {
        id: uuidv4(),
        titulo:"Innovación y  Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF",
  
      },
    ])

  // ternario --> condicion ? seMuestra: noSeMuestra

  const cambiarMostrar= () =>{
    actualizarmostrar(!mostrarFormulario) // esto es igual a UseState(valorfinal)
  }

  //registrar colaborador 

  const registrarColaborador= (colaborador) =>{
    console.log("nuevo colaborador", colaborador)
    //spread operator
    actualizarcolaboradores([...colaboradores,colaborador]) //esto lo que hace es que copia los datos y nos ayuda a ir agregando mas colaboradores 

  }
  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores =colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarcolaboradores(nuevosColaboradores)
  
  }
  //actualizar color de equipo
  const actualizarColor= (color,id)=>{
    console.log("Actualizar" ,color,id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario= color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  //crear equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log("crear equipo")
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuidv4()}])
  }

  //like
  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarcolaboradores(colaboradoresActualizados)

  }

  return (
    <div>
      <Header/>                                       {/*seMuestra : noSeMuestra*/}  
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      
      }
       <MiOrg quitarOMostrar = {cambiarMostrar}/>
      
      {// esta buscando informacion de arreglo de la constante equipos 
        equipos.map( (equipo) => <Equipo //esto es un arreglo
        datos ={equipo} 
        key={equipo.titulo}
        //esta recibiendo los colaboradores
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        
        )
      }
      <Footer/>
    </div>
  );
}


export default App;
