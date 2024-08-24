import openingnight from "../assets/bitmap.png"

export default function Events(){
    return(
        <div className="content">
            <h1>Events</h1>
            <h2>Opening Night</h2>
            <h3></h3>When: Wed Aug 28th, 2023 from 5:30pm to 7:30</h3>
            <h3>Where: Patrick F. Taylor Hall @ LSU, Room 1263</h3>
            <img style="margin:auto" src={openingnight}/>
            <p>
                QuantumBR’s opening night, with icebreakers, some lightning presentations and demos.
                If you’re interested in the local quantum computing community be sure not to miss this event!
            </p>
        </div>
    )
}
