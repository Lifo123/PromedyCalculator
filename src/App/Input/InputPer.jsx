import './Input.css'

export default function Input({text = `00%`, funct = null}) {
    //Context

    //Functions
    const HandleChange = (e) => {
        let Sum = 0;
        if(e.target.value >= 100){
            e.target.value = 100;
        }
        document.querySelectorAll('.app-input + .per').forEach(element => {
            Sum += Number(element.value);
        })
        funct(Sum !== 100 ? 'No suman 100%' : null);
    }
    

    return (
        <input className='app-input per br-6' placeholder={text} maxLength={3} tabIndex={-1} onChange={HandleChange}>

        </input>
    )
}