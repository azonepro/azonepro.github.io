import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Expert Assignment Help & Graduation Projects in UAE',
    description: 'Struggling with assignments? Azone Projects offers the best assignment help, capstone project guidance, and graduation project support in Dubai, Sharjah, and Abu Dhabi. 100% original & high-quality academic support.',
    keywords: 'assignment help UAE, graduation projects help Dubai, academic support Sharjah, capstone project help, CV writing services UAE, university assignment help UAE',
};

export default function AssignmentHelp() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Assignment Help</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Assignment Help</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ======= Portfolio Details Section ======= */}
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/assignments.jpg" alt="Assignments" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/projects.jpg" alt="Projects" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/capstone.jpg" alt="Capstone Project" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/graduation.jpg" alt="Graduation Project" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/cvresume.jpg" alt="CV and Resume Writing" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>Empowering Your Academic Journey with Azone Projects: Assignment, Project, Capstone Project, and Graduation Project Help</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        At Azone Projects, we understand the challenges students face. Our comprehensive academic help services are designed to elevate your learning experience and ensure your success.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>Assignment Assistance</strong>: Experts covering a wide range of subjects with well-researched solutions.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Project Support</strong>: Guidance from planning and research to execution and presentation.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Capstone Project Guidance</strong>: Mentorship and feedback to create a standout final project.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Graduation Project Help</strong>: Thorough research and content development for your final milestone.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>CV & Resume Services</strong>: Professional writing to capture your achievements and aspirations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
