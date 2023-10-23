import { Link, NavLink } from "react-router-dom";
import logo from "../assets/quantumBR3.png"
import { SiDiscord } from "react-icons/si";

export default function Navigation(){
    return(
        <div className="navigation">
            <nav>
                <div className="left-side">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="quantumBR logo"/></Link>
                    </div>
                    <ul className="links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul className="links">
                        <li><a href="https://discord.gg/BAu3uksFEQ"><SiDiscord/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}