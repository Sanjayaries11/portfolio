import { useState } from "react";
import profileImg from "../assets/image1.png"
import "../css/About.css";

export default function About() {
    const [activeTab, setActiveTab] = useState("experience");

 
    const calculateAge = (birthYear) => {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };
    const age = calculateAge(1999);

    // Tab content data
    const tabs = {
        experience: [
            { year: "2024-Current", desc: "Front-End Developer @ Afablez Semiconductor" },
            { year: "2021-2023", desc: "GIS Analyst @ EDR Continuous Private Limited" },
        ],
        education: [
            { year: "2016-2020", desc: "B.E Mechanical Engineer from Jeppiaar Institute Of Technology with 6.5%" },
            { year: "2015-2016", desc: "HSC from St.Sebastian's Matric. High Sec School with 75%" },
            { year: "2013-2014", desc: "SSLC from St.Sebastian's Matric. High Sec School with 77%" },
        ],
        info: [
            { label: "Degree", value: "B.E Mechanical" },
            { label: "Age", value: age },
            { label: "DOB", value: "31/08/1999" },
            { label: "Father Name", value: "Sathish Kumar A.P" },
            { label: "City", value: "Chennai" },
        ],
    };

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="image">
                            <img src={profileImg} alt="Profile" />
                            <div className="img-content">
                                <h6>Building intuitive, responsive, and visually engaging user interfaces that bring ideas to life on the web.</h6>
                            </div>
                        </div>
                    </div>

              
                    <div className="col-sm-6">
                        <h1 className="about-title" data-aos="fade-right" data-aos-delay="200">
                            About Me
                        </h1>
                        <p data-aos="fade-left" data-aos-delay="200">
                            Passionate Front-End Developer Intern skilled in HTML, CSS, and
                            JavaScript, with experience in Bootstrap. Dedicated to creating
                            user-friendly, visually appealing websites. Eager to learn and
                            contribute in a collaborative team environment.
                        </p>

                        {/* Tab Titles */}
                        <div className="tab-titles">
                            {Object.keys(tabs).map((tabKey) => (
                                <div
                                    key={tabKey}
                                    className={`tab-links ${activeTab === tabKey ? "active-link" : ""}`}
                                    onClick={() => setActiveTab(tabKey)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setActiveTab(tabKey);
                                    }}
                                    aria-selected={activeTab === tabKey}
                                    aria-controls={`${tabKey}-tab`}
                                    id={`${tabKey}-tab-button`}
                                >
                                    {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                                </div>
                            ))}
                        </div>

                        {/* Tab Contents */}
                        {activeTab === "experience" && (
                            <div
                                className="tab-contents active-tab"
                                id="experience"
                                role="tabpanel"
                                aria-labelledby="experience-tab-button"
                            >
                                <ul>
                                    {tabs.experience.map(({ year, desc }) => (
                                        <li key={year}>
                                            <span>{year}</span>
                                            <br />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "education" && (
                            <div
                                className="tab-contents active-tab"
                                id="education"
                                role="tabpanel"
                                aria-labelledby="education-tab-button"
                            >
                                <ul>
                                    {tabs.education.map(({ year, desc }) => (
                                        <li key={year}>
                                            <span>{year}</span>
                                            <br />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "info" && (
                            <div
                                className="tab-contents active-tab"
                                id="info"
                                role="tabpanel"
                                aria-labelledby="info-tab-button"
                            >
                                <ul>
                                    {tabs.info.map(({ label, value }) => (
                                        <li key={label}>
                                            <span>
                                                {label} : <span style={{ color: "#ffffff" }}>{value}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
