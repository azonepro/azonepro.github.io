"use client"

import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Preloader from '@/components/Preloader';

export default function Home() {
  useEffect(() => {
    // Resilient initialization for Isotope and GLightbox
    const initPortfolio = () => {
      const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement;
      if (portfolioContainer && (window as any).Isotope) {
        const portfolioIsotope = new (window as any).Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });

        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
        portfolioFilters.forEach((filter) => {
          filter.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioFilters.forEach((el) => el.classList.remove('filter-active'));
            filter.classList.add('filter-active');

            portfolioIsotope.arrange({
              filter: (filter as HTMLElement).getAttribute('data-filter')
            });

            if ((window as any).AOS) {
              (window as any).AOS.refresh();
            }
          });
        });
        return true; // Success
      }
      return false; // Still waiting
    };

    const initLightbox = () => {
      if ((window as any).GLightbox) {
        (window as any).GLightbox({
          selector: '.portfolio-lightbox'
        });
        return true;
      }
      return false;
    };

    const checkInterval = setInterval(() => {
      const isotopeDone = initPortfolio();
      const lightboxDone = initLightbox();
      if (isotopeDone && lightboxDone) {
        clearInterval(checkInterval);
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center justify-content-center" style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/img/hero-bg.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        >
          <source src="/assets/img/bg3video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2
        }}></div>

        <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>The Best Digital Solutions & Assignment Help in UAE<span>.</span></h1>
              <h2>Your Trusted Partner for Reliable Academic Help, Web Development, and SEO Services in Dubai & Sharjah</h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3><a href="/services/web-software">Web & Software Development</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3><a href="/services/digital-marketing">Digital Marketing & SEO</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line"></i>
                <h3><a href="/services/graphic-design">Graphic Designing & Animations</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3><a href="/services/content-writing">Blogging & Content Writing</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3><a href="/services/assignment-help">Assignment Help</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3><a href="/services/trainings">Academic Online Trainings</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="/assets/img/about.jpg" className="img-fluid" alt="About Azone Projects" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>Leading IT & Educational Consultancy in Sharjah, UAE</h3>
                <p style={{ textAlign: 'justify' }}>
                  Azone Projects is a dynamic and innovative IT & Educational Consultancy company, based in the heart of Sharjah Publishing City Freezone. Established in 2019, we have rapidly grown to become a trusted name in the industry, known for our commitment to excellence and dedication to delivering top-notch IT & Educational Consultancy services.<br /><br />
                  At Azone Projects, we're more than a company – we're your dedicated partner in advancing IT excellence and fostering educational growth. Explore our offerings and join us in propelling your aspirations to new heights.
                </p>
                <br />
                <p style={{ textAlign: 'justify' }}>Our major services are:</p>
                <ul>
                  <li><i className="ri-check-double-line"></i> <b>Software Design & Development</b> </li>
                  <li><i className="ri-check-double-line"></i> <b>Digital Marketing & SEO Services</b> </li>
                  <li><i className="ri-check-double-line"></i> <b>Graphic & Animation Design</b></li>
                  <li><i className="ri-check-double-line"></i> <b>Writing Help & Educational Consulting Services</b></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><img src="/assets/img/clients/rezaro.png" className="img-fluid" alt="Rezaro" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/Sirucx.png" className="img-fluid" alt="Sirucx" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/alafrah.jpg" className="img-fluid" alt="Al-Afrah" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/Dante.jpeg" className="img-fluid" alt="Dante" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/rightlinecargo.jpg" className="img-fluid" alt="RightLine Cargo" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/dream.JPG" className="img-fluid" alt="Dream" /></div>
                <div className="swiper-slide"><img src="/assets/img/clients/Azok.png" className="img-fluid" alt="Azone" /></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="image col-lg-6" style={{ backgroundImage: 'url("/assets/img/features.jpg")' }} data-aos="fade-right"></div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-receipt"></i>
                  <h4>Website Design and Development</h4>
                  <p style={{ textAlign: 'justify' }}>Craft visually appealing and user-friendly websites tailored to your brand's identity and customer preferences, utilizing the latest design trends and cutting-edge technologies.</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Educational Consultancy and Assignment Help</h4>
                  <p style={{ textAlign: 'justify' }}>Provide expert guidance and support for students and professionals, offering assistance with assignments, projects, and educational training across various subjects and disciplines.</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-images"></i>
                  <h4>Digital Marketing and SEO Services</h4>
                  <p style={{ textAlign: 'justify' }}>Elevate your online presence through strategic digital marketing campaigns, including search engine optimization (SEO), social media marketing, and targeted outreach, driving increased visibility and engagement.</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-shield"></i>
                  <h4>Software Development and Application Solutions</h4>
                  <p style={{ textAlign: 'justify' }}>Develop custom software solutions and web applications that address specific business needs, streamlining processes, enhancing efficiency, and delivering seamless user experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><a href="/services/web-software">Web Development</a></h4>
                  <p>Elevate your online presence with our cutting-edge web design and development expertise.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-slideshow"></i></div>
                  <h4><a href="/services/digital-marketing">Digital Marketing & SEO</a></h4>
                  <p>Amplify your reach and enhance your online visibility through our strategic Digital Marketing & SEO solutions.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><a href="/services/graphic-design">Graphic & Animation Design</a></h4>
                  <p>Transform your ideas into captivating visuals with our Graphic & Animation Design mastery.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href="/services/content-writing">Blogging & Content Writing</a></h4>
                  <p>Unleash the power of words with our expert blogging and content writing services.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-book-open"></i></div>
                  <h4><a href="/services/assignment-help">Assignment Help</a></h4>
                  <p>Empowering your academic journey with comprehensive assignment and project assistance.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-laptop"></i></div>
                  <h4><a href="/services/trainings">Online Trainings</a></h4>
                  <p>Unlock your potential with our flexible and comprehensive online training solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check our Portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-web">Web</li>
                  <li data-filter=".filter-graphics">Graphic Design</li>
                  <li data-filter=".filter-logo">Logo Design</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              {/* Web Development */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/web1.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Interior Work" />
                  <div className="portfolio-info">
                    <h4>Interior Work</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/web2.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Azone Projects" />
                  <div className="portfolio-info">
                    <h4>Azone Projects</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              {/* Graphics Design */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/gd1.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Gloves" />
                  <div className="portfolio-info">
                    <h4>Gloves</h4>
                    <p>Graphics</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/gd2.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="SHAPP" />
                  <div className="portfolio-info">
                    <h4>SHAPP</h4>
                    <p>Graphics</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-graphics">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/gd6.jpg" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Fast Test Centre" />
                  <div className="portfolio-info">
                    <h4>Fast Test Centre</h4>
                    <p>Graphics</p>
                  </div>
                </div>
              </div>

              {/* Logo Design */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/lg1.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="SHAPP Logo" />
                  <div className="portfolio-info">
                    <h4>SHAPP Logo</h4>
                    <p>Logo</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/lg2.png" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Beautiful You" />
                  <div className="portfolio-info">
                    <h4>Beautiful You</h4>
                    <p>Logo</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <Image src="/assets/img/portfolio/lg4.jpg" width={800} height={600} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt="Anaj Mandi" />
                  <div className="portfolio-info">
                    <h4>Anaj Mandi</h4>
                    <p>Logo</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>Ready to unlock new horizons? Contact us today and let's shape your success together!</p>
              <div className="social-buttons d-flex justify-content-center gap-2 flex-wrap mt-4">
                <a className="btn btn-dark social-btn" href="https://wa.link/kjwy5b" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-whatsapp me-2"></i> WhatsApp</a>
                <a className="btn btn-dark social-btn" href="https://www.behance.net/azoneprojects" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-behance me-2"></i> Behance</a>
                <a className="btn btn-dark social-btn" href="https://www.snapchat.com/add/azoneprojects" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-snapchat-ghost me-2"></i> Snapchat</a>
                <a className="btn btn-dark social-btn" href="https://instagram.com/azone.projects" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-instagram me-2"></i> Instagram</a>
                <a className="btn btn-dark social-btn" href="https://www.linkedin.com/yourprofile" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-linkedin me-2"></i> LinkedIn</a>
                <a className="btn btn-dark social-btn" href="https://www.tiktok.com/@azoneprojects" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-tiktok me-2"></i> TikTok</a>
                <a className="btn btn-dark social-btn" href="mailto:projects.azone@gmail.com" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fa fa-envelope me-2"></i> Email</a>
                <a className="btn btn-dark social-btn" href="https://t.me/azoneprojects" target="_blank" style={{ border: '1px solid #994eef', background: '#292929' }}><i className="fab fa-telegram me-2"></i> Telegram</a>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Empowering Excellence</h2>
              <p>Azone Projects Pioneering IT and Educational Solutions</p>
            </div>

            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100" style={{ backgroundImage: 'url("/assets/img/counts-img.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}></div>
              <div className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                <div className="content d-flex flex-column justify-content-center">
                  <h3>Elevating Success - Azone Projects - Where Commitment Meets Achievement</h3>
                  <p style={{ textAlign: 'justify' }}>
                    With more than 5 years of excellence in the fields of IT and education services, we continue to be the trusted partner for those seeking innovation, guidance, and growth.
                  </p>
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                        <p style={{ textAlign: 'justify' }}><strong>Happy Clients</strong> showcase our unwavering commitment to excellence and their transformative success.</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                        <p style={{ textAlign: 'justify' }}><strong>Projects</strong> that inspire innovation and drive results.</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock"></i>
                        <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="4" className="purecounter"></span>
                        <p style={{ textAlign: 'justify' }}><strong>Years of experience</strong> shaping exceptional solutions.</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="4" className="purecounter"></span>
                        <p style={{ textAlign: 'justify' }}><strong>Achievements</strong> that fuel our drive for excellence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= FAQ Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>FAQ</h2>
              <p>Frequently Asked Questions</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="accordion accordion-flush" id="faqAccordion">

                  <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                        Where can I find the best assignment help in the UAE?
                      </button>
                    </h3>
                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Azone Projects offers premium, high-quality assignment help services across Dubai, Abu Dhabi, and Sharjah. We specialize in academic consultation, thesis support, and graduation projects for students in various disciplines.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                        Do you provide website development services in Dubai?
                      </button>
                    </h3>
                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, we are a leading web development agency in Dubai focusing on custom software design, e-commerce solutions, and corporate website development tailored to UAE business needs.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                        How can Azone Projects help with SEO and digital marketing?
                      </button>
                    </h3>
                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Our SEO experts in Sharjah use data-driven strategies to boost your website's visibility on Google. We handle social media management, PPC advertising, and content marketing to scale your brand across the Emirates.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Where can I find the best assignment help in the UAE?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Azone Projects offers premium, high-quality assignment help services across Dubai, Abu Dhabi, and Sharjah. We specialize in academic consultation, thesis support, and graduation projects."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide website development services in Dubai?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we are a leading web development agency in Dubai focusing on custom software design, e-commerce solutions, and corporate website development."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can Azone Projects help with SEO and digital marketing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our SEO experts in Sharjah use data-driven strategies to boost your website's visibility on Google, including social media management and PPC advertising."
                      }
                    }
                  ]
                })
              }}
            />
          </div>
        </section>

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>SPC, Al Zahia Area, Sheikh Mohammed Bin Zayed Rd, Sharjah, United Arab Emirates</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>projects.azone@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+971 55 623 0065</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Preloader />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}
