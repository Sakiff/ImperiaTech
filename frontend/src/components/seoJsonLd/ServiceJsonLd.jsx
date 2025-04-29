import { Helmet } from "react-helmet";

export default function ServiceJsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Rəqəmsal Xidmətlər",
    provider: {
      "@type": "Organization",
      name: "Imperia Groups",
      url: "https://imperiagroups.az",
      logo: "https://imperiagroups.az/images/Logo.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+994557557733",
        contactType: "Customer Service",
        areaServed: "AZ",
        availableLanguage: ["az", "en", "ru"],
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Xidmət Kataloqu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Veb İnkişaf",
            description:
              "SEO optimizasiyalı, sürətli və təhlükəsiz veb saytların hazırlanması.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Qrafik Dizayn",
            description: "Logo, banner, broşür və sosial media post dizaynı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App/Web İnkişafı",
            description:
              "Mobil və veb tətbiqlərin hazırlanması və test olunması.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SMM",
            description: "Sosial media marketinqi və reklam menecmenti.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Texniki Dəstək",
            description: "Sayt və tətbiq problemlərinin 24/7 həlli.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Konsultasiya",
            description: "Texnologiya analizi və yol xəritəsi planlaması.",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
    </Helmet>
  );
}
