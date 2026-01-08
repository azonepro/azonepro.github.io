import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AOSInitializer from "@/components/AOSInitializer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://azoneprojects.com"),
  title: {
    template: "%s | Azone Projects",
    default: "Azone Projects - #1 Assignment Help & Digital Solutions in UAE",
  },
  description: "Azone Projects: Your trusted partner for premium assignment help, expert software development, and results-driven digital marketing in Dubai, Sharjah, Abu Dhabi, Ajman and across the UAE. Elevate your academic and business success today.",
  keywords: [
    "assignment help UAE",
    "assignment help Dubai",
    "best assignment help Sharjah",
    "graduation projects help UAE",
    "web development Dubai",
    "software development companies UAE",
    "digital marketing services UAE",
    "SEO services Dubai",
    "graphic design Sharjah",
    "academic consultancy UAE",
    "3D animation services UAE",
    "CV writing services Dubai"
  ],
  authors: [{ name: "Azone Projects" }],
  openGraph: {
    title: "Azone Projects - Premium Academic & Digital Solutions in UAE",
    description: "Empowering your journey with top-tier assignment help and innovative digital solutions. Trusted by thousands in Dubai, Sharjah, and Abu Dhabi.",
    url: "https://azoneprojects.com",
    siteName: "Azone Projects",
    images: [
      {
        url: "/assets/img/Azok.png",
        width: 1200,
        height: 630,
        alt: "Azone Projects Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azone Projects - UAE's Top Academic & Digital Partner",
    description: "Premium assignment help and creative digital solutions in the UAE. Serving Dubai, Sharjah, and beyond.",
    images: ["/assets/img/Azok.png"],
  },
  alternates: {
    canonical: "https://azoneprojects.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Azone Projects",
  "url": "https://azoneprojects.com",
  "logo": "https://azoneprojects.com/assets/img/Azok.png",
  "description": "Leading IT & Educational Consultancy in the UAE, providing premium assignment help, web development, and digital marketing services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sharjah",
    "addressRegion": "UAE",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-55-623-0065",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": ["en", "Arabic"]
  },
  "sameAs": [
    "https://www.facebook.com/azoneprojects",
    "https://www.instagram.com/azoneprojects"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        <AOSInitializer />
        <div id="google_translate_element" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, backgroundColor: '#994eef40', color: 'white' }}></div>

        {children}
        <Chatbot />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4STZXLZXEZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4STZXLZXEZ');
          `}
        </Script>

        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />

        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'ar,en',
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />
      </body>
    </html>
  );
}
