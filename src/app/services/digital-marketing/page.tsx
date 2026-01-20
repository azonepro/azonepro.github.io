import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Top Digital Marketing & SEO Agency UAE | Grow Your Business',
    description: 'Azone Projects is the leading SEO agency in Dubai and Sharjah. We provide result-oriented digital marketing, PPC, and social media management for UAE businesses.',
    keywords: 'digital marketing agency Dubai, SEO services Sharjah, best SEO expert UAE, social media marketing Dubai, PPC management UAE, online advertising Dubai',
    alternates: {
        canonical: '/services/digital-marketing',
    },
};

export default function DigitalMarketing() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Digital Marketing & SEO</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Digital Marketing & SEO</li>
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
                                            <img src="/assets/img/portfolio/seo.jpg" alt="SEO" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/ppc.png" alt="PPC Advertising" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/Soicalmedia.jpg" alt="Social Media Marketing" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/conetentmarketing.jpg" alt="Content Marketing" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/emailmarketing.jpg" alt="Email Marketing" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>Professional Digital Marketing & SEO Services for UAE Businesses</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        In today's ever-evolving digital landscape, it's not enough to have a remarkable product or service – you need to stand out, be seen, and connect with your target audience.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>Search Engine Optimization (SEO)</strong>: Our SEO strategies are meticulously crafted to boost your online visibility.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Pay-Per-Click (PPC) Advertising</strong>: Maximize your ROI with our data-driven campaigns.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Social Media Marketing</strong>: Engage and inspire your audience across all platforms.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Content Marketing</strong>: Value-driven content that captivates and converts.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Email Marketing</strong>: Nurture leads with personalized, strategic campaigns.</li>
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
