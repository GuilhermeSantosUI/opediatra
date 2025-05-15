import { HeroSection } from '@/views/environments/website/components/hero-section';

import { AboutSectionCompanyValues } from './components/company-values';
import { Footer } from './components/footer';

export function Website() {
  return (
    <div className="container">
      <HeroSection />

      <AboutSectionCompanyValues />

      <Footer />
    </div>
  );
}
