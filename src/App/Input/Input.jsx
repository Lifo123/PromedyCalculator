import './Input.css'
import { useStore } from '@nanostores/react';
import { DecimalStore, MaxNoteStore, ResultStore } from '../../context/GlobalContext';
import { AppInputStore } from '../context/App';
import usePromedy from '../../Hooks/usePromedy';

export default function Input({ text = 'Nota', save }) {
    //GlobalState
    const MaxNote = useStore(MaxNoteStore);
    const Decimal = useStore(DecimalStore);

    //AppStates
    const Inputs = useStore(AppInputStore);
    const Result = useStore(ResultStore);

    //States
    const Promedy = usePromedy();


    //Functions
    const HandleChange = (e) => {
        if (MaxNote === null) {
            return;
        }
        if (Number(e.target.value) >= MaxNote) {
            e.target.value = MaxNote;
        }

        ResultStore.set(Promedy.Ponderado(save()).Result)
    }

    return (
        <input className='app-input br-6' placeholder={text} onChange={HandleChange} maxLength={Decimal ? 7 : 4} tabIndex={0} use='yes' />
    )
}