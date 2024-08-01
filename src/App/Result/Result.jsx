import './Result.css'
import useTimer from '../../Hooks/useTimer';
import { useState, useRef} from 'react';
import { useStore } from '@nanostores/react';
import { ResultStore } from '../../context/GlobalContext';
import AppConfig from './AppConfig';

export default function Result() {
    //GlobalStates
    const Result = useStore(ResultStore);

    return (
        <section className="app-left f-col g-10">
            <div className="app-config relative">
                <AppConfig />
            </div>
            <div className="app-result br-12 f-col f-align-center g-30">
                <span className='f-col g-25'>
                    <h4 className='app-title' style={{ fontSize: 22 }}>Final Result</h4>
                    <div className="d-flex f-center relative">
                        <h4 className='text-center'>{Result}</h4>
                    </div>
                </span>
                <p className='text-center'>{true >= 11.5 ? 'Felicidades !Aprobaste!' : 'Lo sentimos, No aprobaste'}</p>

            </div>
        </section>
    )
}