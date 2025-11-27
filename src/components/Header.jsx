import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../css/Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className="navbar">
                <div className="nav-brand">
                    <span style={{ color: "#e62753" }}>S</span>anjay
                </div>

            
                <div className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>

               
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#skills">Skills</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
