import vpheadshot from "../assets/jasonp-headshot.png"
import tresheadshot from "../assets/charlesb-headshot.jpeg"

export default function About(){
    return(
        <div className="content">
            <h1>About</h1>
            <p>quantumBR is a quantum computing user group located in Baton Rouge with a mission to lowering the barrier of entry into quantum computing for everyone.</p>
            <h2>Officers</h2>
            <div className="officer">
                <img src="https://justinwoodring.com/assets/alt-profile-comp.jpg"/>
                <b>Justin Woodring</b>
                <ul>
                    <li>Founder, President</li>
                    <li><a href="https://justinwoodring.com">Website</a></li>
                </ul>
            </div>
            <div className="officer">
                <img src={vpheadshot}/>
                <b>Jason P.</b>
                <ul>
                    <li>Vice President</li>
                    <li><a href="https://github.com/kritzikal">Github</a></li>
                </ul>
            </div>
            <div className="officer">
                <img src={tresheadshot}/>
                <b>Charles Beam</b>
                <ul>
                    <li>Treasurer</li>
                    <li><a href="https://charlesbeam.com/">Website</a></li>
                </ul>
            </div>
            <h2>FAQ</h2>
            <h3>Why should I join?</h3>
            <p>If you want to connect with like-minded peers while standing out amongst your competition as a forward-thinking individual, or you're excited to see what's on the bleeding edge of computing technology, then this is the community for you.</p>

            <h3>What if I'm interested, but I don't like math...</h3>
            <p>Give us a shot, this is a community for people with every kind of background and education level built around a common passion for quantum computing. Education outreach is a core pillar of this group, meaning that we place of special emphasis on communicating our knowledge with approachability.</p>

            <h3>Is there a fee?</h3>
            <p>We will never charge fees to simply attend and benefit from the knowledge presented at any of our meetings or workshops however, you may donate and/or optionally purchase various refreshments and such if they are available at our meetings.</p>

            <h3>Who can join?</h3>
            <p>This club is open anyone and we encourage non-LSU students to join! However, since we are affiliated with LSU we do ask and expect all of our members to adhere to the standards outlined in the LSU codes and guidelines. Because of our university affiliation the officer positions are also restricted to LSU students, however that doesn't mean there aren't many other ways to step up and contribute to the community as a whole.</p>

            <h3>Rules and Such</h3>
            <p>We observe LSU's codes and guidelines.</p>
        </div>
    )
}
