import './App.css'

//Imports
import { AppProvider } from './Context/AppContext';
import Result from './Result/Result';
import InputContainer from './Input/InputContainer';

export default function App() {
    //States

    return (
        <AppProvider>
            <div className="app-container mx-auto">
                <Result />
                <section className="app-right f-col">
                    <h3 className='app-subtitle'>Promedy Calculator</h3>
                    <p className='app-text'>Astroplate is a free starter template built with Astro and TailwindCSS, providing.</p>
                    <InputContainer />
                </section>
            </div>
        </AppProvider>
    )
}
