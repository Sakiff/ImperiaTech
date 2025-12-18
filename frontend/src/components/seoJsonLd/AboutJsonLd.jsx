import { Helmet } from "react-helmet";

export default function ServiceJsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Haqqımızda - Imperia Groups",
    url: "https://imperiagroups.az/about",
    mainEntity: {
      "@type": "Organization",
      name: "Imperia Groups",
      url: "https://imperiagroups.az",
      logo: "https://imperiagroups.az/images/Logo.jpg",
      description:
        "Imperia Groups - Azərbaycanda fəaliyyət göstərən gənc və innovativ texnologiya komandasıdır. Komandamız veb sayt hazırlanması, SEO, təhsil platformaları və digər rəqəmsal xidmətlər təklif edir.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nərimanov rayonu, Bakı",
        postalCode: "AZ1000",
        addressLocality: "Bakı",
        addressCountry: "AZ",
      },
      sameAs: [
        "https://www.instagram.com/imperiagroups",
        "https://www.linkedin.com/company/imperia-tech",
      ],
      founder: {
        "@type": "Person",
        name: "Davud Qədirov",
        jobTitle: "CEO",
      },
      employee: [
        {
          "@type": "Person",
          name: "Davud Qədirov",
          jobTitle: "CEO",
        },
        {
          "@type": "Person",
          name: "Mirze",
          jobTitle: "Frontend Developer",
        },
        {
          "@type": "Person",
          name: "Hüseyn",
          jobTitle: "MERN Stack Developer",
        },
        {
          "@type": "Person",
          name: "Sakif",
          jobTitle: "Frontend Developer",
        },
        {
          "@type": "Person",
          name: "Hüseyin",
          jobTitle: "Backend Developer",
        },
        {
          "@type": "Person",
          name: "Sənan",
          jobTitle: "Frontend Developer",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "info@imperiagroups.az",
        telephone: "+994557557733",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
    </Helmet>
  );
}
