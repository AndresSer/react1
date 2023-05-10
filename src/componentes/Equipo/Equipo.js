import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

//externos
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    // Destructuracion

    const {colorPrimario,colorSecundario,titulo,id} = props.datos
    const {colaboradores,eliminarColaborador,actualizarColor} = props

    const obj={
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }
    const estiloTitulo = {borderColor:colorPrimario}

    return <> {/*esto es igual a colocar un div  */}
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(e)=>     //color,titulo
                        actualizarColor(e.target.value,id)// estamos obteniendo el color
                    }
                
                />
                <h3 style={estiloTitulo} > {titulo} </h3>
                <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
                </div>
            </section>
        }
    </>
}

export default Equipo