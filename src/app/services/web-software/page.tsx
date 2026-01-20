import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Custom Web & Software Development Services in Dubai',
    description: 'Build your next digital product with Azone Projects. We offer premium web development, custom software solutions, and mobile app development tailored for Sharjah and UAE businesses.',
    keywords: 'web development Dubai, custom software UAE, mobile app development Sharjah, e-commerce solutions UAE, software house Dubai, web design Sharjah',
    alternates: {
        canonical: '/services/web-software',
    },
};

export default function WebSoftware() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Web & Software Development</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Web & Software Development</li>
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
                                            <img src="/assets/img/portfolio/Webdesign01.jpg" alt="Web Design" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/softwaredev02.jpg" alt="Software Development" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/mobileapplication.jpg" alt="Mobile Application" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/ecommerce.png" alt="E-commerce" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>Welcome to Azone Projects: Your Partner in Web and Software Development</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        At Azone Projects, we are your trusted partner in turning your digital dreams into reality. Our expert team of web and software developers is dedicated to delivering cutting-edge solutions tailored to your unique needs.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>Web Development</strong>: Our web development services are designed to create stunning, functional, and user-friendly websites.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Software Development</strong>: We craft powerful, scalable, and custom software applications.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Mobile App Development</strong>: Reach your customers on the go with our mobile app development services.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>E-Commerce Solutions</strong>: Elevate your online business with our robust e-commerce solutions.</li>
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
