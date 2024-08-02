import './Input.css'
import { useStore } from '@nanostores/react';
import { DecimalStore, MaxNoteStore, ResultStore } from '../../context/GlobalContext';
import { AppInputStore } from '../context/App';
import usePromedy from '../../Hooks/usePromedy';
import { useState } from 'react';

export default function Input({ text = 'Nota', save }) {
    //GlobalState
    const MaxNote = useStore(MaxNoteStore);
    const Decimal = useStore(DecimalStore);

    //AppStates
    const Inputs = useStore(AppInputStore);
    const Result = useStore(ResultStore);

    //States
    const Promedy = usePromedy();
    const [LocalPromedy, setLocalPromedy] = useState(null);


    //Functions
    const HandleChange = (e) => {
        if (MaxNote === null) {
            return;
        }
        if (Number(e.target.value) >= MaxNote) {
            e.target.value = MaxNote;
        }

        GetLocalPromedy(e)

        ResultStore.set(Promedy.Ponderado(save()).Result)
    }

    const GetLocalPromedy = (e) => {
        const parent = e.target.closest('.app-input-parent');
        const Note = Number(parent.querySelector('.app-input-input').value);
        const Per = Number(parent.querySelector('.app-input-per').value);

        setLocalPromedy(Note / Per);
    }

    return (
        <div className='app-input-div br-6 f-row f-align-center relative'>
            <input className='app-input-input br-6' placeholder={text} onChange={HandleChange} maxLength={Decimal ? 7 : 4} tabIndex={0} use='yes' />
            <span className='app-input-local d-flex absolute f-center no-select' data-select='local'>
                {
                    LocalPromedy !== Infinity ? LocalPromedy : null
                }
            </span>
        </div>
    )
}