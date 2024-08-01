import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { ResultStore } from '../../context/GlobalContext';

import Input from '../Input/Input'
import InputPer from '../Input/InputPer'


export default function InputContainer() {
    //GlobalStates
    const Result = useStore(ResultStore);

    //States
    const [inputs, setInputs] = useState([{}, {}, {}, {}]);
    const [InMsg, setInMsg] = useState(null);

    //Functions

    const HandleAddInput = () => {
        setInputs((prevInputs) => [...prevInputs, {}]);
        HandleCalcPromedy();
    }

    const HandleCalcPromedy = () => {
        let ResultT = 0;
        document.querySelectorAll(`.app-input[inputype = false]`).forEach(element => {
            let number = Number(element.value);
            ResultT += number;
        })
        ResultStore.set(ResultT / inputs.length)
    }



    return (
        <ul className='app-in-parent f-col g-10'>
            {
                inputs && inputs.map((item, index) => (
                    <li key={index} className='f-row g-15'><Input text={`Nota ${index + 1}`} funct={HandleCalcPromedy} /><InputPer text={`${Math.round(100 / inputs.length)}%`} funct={setInMsg}/></li>
                ))
            }
            <li className='f-row g-15'>
                <span className='none' style={{ width: '80%', minWidth: '40px' }}>{InMsg ? InMsg : null}</span>
                <span className='pc-btn-black d-flex f-center br-6' onClick={HandleAddInput}>Add</span>
            </li>
        </ul>
    )
}