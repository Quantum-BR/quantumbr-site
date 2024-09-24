import { Link } from "react-router-dom"

export default function Events(){
    return(
        <div className="content">
            <h1>Events</h1>
            <h2>QuantumBR x IBM Extension Qiskit Fall Fest '24</h2>
            <p>Details: <Link to="/ff24">Fall Fest Event Schedule</Link></p>
            <hr/>
            <h2>Get Ready For Fall Fest!!</h2>
            <h3>When: Wed Oct 2nd from 5:30pm-7:30pm CDT</h3>
            <h3>Where: Patrick F. Taylor Hall @ LSU, Room 1200</h3>
            <p>Interested in Quantum Week? Have questions? Be sure to stop by and get ready for Quantum Week's challenges!</p>
            <hr/>
            <h1>Past Events</h1>
            <h2>Biweekly Meeting</h2>
            <h3>When: Wed Sep 18th, 2024 from 5:30pm to 7:30</h3>
            <h3>Where: Patrick F. Taylor Hall @ LSU, Room 1263</h3>
            <p>
                The biweekly QuantumBR meeting featuring speakers, workshops,
                icebreakers, and other quantum-focused activities.
            </p>
            <h2>Opening Night</h2>
            <h3>When: Wed Aug 28th, 2024 from 5:30pm to 7:30</h3>
            <h3>Where: Patrick F. Taylor Hall @ LSU, Room 1263</h3>
            <p>
                QuantumBR’s opening night, with icebreakers, some lightning presentations and demos.
                If you’re interested in the local quantum computing community be sure not to miss this event!
            </p>
        </div>
    )
}
