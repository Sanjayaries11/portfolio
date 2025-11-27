import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Project.css";

export default function WorkExperience() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="work-section">
            <h1 data-aos="zoom-out" data-aos-delay="200">Work Experience</h1>

            <div className="timeline">

                {/* Experience 1 */}
                <div className="timeline-item" data-aos="fade-right">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024 Jan – Present</div>
                    <div className="timeline-card">
                        <h3>Front-End Developer – Afablez Pvt Ltd</h3>
                        <p>
                            Working as a UI/Front-end developer, building HRMS, ERP, and CRM applications
                            using Angular, TypeScript, SCSS, HTML, CSS, and Bootstrap.
                            Developed reusable Angular components, improved UI/UX, optimized performance,
                            and built responsive dashboards.
                            Also contributed to **Next.js website development** for interactive and SEO-friendly pages.
                        </p>
                    </div>
                </div>

                {/* Experience 2 */}
                <div className="timeline-item" data-aos="fade-left">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021 Feb – 2023 Mar</div>
                    <div className="timeline-card">
                        <h3>GIS Analyst</h3>
                        <p>
                            Trained users on GIS tools, performed spatial data analysis, ensured mapping accuracy,
                            and collaborated on data collection methodologies.
                            Managed surveying vendor workflows ensuring project compliance and delivery standards.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
