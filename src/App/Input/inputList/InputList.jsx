import './InputList.css'

import Input from './Input'
import InputPer from './InputPer'


export default function InputList({ data, msg, Delete}) {

    return (
        <li className='app-input-parent d-grid g-15' inputid={data.id}>
            <Input
                text={data.Note ? data.Note : `Nota ${data.id}`}
            />
            <InputPer
                msg={msg}
                Delete={() => Delete(data.id)}
            />
        </li>
    )
}