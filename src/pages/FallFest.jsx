import qbr from '../assets/qbr-round.png'
import qffbadge from '../assets/qff-badge.png'
import blogimg from '../assets/Blog-Image_02.png'

export default function FallFest(){
    return (<div className="content-fw">
        <div className="jumbo ffbg">
            <h1>QuantumBR<hr/> Fall Fest '24</h1>
            <p><img src={qbr}/>&ensp;<img src={qffbadge}/></p> 
        </div>
        <div className='runner'/>
        <div className='sidebyside'>
            <div className='text'>
                <h2>QuantumBR X IBM Qiskit Fall Fest Extension Event</h2>
                <p>QuantumBR has partnered with IBM to bring you an exciting extension event of Qiskit Fall Fest '24.</p>
                
                <h2>Events</h2>
                <ul>
                    <li>Engaging Speakers</li>
                    <li>Hackathon Winner Announcement</li>
                </ul>

                <h2>Activities</h2>
                <ul>
                    <li>QuantumBR Challenges & Certificate</li>
                    <li>Workshops</li>
                    <li>Hackathon</li>
                </ul>

                <h2>Stay up to date in our discord</h2>
                <a href="https://discord.gg/BAu3uksFEQ">Join the QuantumBR Discord!</a>
            </div>
            <div className='img'>
                <img src={blogimg}/>
            </div>
        </div>
        <div className='dark-row'>
            <h1>Quantum Week Starts October 7th!</h1>
            <ul>
            <li>
                Wednesday - October 2nd - Get Ready For Fall Fest!!<br/>
                (Meetup) (5:30-7:30)
            </li> 
            <br/>
            <li>
            Monday - October 7th – Quantum Week Kickoff <br/>
            (Virtual) (Notebook Drop) (Hackathon Announcement) 
            </li>
            <br/>
            <li>
            Wednesday - October 9th– IBM Quantum Speaker / Workshopping <br/>
            (Meetup) (Virtual Speaker) (5:30-7:30) 
            </li>
            <br/>
            <li>
            Friday - October 11th – Notebooks due  / Hackathon Projects Start <br/>
            (Virtual) (11:59PM) 
            </li>
            <br/>
            <li>
            October  15th – Hackathon Projects Due <br/>
            (Virtual) (11:59PM) 
            </li>
            <br/>
            <li>
            October 16th – QuantumBR Qiskit Fall Fest Closing Ceremony <br/>
            (Meetup) (5:30-7:30) 
            </li>
            </ul>
        </div>
    </div>)
}