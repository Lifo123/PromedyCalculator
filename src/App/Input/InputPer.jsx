import { useStore } from '@nanostores/react';
import './Input.css'
import { AppInputStore } from '../context/App';

export default function Input({msg, Delete }) {
    //AppStates
     const Inputs = useStore(AppInputStore)

    //Functions
    const HandleChange = (e) => {
        let Sum = 0;
        if (e.target.value >= 100) {
            e.target.value = 100;
        }
        document.querySelectorAll('.app-input + .per').forEach(element => {
            Sum += Number(element.value);
        })

        msg(Sum !== 100 ? 'No suman 100%' : null);


    }

    return (
        <div className='app-in-per-list f-row f-align-center'>
            <input className='app-input-per br-6 text-center' placeholder='25%' maxLength={3} tabIndex={-1} onChange={HandleChange} />
            <span className='app-in-close d-flex f-center' onClick={Delete}>
                <svg className='no-select' height={28} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </span>
        </div>
    )
}