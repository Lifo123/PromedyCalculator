import './Input.css'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Input({ text = 'Nota', type = null, funct = null }) {
    //Context
    const {Config} = useContext(AppContext)


    //Functions
    const HandleChange = (e) => {
        if(Config.MaxNote === null){
            return;
        }
        if(Number(e.target.value) >= Config.MaxNote){
            e.target.value = Config.MaxNote;
        }
        funct();
    }

    return (
        <input className='app-input br-6' placeholder={text} inputype={type === '%' ? `true` : `false`} onChange={HandleChange} maxLength={4} tabIndex={0}>

        </input>
    )
}