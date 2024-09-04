import catatom from '../assets/cat-atom.jpg'
import { Link } from 'react-router-dom'
import { SiDiscord } from "react-icons/si";

export default function Home(){
    return(
        <div className="content-fw">
            <div className="jumbo">
                <h1>Things Are Getting <strong><em>Quantum!</em></strong></h1>
                <p>EXTENSION IBM <br/> Qiskit Fall Fest '24<br/>Starts Oct 7th</p>
                <p><Link to="/ff24"> Event Details </Link></p>
            </div>
            <div className="sidebyside">
                <div className="text">
                    <h1>QuantumBR</h1>
                    <h2>Baton Rouge's Quantum Computing User Group</h2>
                    <p>
                        Are you ready to join the quantum revolution? Then join us! We are Baton Rouge's
                        quantum computing user group. We are a community built around a common interest 
                        in the technologies, tools, and various applications of quantum computing. We're
                        dedicated to fostering and sharing knowledge to educate our peers and make quantum
                        computing accessible to everyone! 
                    </p>
                    <h2>Open to Everyone</h2>
                    <p>
                        As a member you will will network with like-minded peers who share your interest in 
                        quantum technologies while attending hands-on workshops, events, lectures, and more. 
                        Whether you're a physicist or an artist, if you're interested in quantum computing 
                        then this user group is for you!
                    </p>
                </div>
                <div className="img">
                    <img src={catatom} />
                </div>
            </div>
            <div className='dark-row'>
            <h2>Contact</h2>
            <p>To contact us:</p>
            <ul>
                <li>Drop a line in our discord, <a href="https://discord.gg/BAu3uksFEQ"><SiDiscord/></a></li>
                <li>Or email our president, Justin Woodring, at jwoodrg@gmail.com</li>
            </ul>
            </div>
        </div>
    )
}