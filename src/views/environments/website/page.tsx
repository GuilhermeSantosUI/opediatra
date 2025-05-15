import { HeroSection } from '@/views/environments/website/components/hero-section';

import { AboutSectionCompanyValues } from './components/company-values';
import { ContatoSection } from './components/contact';
import { Footer } from './components/footer';
import { ComoFuncionaSection } from './components/how-works';
import { NossosPediatrasSection } from './components/our-doctors';
import { EspecialidadesSection } from './components/specialties';

export function Website() {
  return (
    <div className="container">
      <HeroSection />

      <AboutSectionCompanyValues />

      <NossosPediatrasSection />

      <ComoFuncionaSection />

      <EspecialidadesSection />

      <ContatoSection />

      <Footer />
    </div>
  );
}
