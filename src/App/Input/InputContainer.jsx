import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

import Input from '../Input/Input'
import InputPer from '../Input/InputPer'


export default function InputContainer() {
    //Context
    const {setResult} = useContext(AppContext);

    //States
    const [inputs, setInputs] = useState([{}, {}, {}, {}]);

    //Functions

    const HandleAddInput = () => {
        setInputs((prevInputs) => [...prevInputs, {}]);
        HandleCalcPromedy();
    }

    const HandleCalcPromedy = () => {
        let Result = 0;
        document.querySelectorAll(`.app-input[inputype = false]`).forEach(element => {
            let number = Number(element.value);
            Result += number;
        })
        setResult(Result / inputs.length)
    }

    return (
        <ul className='app-in-parent f-col g-10'>
            {
                inputs && inputs.map((item, index) => (
                    <li key={index} className='f-row g-15'><Input text={`Nota ${index + 1}`} funct={HandleCalcPromedy} /><InputPer text={`${Math.round(100 / inputs.length)}%`} /></li>
                ))
            }
            <li className='f-row g-15'><span className='none' tabIndex='0' style={{ width: '80%', minWidth: '40px' }} /><span className='pc-btn-black d-flex f-center br-6' onClick={HandleAddInput}>Add</span></li>
        </ul>
    )
}