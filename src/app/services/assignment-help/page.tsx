import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Expert Assignment Help & Graduation Projects in UAE | Dubai, Sharjah, Abu Dhabi',
    description: 'Looking for the best assignment help in UAE? Azone Projects offers premium academic writing, thesis support, capstone projects, and MBA assignment help in Dubai, Sharjah & Abu Dhabi. 100% Plagiarism-free & Confidential.',
    keywords: 'assignment help Dubai, assignment writing services UAE, thesis writing help Sharjah, MBA assignment help Dubai, capstone project writers UAE, graduation project assistance, essay writing services Dubai, dissertation help Abu Dhabi, proofreading services UAE',
    alternates: {
        canonical: '/services/assignment-help',
    },
};

export default function AssignmentHelp() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Assignment Help Services UAE",
        "provider": {
            "@type": "Organization",
            "name": "Azone Projects",
            "url": "https://azoneprojects.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United Arab Emirates"
        },
        "description": "Professional assignment help, thesis writing, and graduation project assistance in Dubai, Sharjah, and Abu Dhabi.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
        }
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is your assignment help service in Dubai confidential?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. At Azone Projects, we strictly maintain 100% confidentiality for all our students. Your personal details and assignment data are never shared with third parties."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide help with Graduation and Capstone Projects?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in comprehensive support for graduation projects and capstone projects. From topic selection and proposal writing to the final report and presentation script, our experts guide you through every step."
                }
            },
            {
                "@type": "Question",
                "name": "Are the assignments plagiarism-free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We guarantee 100% original, plagiarism-free content. Every assignment is written from scratch and checked with advanced plagiarism detection tools like Turnitin before delivery."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help with urgent assignments in UAE?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer express assignment writing services for urgent deadlines. Our team is available 24/7 to ensure you submit your work on time, without compromising quality."
                }
            }
        ]
    };

    return (
        <>
            <Navbar />
            <Script
                id="assignment-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="assignment-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Assignment Help & Academic Writing Services in UAE</h1>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Assignment Help</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ======= Hero / Intro Section ======= */}
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">
                                        <div className="swiper-slide">
                                            <Image src="/assets/img/portfolio/assignments.jpg" width={800} height={600} className="img-fluid" alt="Best Assignment Help in Dubai" />
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src="/assets/img/portfolio/projects.jpg" width={800} height={600} className="img-fluid" alt="Thesis Writing Services UAE" />
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src="/assets/img/portfolio/capstone.jpg" width={800} height={600} className="img-fluid" alt="Capstone Project Helpers" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="portfolio-info">
                                    <div className="section-title" style={{ paddingBottom: '0', textAlign: 'left' }}>
                                        <h2>Trusted Academic Partner</h2>
                                        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#444' }}>The #1 Rated Assignment Help Service in Dubai, Sharjah & UAE</p>
                                    </div>
                                    <p style={{ textAlign: 'justify', marginTop: '20px' }}>
                                        Are you overwhelmed with deadlines? Looking for reliable <strong>assignment help in UAE</strong>?
                                        Azone Projects is your ultimate destination for premium academic support. We understand the pressure of university life,
                                        and our mission is to help you achieve the grades you deserve.
                                    </p>
                                    <p style={{ textAlign: 'justify' }}>
                                        Whether you are studying at a university in Dubai, Sharjah, Abu Dhabi, or anywhere in the Emirates,
                                        our team of Master's and Ph.D. qualified writers is ready to assist you.
                                    </p>
                                    <div className="text-center text-lg-start mt-4">
                                        <a href="https://wa.link/kjwy5b" className="btn-get-started scrollto" style={{
                                            background: '#994eef',
                                            color: '#fff',
                                            borderRadius: '50px',
                                            padding: '10px 30px',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                            fontWeight: '600'
                                        }}>
                                            <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======= Detailed Services Section ======= */}
                        <div className="row gy-4 mt-5">
                            <div className="col-lg-12">
                                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #994eef', display: 'inline-block', paddingBottom: '10px' }}>Our Comprehensive Academic Services</h2>
                                <p className="mt-3">We provide a wide array of academic writing services tailored to the specific needs of students in the UAE:</p>
                            </div>

                            <div className="col-md-6">
                                <div className="service-box mt-4">
                                    <h4 style={{ color: '#994eef' }}><i className="bi bi-journal-check"></i> Standard Assignment Writing</h4>
                                    <p style={{ textAlign: 'justify' }}>From essays and case studies to complex coursework, we handle assignments for all subjects including Management, Marketing, IT, Engineering, Law, and Nursing.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-box mt-4">
                                    <h4 style={{ color: '#994eef' }}><i className="bi bi-mortarboard"></i> Thesis & Dissertation Help</h4>
                                    <p style={{ textAlign: 'justify' }}>Struggling with your Master's thesis or PhD dissertation? Our experts provide end-to-end support, from proposal writing and data analysis (SPSS, Python) to the final defense.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-box mt-4">
                                    <h4 style={{ color: '#994eef' }}><i className="bi bi-lightbulb"></i> Capstone & Graduation Projects</h4>
                                    <p style={{ textAlign: 'justify' }}>We specialize in unique, research-based graduation projects. Get help with topic selection, implementation (coding/design), and report documentation.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-box mt-4">
                                    <h4 style={{ color: '#994eef' }}><i className="bi bi-file-earmark-person"></i> CV & Resume Writing</h4>
                                    <p style={{ textAlign: 'justify' }}>Stand out in the competitive UAE job market with a professionally written CV and LinkedIn profile optimization.</p>
                                </div>
                            </div>
                        </div>

                        {/* ======= Why Choose Us Section ======= */}
                        <div className="row gy-4 mt-5 section-bg" style={{ padding: '40px', borderRadius: '10px', backgroundColor: '#f9f9fa' }}>
                            <div className="col-lg-12 text-center">
                                <h2>Why Choose Azone Projects?</h2>
                                <p>We don't just write; we care about your success.</p>
                            </div>
                            <div className="col-md-4 text-center mt-4">
                                <i className="bi bi-shield-check" style={{ fontSize: '40px', color: '#994eef' }}></i>
                                <h4 className="mt-3">100% Plagiarism Free</h4>
                                <p>We deliver unique content with Turnitin reports to guarantee originality.</p>
                            </div>
                            <div className="col-md-4 text-center mt-4">
                                <i className="bi bi-clock-history" style={{ fontSize: '40px', color: '#994eef' }}></i>
                                <h4 className="mt-3">On-Time Delivery</h4>
                                <p>We respect deadlines. Receive your completed assignment well before the submission date.</p>
                            </div>
                            <div className="col-md-4 text-center mt-4">
                                <i className="bi bi-chat-dots" style={{ fontSize: '40px', color: '#994eef' }}></i>
                                <h4 className="mt-3">24/7 Support</h4>
                                <p>Our friendly support team is available round the clock to answer your queries.</p>
                            </div>
                        </div>

                        {/* ======= FAQ Section ======= */}
                        <div className="row gy-4 mt-5">
                            <div className="col-lg-12">
                                <h2 style={{ color: '#2c3e50' }}>Frequently Asked Questions</h2>
                                <div className="accordion accordion-flush mt-4" id="faqServiceAccordion">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#svc-faq-1">
                                                Is your assignment help service in Dubai confidential?
                                            </button>
                                        </h3>
                                        <div id="svc-faq-1" className="accordion-collapse collapse" data-bs-parent="#faqServiceAccordion">
                                            <div className="accordion-body">
                                                Yes, absolutely. At Azone Projects, we strictly maintain 100% confidentiality for all our students. Your personal details and assignment data are never shared with third parties.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#svc-faq-2">
                                                Do you provide help with Graduation and Capstone Projects?
                                            </button>
                                        </h3>
                                        <div id="svc-faq-2" className="accordion-collapse collapse" data-bs-parent="#faqServiceAccordion">
                                            <div className="accordion-body">
                                                Yes, we specialize in comprehensive support for graduation projects and capstone projects. From topic selection and proposal writing to the final report and presentation script, our experts guide you through every step.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#svc-faq-3">
                                                Are the assignments plagiarism-free?
                                            </button>
                                        </h3>
                                        <div id="svc-faq-3" className="accordion-collapse collapse" data-bs-parent="#faqServiceAccordion">
                                            <div className="accordion-body">
                                                We guarantee 100% original, plagiarism-free content. Every assignment is written from scratch and checked with advanced plagiarism detection tools like Turnitin before delivery.
                                            </div>
                                        </div>
                                    </div>
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

