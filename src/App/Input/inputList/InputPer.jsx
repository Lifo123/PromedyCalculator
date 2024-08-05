import { useStore } from '@nanostores/react';
import { AppInputStore, NoPerStore } from '../../context/App';
import { ResultStore } from '../../../context/GlobalContext';

import { usePromedy } from '../../../Hooks/usePromedy';
import { SaveData } from '../../Functions/DataManager';

export default function Input({ msg, Delete }) {
    //AppStates
    const noPer = useStore(NoPerStore);

    //States
    const Promedy = usePromedy();

    //Functions
    const HandleChange = (e) => {
        if (e.target.value >= 100) {
            e.target.value = 100;
        }

        const Data = SaveData();
        const Ponderaded = Promedy.Ponderado(Data)
        ResultStore.set(Ponderaded.Result)
        NoPerStore.set(Ponderaded.NoPer);


        Validation100Per()

        //ActualizarInputs
        AppInputStore.set(Data)
    }

    const Validation100Per = () => {
        let Sum = 0;
        document.querySelectorAll('.app-input-per').forEach(element => {
            Sum += Number(element.value);
        })
        msg(Sum !== 100 ? 'No suman 100%' : null);
    }

    return (
        <div className='app-in-per-list f-row f-center'>
            <label className='app-label-in-per br-6 f-row f-center'>
                <input className='app-input-per'
                    placeholder={noPer && noPer > 0 ? `${Math.round(noPer)}` : '0'}
                    maxLength={4}
                    tabIndex={-1}
                    onChange={HandleChange}
                />
                <span className='no-select'>%</span>
            </label>
            <span className='app-in-close d-flex f-center' onClick={Delete}>
                <svg className='no-select' height={28} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </span>
        </div>
    )
}