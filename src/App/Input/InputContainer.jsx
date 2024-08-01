import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { AppInputStore } from '../context/App';

import Input from '../Input/Input'
import InputPer from '../Input/InputPer'



export default function InputContainer() {
    //AppStates
    const Inputs = useStore(AppInputStore)

    //States
    const [InMsg, setInMsg] = useState(null);


    //Functions
    const AddInput = () => {
        SaveData();
        AppInputStore.set([...Inputs, {
            Note: '',
            id: Inputs.reduce((maxId, input) => Math.max(maxId, input.id), 0) + 1,
            per: ''
        }]);
    };

    const DeleteInput = (id) => {
        let newList = Inputs.filter((input) => input.id !== id);
        AppInputStore.set(newList)
    };

    const SaveData = (e) => {
        let newList = [];
        document.querySelectorAll('.app-input-parent[inputid]').forEach(element => {
            newList = [...newList, {
                Note: element.querySelector('.app-input').value,
                id: Number(element.getAttribute('inputid')),
                per: element.querySelector('.app-input-per').value
            }]
        })
        AppInputStore.set(newList);
    }



    return (
        <ul className='f-col g-15 f-center'>
            {
                Inputs && Inputs.map((item, index) => (
                    <section key={item.id} className='app-input-parent f-row f-justify-center g-15' inputid={item.id}>
                        <Input
                            text={item.Note ? item.Note : `Nota ${index + 1}`}
                        />
                        <InputPer
                            Delete={() => DeleteInput(item.id)}
                            msg={setInMsg}
                        />
                    </section>
                ))
            }
            <section className='app-input-parent f-row f-justify-center g-15' >
                <p className='app-input none f-row f-justify-end'>{InMsg ? InMsg : null}</p>
                <div className='app-in-per-list f-row f-align-center'>
                    <span className='pc-btn-black d-flex f-justify-center br-6' onClick={AddInput}>Add</span>
                    <span className='app-in-close none no-select'></span>
                </div>
            </section>
        </ul>
    )
}