import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'SEO Content Writing & Blogging Services UAE | Dubai & Sharjah',
    description: 'Get high-quality, SEO-optimized content from Azone Projects. We provide professional blogging, website copywriting, and article writing services in the UAE.',
    keywords: 'content writing services Dubai, blog writing UAE, SEO copywriting Sharjah, website content writer UAE, article writing Dubai, professional writers UAE',
};

export default function ContentWriting() {
    return (
        <>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Blogging & Content Writing</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Blogging & Content Writing</li>
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
                                            <img src="/assets/img/portfolio/secopt.jpg" alt="SEO Optimized Content" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/webcontent.jpg" alt="Website Content" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/productdescription.jpg" alt="Product Description" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/socialmediacontent.jpg" alt="Social Media Content" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="/assets/img/portfolio/emailcampaings.jpg" alt="Email Campaigns" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <h3 style={{ textAlign: 'justify' }}>High-Impact SEO Content Writing & Blogging Services in UAE</h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        Compelling and engaging content is the key to capturing your audience's attention. At Azone Projects, we craft words that resonate, inform, and drive action.
                                    </p>
                                    <ul>
                                        <li style={{ textAlign: 'justify' }}><strong>SEO-Optimized Content</strong>: Blog posts that rank high and drive organic traffic.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Website Content</strong>: Captivating copy that introduces your brand and compels action.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Product Descriptions</strong>: Irresistible highlights that convince potential customers.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Social Media Content</strong>: Strong online presence through engaging and informative posts.</li>
                                        <li style={{ textAlign: 'justify' }}><strong>Email Campaigns</strong>: Persuasive emails that drive conversions and build loyalty.</li>
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
