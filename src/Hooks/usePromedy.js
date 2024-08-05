

export function usePromedy() {
    //
    const Normal = (props) => {
        let Result = 0;

        props.forEach(element => {
            Result += Number(element.Note)
        });

        return Result / props.length
    }

    //
    const Ponderado = (array) => {

        let Result = 0;
        let NoPer = 100;
        let NoPerItems = array.filter(item => item.per === '');
        
        
        array.forEach(item => {
            NoPer -= item.per
        })

        NoPer = NoPer / NoPerItems.length

        array.forEach(item => {
            Result += item.Note * (item.per ? (item.per / 100) : NoPer / 100)
        })
        


        return { Result, NoPer, array }

    }

    const Local = (Note, Per) => {
        
        return Note * (Per / 100)
    }

    return { Normal, Ponderado, Local }
}