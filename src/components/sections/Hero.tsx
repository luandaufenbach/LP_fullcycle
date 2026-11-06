import { contact, gabriela } from '@/content/site';
import { heroProof } from '@/content/proof';
import { Button } from '@/components/ui/Button';
import { Portrait } from '@/components/ui/Portrait';
import { Heading, Label } from '@/components/ui/Typography';

export function Hero() {
  return (
    <section id="inicio" className="fc-hero fc-on-light">
      <div className="fc-container">
        <div className="fc-grid fc-hero__grid">
          <div className="fc-hero__text">
            <Label tone="strong" className="fc-hero__kicker">
              Consultoria ambiental · Santa Catarina
            </Label>
            <Heading level={1} size="xl" className="fc-hero__title">
              Sua empresa tem <em>pendências ambientais</em> em SC?
            </Heading>
            <p className="fc-lead fc-hero__lead">
              <strong>{gabriela.name}</strong> resolve licenças, CAR, relatórios ambientais e
              restauração ecológica, com metodologia científica e mais de 12 anos de experiência
              internacional.
            </p>
            <div className="fc-hero__actions">
              <Button size="lg" href={contact.whatsapp} arrow="up-right">
                Falar com Gabriela
              </Button>
              <Button size="lg" variant="outline" href="#servicos" arrow="down">
                Ver como podemos ajudar
              </Button>
            </div>
          </div>

          <figure className="fc-photo fc-hero__media">
            <Portrait sizes="(max-width: 900px) 64px, 420px" preload />
            <figcaption className="fc-photo__caption">
              <Label tone="strong" size="s">
                {gabriela.name}
              </Label>
              <Label size="s">{gabriela.role}</Label>
            </figcaption>
          </figure>
        </div>

        <ul className="fc-proof">
          {heroProof.map((item) => (
            <li key={item}>
              <span className="fc-tick" aria-hidden="true" />
              <Label tone="strong">{item}</Label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
