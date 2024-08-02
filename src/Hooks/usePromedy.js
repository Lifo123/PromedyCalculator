

export default function usePromedy() {
    const Normal = (props) => {
        let Result = 0;

        props.forEach(element => {
            Result += Number(element.Note)
        });

        return Result / props.length
    }

    const Ponderado = (array) => {
        let Result = 0;
        let NoPer = 100;
        let NoPerItems = array.length;
        
        array.forEach(element => {
            if (element.per) {
                NoPer -= Number(element.per)
                NoPerItems--
            }
        })

        array.forEach(element => {
            let Nota = Number(element.Note);
            let Peso = Number(element.per ? element.per : (NoPer / array.length + 1)) / 100
            if(element.per){
                Result += Nota * Peso
            }else{
                Result = Result;
            }
        })
        if(NoPer !== 100){
            NoPer =  NoPer / NoPerItems
        }else if(NoPer === 100){
            NoPer = 25
        }

        return { Result, NoPer }

    }

    return { Normal, Ponderado }
}