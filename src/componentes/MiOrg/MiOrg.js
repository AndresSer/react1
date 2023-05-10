import "./MiOrg.css"


const  MiOrg = (props) =>{
    // Estado - hooks
    // useState
    //cons [variable,functionActualiza] = useState(valorInicial)

    /*const [mostrar, actualizarmostrar] = useState(true) //true es el estado inicial 
    const manejarClick = () =>{
        console.log("mostrar/ocultar elemento",!mostrar);
        actualizarmostrar(!mostrar)
    }*/
    return <section className="orgsection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.quitarOMostrar}/>
    </section>
}

export default MiOrg