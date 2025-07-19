'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sigma Group",
    "alternateName": "Sigma Industrial Park Panipat",
    "url": "https://sigmaindustrialpark.com",
    "logo": "https://sigmaindustrialpark.com/logo.png",
    "description": "Sigma Group - Leading real estate developer specializing in premium industrial parks in Panipat, Haryana. RERA approved projects with modern infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panipat",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91383-31357",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://wa.me/919138331357"
    ]
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sigma Industrial Park Panipat",
    "description": "Premium industrial plots and parks in Panipat, Haryana by Sigma Group. RERA approved projects with flexible payment plans.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panipat",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "telephone": "+91-91383-31357",
    "priceRange": "₹27,000 - ₹50,000 per sq yard",
    "paymentAccepted": ["Cash", "Bank Transfer", "EMI"],
    "currenciesAccepted": "INR"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sigmaindustrialpark.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industrial Parks",
        "item": "https://sigmaindustrialpark.com/industrial-parks"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Panipat",
        "item": "https://sigmaindustrialpark.com/panipat"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Industrial Park Panipat is a premium industrial development by Sigma Group located in Panipat, Haryana. It offers RERA approved industrial plots ranging from 300 to 3000 sq yards with modern infrastructure, 24x7 security, and excellent connectivity to major highways."
        }
      },
      {
        "@type": "Question",
        "name": "What are the plot sizes available in Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Industrial Park Panipat offers flexible plot sizes ranging from 300 square yards to 3000 square yards, catering to businesses of all scales from small enterprises to large manufacturing units."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of industrial plots in Sigma Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industrial plots in Sigma Industrial Park Panipat start from below ₹30,000 per square yard. The exact pricing varies based on plot size, location within the park, and payment plan chosen. Flexible payment options are available."
        }
      },
      {
        "@type": "Question",
        "name": "Is Sigma Industrial Park Panipat RERA approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sigma Industrial Park projects are RERA compliant and registered. Sigma Industrial Park 1 has RERA number HRERA-PKL-PKL-503-2023, ensuring complete legal compliance and transparency for investors."
        }
      },
      {
        "@type": "Question",
        "name": "What is the booking amount for Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The booking amount for securing a plot in Sigma Industrial Park Panipat is ₹5 lakhs. This token amount reserves your preferred plot while you complete the documentation and payment process."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities are available in Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Industrial Park Panipat offers world-class facilities including 24x7 security with CCTV surveillance, reliable power supply with backup, water connections, sewage systems, wide internal roads, high-speed internet connectivity, and modern utilities for seamless business operations."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Sigma Industrial Park located in Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Industrial Park 1 is located at Mauli, Barwala, NH-07, Panchkula, just 1 km from Mauli and 25 km from Panchkula with direct highway connectivity. Sigma Industrial Park 2 is at Kakkar Majra, NH-07, Ambala, offering excellent access to major industrial hubs."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a plot in Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a plot in Sigma Industrial Park Panipat by contacting Sigma at +91-91383-31357 or via WhatsApp. Sigma's team will arrange a site visit, provide detailed information, and assist with the booking process. A token amount of ₹5 lakhs secures your plot."
        }
      },
      {
        "@type": "Question",
        "name": "What are the connectivity advantages of Sigma Industrial Park Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Industrial Park Panipat offers excellent connectivity with direct access to NH-07 (National Highway), proximity to major cities like Delhi and Chandigarh, well-connected road and rail networks, and easy access to existing industrial clusters and transportation hubs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the track record of Sigma Group in Panipat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sigma Group has 15+ years of excellence in real estate development with 11+ ongoing projects. The professional team brings 50+ years of combined experience, ensuring quality construction, timely delivery, and customer satisfaction in all industrial projects in Panipat."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sigma Industrial Park Panipat - Industrial Plots",
    "description": "Premium industrial plots in Panipat by Sigma Group. RERA approved development with modern infrastructure, flexible plot sizes from 300-3000 sq yards.",
    "brand": {
      "@type": "Brand",
      "name": "Sigma Group"
    },
    "offers": {
      "@type": "Offer",
      "price": "27000",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "27000",
        "priceCurrency": "INR",
        "unitText": "per square yard"
      },
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Sigma Group"
      }
    },
    "category": "Industrial Real Estate",
    "location": {
      "@type": "Place",
      "name": "Panipat, Haryana, India"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}