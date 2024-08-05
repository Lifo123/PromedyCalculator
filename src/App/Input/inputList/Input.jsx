import { useStore } from '@nanostores/react';
import { DecimalStore, MaxNoteStore, ResultStore } from '../../../context/GlobalContext';
import { AppInputStore } from '../../context/App';
import { usePromedy } from '../../../Hooks/usePromedy';
import { SaveData } from '../../Functions/DataManager';
import { useEffect, useRef, useState } from 'react';

export default function Input({ text = 'Nota', }) {
    //GlobalState
    const { MaxNote, Decimal } = {
        MaxNote: useStore(MaxNoteStore),
        Decimal: useStore(DecimalStore),
    };

    //AppStates
    const Inputs = useStore(AppInputStore);

    //States
    const Promedy = usePromedy();
    const [LocalPromedy, setLocalPromedy] = useState(null);

    //Refs
    const InputRef = useRef(null);


    //Functions
    const HandleChange = (e) => {
        if (Number(e.target.value) >= MaxNote) {
            e.target.value = MaxNote;
        }

        const Data = SaveData();
        const Ponderaded = Promedy.Ponderado(Data)
        ResultStore.set(Ponderaded.Result)

        //ActualizarInputs
        AppInputStore.set(Data)

    }

    useEffect(() => {
        let parent = InputRef.current.parentElement
        let id = parent.getAttribute('inputid');
        let LocalData = Inputs.find(item => item.id === Number(id));
        if (!LocalData.Note) {
            return;
        }

        let Per = parent.querySelector('.app-input-per');
        let PerData = 0;
        if (!Per.value) {
            PerData = Number(Per.getAttribute('placeholder').replace('%', ''));
        } else {
            PerData = Number(Per.value)
        }
        
        setLocalPromedy(Promedy.Local(LocalData.Note, PerData))

    }, [Inputs])

    return (
        <div className='app-input-div br-6 f-row f-align-center relative' ref={InputRef}>
            <input className='app-input-input br-6' placeholder={text} onChange={HandleChange} maxLength={Decimal ? 7 : 4} tabIndex={0} use='yes' />
            <span className='app-input-local d-flex absolute f-center no-select' data-select='local'>
                {
                    Inputs ? (
                        LocalPromedy ? LocalPromedy.toFixed(2) : null
                    ) : null
                }
            </span>
        </div>
    )
}