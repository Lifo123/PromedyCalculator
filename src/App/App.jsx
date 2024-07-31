import { createContext, useState } from 'react';
import './App.css'


import Input from './Input/Input'
import InputPer from './Input/InputPer'

const Gcontext = createContext();

export default function App() {
    //States
    const [inputs, setInputs] = useState([{}, {}, {}, {}]);
    const [GCData, setGCData] = useState(20);

    //Functions
    const HandleAddInput = () => {
        setInputs([...inputs, {}]);
        HandleCalcPromedy();
    }

    const HandleCalcPromedy = () => {
        let Result = 0;
        document.querySelectorAll(`.app-input[inputype = false]`).forEach(element => {
            let number = Number(element.value);
            Result += number;
        })
        setGCData(Result / inputs.length);
    }

    return (
        <Gcontext.Provider value={{GCData}}>
            <div className="app-container mx-auto">
                <section className="app-left f-col me-5">
                    <div className="app-config">
                        <p>Configuration</p>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="app-result br-10 f-col f-align-center">
                        <h3 className='app-title'>Final Result</h3>
                        <div className="d-flex f-center relative">
                            <h4 className='text-center'>{Math.floor(GCData)}</h4>
                            <div className="absolute">

                            </div>
                        </div>
                        <p className='text-center'>{GCData >= 11.5 ? 'Felicidades !Aprobaste!' : 'Lo sentimos, Suerte para la proxima'}</p>

                    </div>
                </section>
                <section className="app-right f-col">
                    <h3 className='app-subtitle'>Promedy Calculator</h3>
                    <p className='app-text'>Astroplate is a free starter template built with Astro and TailwindCSS, providing.</p>
                    <ul className='app-in-parent f-col g-10'>
                        {
                            inputs && inputs.map((item, index) => (
                                <li key={index} className='f-row g-15'><Input text={`Nota ${index + 1}`} funct={HandleCalcPromedy}/><InputPer text={`${Math.round(100 / inputs.length)}%`}/></li>
                            ))
                        }
                        <li className='f-row g-15'><span className='none' tabIndex='0'/><span className='pc-btn-black d-flex f-center br-6' onClick={HandleAddInput}>Add</span></li>
                    </ul>
                </section>
            </div>
        </Gcontext.Provider>
    )
}