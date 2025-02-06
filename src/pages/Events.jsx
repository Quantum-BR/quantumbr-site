import { Link } from "react-router-dom"

import { FaClock, FaLocationArrow } from "react-icons/fa";

export default function Events(){
    return(
        <div className="content">
            <h1>Events</h1>
            <Event 
                title="QuantumBR General Meeting"
                when="Wed Feb 2nd from 5:00pm-7:00pm CST"
                where="Patrick F. Taylor Hall @ LSU, Room 1221"
                desc="The biweekly QuantumBR meeting featuring speakers, workshops, icebreakers, and other quantum-focused activities."
            />
            <h1>Past Events</h1>
            <Event 
                title="QuantumBR x IBM Sponsored Qiskit Fall Fest '24"
                when="Wed Oct 8th - Wed Oct 15th"
                where="Virtual & In-person"
                desc="See details. sponsored by IBM Fall Fest!"
            />
            <Event
                title="Get Ready For Fall Fest!!"
                when="Wed Oct 2nd from 5:30pm-7:30pm CDT"
                where="Patrick F. Taylor Hall @ LSU, Room 1200"
                desc="Interested in Quantum Week? Have questions? Be sure to stop by and get ready for Quantum Week's challenges!"
            />
            <Event
                title="QuantumBR General Meeting"
                when="Wed Sep 18th, 2024 from 5:30pm to 7:30"
                where="Patrick F. Taylor Hall @ LSU, Room 1263"
                desc="The biweekly QuantumBR meeting featuring speakers, workshops, icebreakers, and other quantum-focused activities."
            />
            <Event 
                title="Opening Night"
                when="Wed Aug 28th, 2024 from 5:30pm to 7:30"
                where="Patrick F. Taylor Hall @ LSU, Room 1263"
                desc="QuantumBR's opening night, with icebreakers, some lightning presentations and demos. If you're interested in the local quantum computing community be sure not to miss this event!"/> 
        </div>
    )
}


function Event(props) {
    return(
    <div className="event">
        <div className="title">{props.title}</div>
        <hr/>
        <div className="details">
            <div className="when"><FaClock/>&ensp;<b>When:</b> {props.when}</div>
            <div className="where"><FaLocationArrow/>&ensp;<b>Where:</b> {props.where}</div>
            <p className="desc">{props.desc}</p>
        </div>
    </div>)
}