import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Academic Online Training & Programming Courses UAE | Dubai',
    description: 'Advance your career with Azone Projects. We offer professional online training in programming, web design, and academic success across Sharjah and Dubai.',
    keywords: 'academic training UAE, online programming courses Dubai, web design training Sharjah, university courses UAE, professional tutoring Dubai',
};

export default function Trainings() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Academic Online Trainings</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Academic Online Trainings</li>
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
                                            <img src="/assets/img/portfolio/learning.jpg" alt="Learning" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/trainings.jpg" alt="Trainings" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/success.jpg" alt="Success" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/trainingonline.png" alt="Online Training" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/programming.jpg" alt="Programming" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>Expert Online Training & Academic Success Programs in UAE</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        Traditional learning methods often fall short. Azone Projects offers flexible learning solutions to empower students with knowledge and confidence.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>Personalized Tutoring</strong>: One-on-one sessions tailored to your learning style and goals.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Interactive Resources</strong>: Video lectures, quizzes, and study guides for complex subjects.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Exam Preparation</strong>: Tools and strategies for standardized, entrance, and final exams.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Advanced Subject Courses</strong>: In-depth insights from experienced instructors.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Tech Trainings</strong>: specialized training in computer programming and web development.</li>
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
