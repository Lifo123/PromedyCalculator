import './Input.css'

export default function Input({text = `00%`  }) {

    //Functions
    const HandleChange = (e) => {
        if(e.target.value >= 100){
            e.target.value = 100;
        }
    }

    return (
        <input className='app-input per br-6' placeholder={text} maxLength={3} tabIndex={-1} onChange={HandleChange}>

        </input>
    )
}