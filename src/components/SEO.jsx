import React, { useEffect } from "react";

export default function SEO({
  title = "Webberg — Build Your Digital Solution | Web Development, UI/UX & SEO Agency in Chennai",
  description = "Webberg is a Chennai-based digital agency offering web development, UI/UX design, SEO, branding and social media services for businesses across India.",
  canonical = "https://webberg.in/",
  ogImage = "https://webberg.in/og-image.png",
  ogType = "website",
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to set link rel="canonical"
    const setCanonicalLink = (url) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
      }
      element.setAttribute("href", url);
    };

    // 2. Core Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("name", "theme-color", "#07090e");
    setCanonicalLink(canonical);

    // 3. Open Graph Meta Tags
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Webberg");
    setMetaTag("property", "og:locale", "en_IN");

    // 4. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 5. JSON-LD Structured Data Injection
    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Webberg",
        "url": "https://webberg.in/",
        "publisher": {
          "@type": "Organization",
          "name": "Webberg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://webberg.in/favicon-512x512.png"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Webberg",
        "url": "https://webberg.in",
        "logo": "https://webberg.in/favicon-512x512.png",
        "email": "support@webberg.in",
        "telephone": "+91 78100 59511",
        "sameAs": [
          "https://www.instagram.com/webbergdevelopment/",
          "https://www.linkedin.com/company/webberg"
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Chennai" },
          { "@type": "AdministrativeArea", "name": "Bengaluru" },
          { "@type": "Country", "name": "India" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Webberg",
        "url": "https://webberg.in",
        "logo": "https://webberg.in/asset/logo.png",
        "image": ogImage,
        "telephone": "+91 78100 59511",
        "email": "support@webberg.in",
        "sameAs": [
          "https://www.instagram.com/webbergdevelopment/",
          "https://www.linkedin.com/company/webberg"
        ],
        "priceRange": "₹₹–₹₹₹",
        "areaServed": ["Chennai", "Bengaluru", "India"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Agency Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom high-performance React website development for businesses in Chennai, Bengaluru, and across India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design",
                "description": "User interface design, experience optimization, and digital prototyping."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO (Search Engine Optimization)",
                "description": "Local SEO and organic search visibility optimization."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding & Logo Design",
                "description": "Visual identity creation, logo design, and brand system guidelines."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Social media content, channel growth, and audience engagement strategy."
              }
            }
          ]
        }
      }
    ];

    let scriptEl = document.querySelector('script[id="webberg-jsonld"]');
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.setAttribute("id", "webberg-jsonld");
      scriptEl.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaData);
  }, [title, description, canonical, ogImage, ogType]);

  return null;
}
