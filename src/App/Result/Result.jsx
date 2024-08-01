import './Result.css'

import { useStore } from '@nanostores/react';
import { DecimalStore, ResultStore } from '../../context/GlobalContext';
import AppConfig from './AppConfig';

export default function Result() {
    //GlobalStates
    const Result = useStore(ResultStore);
    const Decimal = useStore(DecimalStore);

    return (
        <section className="app-left f-col g-10">
            <div className="app-config relative">
                <AppConfig />
            </div>
            <div className="app-result br-12 f-col f-align-center g-30" style={{width: Decimal ? 320 : 280}}>
                <span className='f-col g-25'>
                    <h4 className='app-title text-center' style={{ fontSize: 22 }}>Final Result</h4>
                    <div className="d-flex f-center relative">
                        <h4 className='text-center'>{Decimal ? Result.toFixed(2) : Math.floor(Result)}</h4>
                    </div>
                </span>
                <p className='text-center'>{Result >= 11.5 ? 'Felicidades !Aprobaste!' : 'Lo sentimos, No aprobaste'}</p>

            </div>
        </section>
    )
}