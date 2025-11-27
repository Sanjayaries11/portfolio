import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import Particles from "react-tsparticles";
import "../css/Contact.css";

// React Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

import "../css/Contact.css";

export default function Contact() {
    const formRef = useRef();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => alert("Message Sent Successfully!"))
            .catch(() => alert("Failed to Send Message!"));
    };

    return (
        <section id="contact" className="contact-section">

            {/* ⭐ Floating Particle Background */}
            <Particles
                id="tsparticles"
                options={{
                    background: { color: "transparent" },
                    particles: {
                        number: { value: 70 },
                        size: { value: 3 },
                        move: { speed: 0.8 },
                        links: { enable: true, color: "#a855f7" },
                    },
                }}
            />

            {/* ⭐ NEW - Let's Connect Heading */}
            <div className="connect-heading" data-aos="zoom-in">
                <span className="connect-sub">LET’S CONNECT</span>
                <h1 className="connect-title">Contact Me</h1>
            </div>

            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-left" data-aos="fade-right">
                    <p>
                        <HiOutlineMail className="icon" />
                        sanjaykumar.ariess@gmail.com
                    </p>

                    <p>
                        <BsTelephone className="icon" />
                        +91-9841108736
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/sanjay-kumar-s-608913195" target="_blank">
                            <FaLinkedin className="linkedin icon" />
                        </a>

                        <a href="https://github.com/Sanjayaries11" target="_blank">
                            <FaGithub className="github icon" />
                        </a>
                    </div>

                    {/* RESUME CARD */}
                    <div className="resume-card" data-aos="zoom-in">
                        {/* <img src="/resume-preview.png" alt="Resume Preview" className="resume-img" /> */}

                        <div className="resume-buttons">
                            <a href="/resume.pdf" target="_blank" className="view-btn">View</a>
                            <a href="/resume.pdf" download className="download-btn">Download</a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="contact-right" data-aos="fade-left">
                    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" autoComplete="off" required />
                        <input type="email" name="email" placeholder="Your Email" autoComplete="off" required />
                        <textarea name="message" placeholder="Your Message" autoComplete="off" required />
                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
}
