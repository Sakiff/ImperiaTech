import { Helmet } from "react-helmet";

const SEOJsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Imperia Groups",
    image: "https://imperiagroups.az/images/Logo.jpg",
    url: "https://imperiagroups.az",
    email: "info@imperiagroups.az",
    telephone: "+994 55 755 77 33",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baku",
      addressCountry: "AZ",
    },
    sameAs: ["https://www.instagram.com/imperia_groups"],
    description:
      "Veb sayt hazırlanması, SEO xidməti, konsultasiya, texniki dəstək və sayt yığılması üzrə peşəkar xidmətlər.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Azerbaijan",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEOJsonLd;
