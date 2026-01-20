import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AOSInitializer from "@/components/AOSInitializer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://azoneprojects.com"),
  title: {
    template: "%s | Azone Projects",
    default: "Best Assignment Writing & Digital Solutions in UAE | Azone Projects",
  },
  description: "Azone Projects: #1 Rated for Assignment Writing Help, Thesis Support, and Graduation Projects in UAE (Dubai, Sharjah, Abu Dhabi). Expert Web Development & SEO Services.",
  keywords: [
    // English Keywords
    "Assignment Writing UAE",
    "Best Assignment Help Dubai",
    "Thesis Writing Services Sharjah",
    "Graduation Projects Help UAE",
    "Essay Writing Services Abu Dhabi",
    "Academic Writers UAE",
    "Web Development Dubai",
    "Software Projects UAE",
    "Digital Marketing Agency Sharjah",
    "SEO Services Dubai",

    // Arabic Keywords via Transliteration/Translation context
    "مساعدة في الواجبات", // Assignment Help
    "كتابة رسائل علمية", // Thesis Writing
    "مشاريع تخرج", // Graduation Projects
    "خدمات طلابية الامارات", // Student Services UAE
    "تصميم مواقع دبي", // Web Design Dubai
    "تسويق الكتروني", // Digital Marketing
    "حل واجبات جامعية", // University Assignment Help
    "اعداد بحوث الامارات" // Research Preparation UAE
  ],
  authors: [{ name: "Azone Projects" }],
  icons: {
    icon: '/assets/img/favicon.png',
    apple: '/assets/img/favicon.png',
  },
  openGraph: {
    title: "Azone Projects - Best Assignment Help & Digital Solutions in UAE",
    description: "Get premium help with Assignments, Thesis, and Graduation Projects in UAE. Top-rated Web Development & Digital Marketing agency in Dubai & Sharjah.",
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
    title: "Azone Projects - Top Assignment Help & Tech Solutions UAE",
    description: "Expert Assignment Writing, Thesis Help, and Custom Software Solutions in UAE. Contact us today!",
    images: ["/assets/img/Azok.png"],
  },

};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Azone Projects",
  "url": "https://azoneprojects.com",
  "logo": "https://azoneprojects.com/assets/img/Azok.png",
  "description": "Leading Educational Consultancy & IT Solutions Provider in UAE. Specializing in Assignment Help, Thesis Writing, Web Development, and Digital Marketing.",
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
    "availableLanguage": ["en", "ar"]
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
        {/* Analytics - loaded lazily to improve initial load */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4STZXLZXEZ" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4STZXLZXEZ');
          `}
        </Script>

        {/* Third Party Libs - Defer loading */}
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
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
