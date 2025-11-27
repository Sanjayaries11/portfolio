import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Skills.css";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.Js",
        "Angular",
        "TypeScript",
        "Bootstrap",
        "TailwindCSS",
    ];

    return (
        <section id="skills" className="skills-section">
            <h1 data-aos="zoom-in">Skills & Technologies</h1>

            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 120}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
