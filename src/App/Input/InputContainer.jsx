import { useState } from 'react';
import { ResultStore } from '../../context/GlobalContext';
import Input from '../Input/Input'
import InputPer from '../Input/InputPer'


export default function InputContainer() {
    //GlobalStates

    //States
    const [inputs, setInputs] = useState([{ Note: '', id: 1}, { Note: '', id: 2 }, { Note: '', id: 3 }, { Note: '', id: 4 }]);
    const [InMsg, setInMsg] = useState(null);

    //Functions

    const HandleAddInput = () => {
        setInputs([...inputs, { Note: '' }]);
    };

    const HandleDeleteInput = (id) => {
        const newList = inputs.filter((_, index) => index !== id);
        setInputs(newList);
    };


    const HandleCalcPromedy = () => {
        let ResultT = 0;
        document.querySelectorAll(`.app-input[inputype = false]`).forEach(element => {
            let number = Number(element.value);
            ResultT += number;
        })
        ResultStore.set(ResultT / inputs.length)
    }



    return (
        <ul className='f-col g-15 f-center'>
            {
                inputs && inputs.map((item, index) => (
                    <section key={index} className='app-input-parent f-row f-justify-center g-15' inputid={item.id}>
                        <Input text={item.Note === '' ? `Nota ${index + 1}` : item.Note} funct={HandleCalcPromedy} />
                        <InputPer text={`${Math.round(100 / inputs.length)}%`} Delete={HandleDeleteInput} msg={setInMsg}/>
                    </section>
                ))
            }
            <section className='app-input-parent f-row f-justify-center g-15' >
                <p className='app-input none f-row f-justify-end'>{InMsg ? InMsg : null}</p>
                <div className='app-in-per-list f-row f-align-center'>
                    <span className='pc-btn-black d-flex f-justify-center br-6' onClick={HandleAddInput}>Add</span>
                    <span className='app-in-close none no-select'></span>
                </div>
            </section>
        </ul>
    )
}