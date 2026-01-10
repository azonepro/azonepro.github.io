"use client"

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isInnerPage = pathname !== '/';

    return (
        <header id="header" className={`fixed-top ${isInnerPage ? 'header-inner-pages' : ''}`}>
            <div className="container d-flex align-items-center justify-content-lg-between">
                <a href="/" className="logo me-auto me-lg-0">
                    <img src="/assets/img/Azok.png" alt="Azone Projects Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
                </a>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className={`nav-link scrollto ${!isInnerPage ? 'active' : ''}`} href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/#about">About</a></li>
                        <li><a className="nav-link scrollto" href="/#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="/#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="/#cta">Call To Action</a></li>
                        <li><a className="nav-link scrollto" href="/#counts">Achievements</a></li>
                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        <li>
                            <a className="nav-link scrollto" href="https://wa.link/kjwy5b">
                                <img src="/assets/img/whatsapp.png" style={{ height: '30px' }} alt="WhatsApp" />
                            </a>
                        </li>
                        <li className="nav-link scrollto" id="google_translate_element_nav">
                            <span style={{ fontSize: '12px', marginLeft: '10px' }}>Arabic Language (عربي)</span>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}
