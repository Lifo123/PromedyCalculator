

export default function usePromedy() {
    const Normal = (props) => {
        let Result = 0;

        props.forEach(element => {
            Result += Number(element.Note)
        });

        return Result / props.length
    }

    const Ponderado = (array,) => {
        let Result = 0;
        let NoPer = 100;

        array.forEach(element => {
            if (element.per) {
                NoPer -= Number(element.per)
            }
        })

        array.forEach(element => {
            let Nota = Number(element.Note);
            let Peso = Number(element.per ? element.per : (NoPer / array.length + 1)) / 100
            Result += Nota * Peso
            console.log(Peso);
        })

        return { Result, NoPer }

    }

    return { Normal, Ponderado }
}