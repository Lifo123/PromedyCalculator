import './Input.css'
import { useStore } from '@nanostores/react';
import { DecimalStore, MaxNoteStore } from '../../context/GlobalContext';

export default function Input({ text = 'Nota', type = null, funct = null }) {
    //GlobalState
    const MaxNote = useStore(MaxNoteStore);
    const Decimal = useStore(DecimalStore);

    //Functions
    const HandleChange = (e) => {
        if(MaxNote === null){
            return;
        }
        if(Number(e.target.value) >= MaxNote){
            e.target.value = MaxNote;
        }
        funct();
    }

    return (
        <input className='app-input br-6' placeholder={text} inputype={type === '%' ? `true` : `false`} onChange={HandleChange} maxLength={Decimal ? 7 : 4} tabIndex={0} use='yes'/>
    )
}