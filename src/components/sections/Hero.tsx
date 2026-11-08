import { contact } from '@/content/site';
import { heroProof } from '@/content/proof';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';

export function Hero() {
  return (
    <section id="inicio" className="fc-hero fc-on-light">
      <div className="fc-container">
        <div className="fc-grid fc-hero__content">
          <Heading level={1} size="xl" className="fc-hero__title">
            Consultoria ambiental, licenciamento e segurança do trabalho em Santa Catarina
          </Heading>
          <p className="fc-lead fc-hero__lead">
            Trabalhamos com regularização ambiental, PGR e laudos de segurança do trabalho,
            autorização para corte de árvores e recuperação de áreas. Viabilizamos seu projeto com
            segurança jurídica, do diagnóstico à recuperação.
          </p>
          <div className="fc-hero__actions">
            <Button size="lg" href={contact.whatsapp} arrow="up-right">
              Falar com um especialista
            </Button>
            <Button size="lg" variant="outline" href="#servicos" arrow="down">
              Ver serviços
            </Button>
          </div>
        </div>

        <ul className="fc-proof">
          {heroProof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
