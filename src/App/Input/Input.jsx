import './Input.css'

export default function Input({ text = 'Nota', type = null, funct = null }) {
    return (
        <input className='app-input br-6' placeholder={text} inputype={type === '%' ? `true` : `false`} onChange={funct} maxLength={3} tabIndex={0}>

        </input>
    )
}