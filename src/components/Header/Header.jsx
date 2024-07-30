import './Header.css'

export default function Header({ app = false }) {
    return (
        <header class="f-row f-justify-between f-align-center">
            <h1><a href="/">PromedyCal</a></h1>
            <ul class="f-row">
                <li><a href="/">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Contact">Contact</a></li>
                <li><a href="https://github.com/Lifo123/PromedyCalculator" target="_blank">Repository</a></li>
            </ul>
            {
                app ? (
                    <span className='h-burger d-flex f-center pointer'>
                        <svg className='no-select' xmlns="http://www.w3.org/2000/svg" height={46} viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                ) : (
                    <a href="App" className='pc-btn-black inner-empty br-6' style={{ padding: '11px 24px' }}>Get Started</a>
                )
            }
        </header>

    )
}