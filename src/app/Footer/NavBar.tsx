import Image from "next/image";
import truck from "../Assets/entrega-de-encomendas.png";
import treinamento from "../Assets/elearning.png";
import chamados from "../Assets/reclamar.png";
import alert from "../Assets/solicitar.png";
import checklist from "../Assets/questionario.png";
import { useState } from "react";

export default function NavBar () {

    const [ select, setSelect ] = useState(0)

    const [ buttons, setButtons ] = useState([
        checklist, alert, truck, chamados, treinamento  
    ])

    return (

        <div className="bg-gradient-to-b z-10 from-yellow-300 to-yellow-100 h-28 shadow-sm_yellow pb-2 rounded-t-[2.5rem] flex px-2 justify-between items-center">
            
            { buttons.map( (val, id) => (
                <button 
                    key={id} 
                    onClick={() => setSelect(id)} 
                    className={`
                        flex  duration-300 rounded-full  
                        ${id == select
                            ?'border-white bg-yellow-500 p-3 border-4 shadow-sm_yellow' 
                            :'border-transparent p-3 bg-yellow-50 shadow-sm_black_inset'
                        }
                    `}>
                        
                        <Image alt="" src={val} className="h-10 w-10"/>
                </button>
            ))
            }

        </div>

    )
}