import './Input.css'
import { useStore } from '@nanostores/react';
import { usePromedy } from '../../Hooks/usePromedy';
import { useState } from 'react';
import { AppInputStore, NoPerStore } from '../context/App';
import { ResultStore } from '../../context/GlobalContext';
import { SaveData } from '../Functions/DataManager';

import InputList from './inputList/InputList';



export default function InputContainer() {
    //AppStates
    const Inputs = useStore(AppInputStore);

    //States
    const [InMsg, setInMsg] = useState(null);
    const Promedy = usePromedy();


    //Functions
    const AddInput = () => {
        let NewList = SaveData();
    
        AppInputStore.set([...Inputs, {
            Note: 0,
            id: Inputs.reduce((maxId, input) => Math.max(maxId, input.id), 0) + 1,
            per: 0
        }]);
        NoPerStore.set(100 / (NewList.length + 1))
    
        ResultStore.set(Promedy.Normal(NewList))
    };

    const DeleteInput = (id) => {
        let newList = Inputs.filter((input) => input.id !== id);
        AppInputStore.set(newList);
        NoPerStore.set(100 / newList.length)
    
        ResultStore.set(Promedy.Normal(newList))
    };

    return (
        <ul className='f-col g-15 f-center'>
            {
                Inputs && Inputs.map((item, index) => (
                    <InputList key={item.id} data={item} msg={setInMsg} Delete={DeleteInput}/>
                ))
            }
            <li className='app-input-parent d-grid g-15' >
                <p className='app-text-error app-input-div none f-row f-justify-end f-align-center'>{InMsg ? InMsg : null}</p>
                <div className='app-in-per-list f-row f-align-center'>
                    <span className='pc-btn-black d-flex f-justify-center br-6' onClick={AddInput}>Add</span>
                    <span className='app-in-close none no-select'></span>
                </div>
            </li>
        </ul>
    )
}