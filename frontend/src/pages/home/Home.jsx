// React import not required with new JSX transform
import { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import FAQ from "../../components/faq/FAQ";
import Testimonials from "../../components/testimonials/Testimonials";
import Benefits from "../../components/benefits/Benefits";
import { Helmet } from "react-helmet";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ana səhifə | Imperia Groups</title>
        <meta
          name="description"
          content="İmperia Tech, texnologiya və innovasiyanı birləşdirərək müasir bizneslərə yüksək keyfiyyətli həllər təklif edir. Ən son texnoloji yeniliklər və xidmətlərlə tanış olun."
        />

        <meta
          name="keywords"
          content="Imperia Groups, texnologiya, innovasiya, biznes həlləri, müasir texnologiyalar, frontend, backend, rəqəmsal inkişaf"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ana səhifə | Imperia Groups" />

        <meta
          property="og:description"
          content="İmperia Tech, texnologiya və innovasiyanı birləşdirərək müasir bizneslərə yüksək keyfiyyətli həllər təklif edir. Ən son texnoloji yeniliklər və xidmətlərlə tanış olun."
        />

        <meta
          property="og:image"
          content="https://imperiagroups.az/images/Logo.jpg" // Logo linkini istifadə edin
        />

        <meta property="og:url" content="https://imperiagroups.az" />
      </Helmet>

      <Hero />
      <Features />
      <Benefits />
      <FAQ />
      <Testimonials />
    </>
  );
}
