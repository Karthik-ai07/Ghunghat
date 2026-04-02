"use client";

import React from "react";

/**
 * Component to inject JSON-LD schema into the page.
 * Standardizes Organization and WebSite schema for Ghunghat.
 */
export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ghunghat",
    "alternateName": "Ghunghat Beauty",
    "url": "https://ghunghat.com",
    "logo": "https://ghunghat.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://instagram.com/ghunghat",
      "https://facebook.com/ghunghat"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no. 58, SuperMarket, PNT Colony",
      "addressLocality": "Raebareli",
      "addressRegion": "UP",
      "postalCode": "229001",
      "addressCountry": "IN"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ghunghat",
    "url": "https://ghunghat.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ghunghat.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
