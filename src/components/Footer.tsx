"use client"

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>AZONE PROJECTS<span>.</span></h3>
                                <p>
                                    <strong>Best Assignment Help & Digital Solutions in Dubai, Sharjah</strong><br />
                                    SPC, Al Zahia Area, Sheikh Mohammed Bin Zayed Rd, Sharjah, United Arab Emirates<br /><br />
                                    <strong>Phone:</strong> +971 55 623 0065<br />
                                    <strong>Email:</strong> projects.azone@gmail.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="https://wa.link/kjwy5b" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="https://instagram.com/azone.projects" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="https://www.snapchat.com/add/azoneprojects" className="snapchat"><i className="bx bxl-snapchat"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    <a href="https://www.tiktok.com/@azoneprojects" className="tiktok"><i className="bx bxl-tiktok"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/web-software">Web & Software Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/digital-marketing">Digital Marketing & SEO</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/graphic-design">Graphic Design & Animation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/content-writing">Blogging & Content Writing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/assignment-help">Assignment Help</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/services/trainings">Online Trainings</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Stay connected and informed with our enriching newsletter.</p>
                            <form action="" method="post">
                                <input type="email" name="email" className="form-control" style={{ display: 'inline-block', width: 'auto' }} />
                                <input type="button" value="Subscribe" className="btn btn-primary" style={{ backgroundColor: '#994eef', border: 'none' }} />
                            </form>
                            <br />
                            <div className="social1-links d-flex gap-2">
                                <a href="https://wa.link/kjwy5b"><img src="/assets/img/whatsappqr.png" style={{ height: '50px', width: '50px' }} alt="WhatsApp" /></a>
                                <a href="https://www.tiktok.com/@azoneprojects"><img src="/assets/img/tiktokqr.png" style={{ height: '50px', width: '50px' }} alt="TikTok" /></a>
                                <a href="https://www.snapchat.com/add/azoneprojects"><img src="/assets/img/snapqr.png" style={{ height: '50px', width: '50px' }} alt="Snapchat" /></a>
                                <a href="https://instagram.com/azone.projects"><img src="/assets/img/insatqr.png" style={{ height: '50px', width: '50px' }} alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>AZONE PROJECTS FZC</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#">AZONE PROJECTS FZC</a>
                </div>
            </div>
        </footer>
    );
}
