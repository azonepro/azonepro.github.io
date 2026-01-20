import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: '3D Animation & Graphic Design Services Dubai | Azone Projects',
    description: 'Premium graphic design and 3D animation in Sharjah and Dubai. We specialize in logo design, motion graphics, and UI/UX for brands across the United Arab Emirates.',
    keywords: '3D animation services Dubai, graphic design Sharjah, logo design UAE, motion graphics Dubai, UI/UX agency Sharjah, creative design Dubai',
    alternates: {
        canonical: '/services/graphic-design',
    },
};

export default function GraphicDesign() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Graphic Design & Animation</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Graphic Design & Animation</li>
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
                                            <img src="/assets/img/portfolio/logo.jpg" alt="Logo Design" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/modeling.jpg" alt="3D Modeling" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/uxui.jpg" alt="UI/UX Design" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/videoswork.png" alt="Video Work" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/motiongraphics.png" alt="Motion Graphics" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>Stunning Graphic Design & Immersive 3D Animations in UAE</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        In the visual realm of today's business landscape, first impressions are crucial. Capture your audience with mesmerising animations and captivated graphics.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>Branding and Logo Design</strong>: Iconic logos that embody your values.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>3D Modeling and Animation</strong>: Immersive experiences that leave a lasting impression.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>UI/UX Design</strong>: Intuitive interfaces that optimize user interactions.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Explainer Videos</strong>: Animations that engage, educate, and enthrall.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Motion Graphics</strong>: Breathing life into your content with dynamic flair.</li>
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
