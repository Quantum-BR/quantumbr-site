import qbr from '../assets/qbr-round.png'
import qffbadge from '../assets/qff-badge.png'
import blogimg from '../assets/Blog-Image_02.png'
import { Snowfall } from 'react-snowfall'
import leafimg from '../assets/leaf.png'

const leaf = document.createElement('img')
leaf.src = leafimg

export default function FallFest(){
    return (<div className="content-fw">
        <div className='leaves'>
        <Snowfall
        // Changes the snowflake color
        color="red"
        // Applied to the canvas element
        // Controls the number of snowflakes that are created (default 150)
        radius={[10,15]}
        snowflakeCount={20}

        images={[leaf]}
        />
        </div>
        <div className="jumbo ffbg">
            <h1>QuantumBR<hr/> Fall Fest '24</h1>
            <p><img src={qbr}/>&ensp;<img src={qffbadge}/></p> 
        </div>
        <div className='runner'/>
        <div className='sidebyside'>
            <div className='text'>
                <h2>Hybrid QuantumBR X IBM Qiskit Fall Fest Extension Event</h2>
                <p>QuantumBR has partnered with IBM to bring you an exciting series of hybrid events as an Extension of Qiskit Fall Fest '24.</p>
                
                <h2>Events</h2>
                <ul>
                    <li>Quantum Week Kickoff</li>
                    <li>Engaging Speakers</li>
                    <li>Hackathon Winner Announcement</li>
                </ul>

                <h2>Activities</h2>
                <ul>
                    <li>QuantumBR Challenges & Certificate</li>
                    <li>Workshops</li>
                    <li>Hackathon</li>
                </ul>

                <h2>Register in our discord!</h2>
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
            <h3>Monday - October 7th – Quantum Week Kickoff</h3>
            (Virtual) (Notebook Drop) (Hackathon Announcement) (10:00am CDT)<br/>
            <a href="https://discord.gg/Nxr2NQkyWp?event=1281080307549999115">Discord Virtual Event Link</a>
            </li>
            <br/>
            <li>
            <h3>Wednesday - October 9th– Quantum Speaker / Workshopping</h3>
            (Meetup) (5:30pm-7:30pm CDT) <br/>
            Location Tureaud Hall @ LSU, Room 0103
            </li>
            <br/>
            <li>
            <h3>Friday - October 11th – Notebooks due  / Hackathon Projects Start</h3>
            (Deadline) (Hackathon Drop) (11:59pm CDT) 
            </li>
            <br/>
            <li>
            <h3>Tuesday - October 15th – Hackathon Projects Due</h3>
            (Deadline) (11:59pm CDT) 
            </li>
            <br/>
            <li>
            <h3>Wednesday - October 16th – QuantumBR Qiskit Fall Fest Closing Ceremony</h3>
            (Hybrid) (5:30pm-7:30pm CDT) <br/>
            <a href="https://discord.gg/rET2xdWm?event=1281080307549999115">Discord Virtual Event Link</a><br/>
            Location Patrick F Taylor Hall @ LSU, Room 1200
            </li>
            </ul>
        </div>
    </div>)
}