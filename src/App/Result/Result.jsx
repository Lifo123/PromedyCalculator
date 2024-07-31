import './Result.css'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Result() {
    //States
    const {Result} = useContext(AppContext);
    

     //Functions
     const HandleOpenConfig = (e) => {
        e.target.closest('.click').nextElementSibling.classList.toggle('d-none');
    }
    return (
        <section className="app-left f-col g-10">
            <div className="app-config relative">
                <section className='click f-row f-justify-between f-align-center pointer' onClick={HandleOpenConfig}>
                    <p className='app-text no-select' style={{ fontSize: '14.5px', margin: '0px' }}>Configuration</p>
                    <span className='separator no-select'></span>
                    <span className='arrow no-select'>
                        <svg className='no-select' viewBox="0 0 24 24" fill="none">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#a5a5a5" />
                        </svg>
                    </span>
                </section>
                <section className='app-drop-config absolute f-col br-8 d-none o-hidden'>
                    <h4>Configuration</h4>
                    <div className='f-col'>

                    </div>
                </section>
            </div>
            <div className="app-result br-12 f-col f-align-center g-30">
                <span className='f-col g-25'>
                    <h3 className='app-title'>Final Result</h3>
                    <div className="d-flex f-center relative">
                        <h4 className='text-center'>{Math.floor(Result)}</h4>
                        <div className="absolute">

                        </div>
                    </div>
                </span>
                <p className='text-center'>{Result >= 11.5 ? 'Felicidades !Aprobaste!' : 'Lo sentimos, No aprobaste'}</p>

            </div>
        </section>
    )
}