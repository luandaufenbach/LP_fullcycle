import { FloatingContact } from '@/components/layout/FloatingContact';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Team } from '@/components/sections/Team';
import { Audience } from '@/components/sections/Audience';
import { Contact } from '@/components/sections/Contact';
import { Credibility } from '@/components/sections/Credibility';
import { Differentials } from '@/components/sections/Differentials';
import { Faq } from '@/components/sections/Faq';
import { History } from '@/components/sections/History';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Steps } from '@/components/sections/Steps';
import { Button } from '@/components/ui/Button';
import { structuredData } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
      <Button href="#conteudo" size="sm" className="skip-link">
        Pular para o conteúdo
      </Button>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Services />
        <Steps />
        <Team />
        <History />
        <Audience />
        <Differentials />
        <Credibility />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
