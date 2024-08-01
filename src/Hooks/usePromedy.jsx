

export default function usePromedy() {
    const Normal = () => {
        console.log('Normal');
    }

    const Ponderado = () => {
        console.log('Ponderado');
    }

    return { Normal, Ponderado }
}