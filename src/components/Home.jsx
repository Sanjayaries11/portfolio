import { useEffect } from "react";
import Typed from "typed.js";
import "../css/Home.css";

export default function Home() {

    useEffect(() => {
        const typed = new Typed("#typing", {
            strings: ["SANJAY KUMAR", "A Front-End Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section className="home-section">
            <div className="home-content">
                <p className="home-greeting">Hello, it's me</p>
                <h1 className="home-title">
                    <span id="typing" className="typing-highlight"></span>
                </h1>
                <p className="home-description">
                    I'm a <span className="accent">Web Designer</span> with 2 years of experience.
                    <br />
                    I specialize in <span className="accent">Frontend Design</span> & modern UI/UX.
                </p>
            </div>
        </section>
    );
}
