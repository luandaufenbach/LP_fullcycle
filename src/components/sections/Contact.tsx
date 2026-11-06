import { contact, gabriela, guarantees } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Portrait } from '@/components/ui/Portrait';
import { Heading, Label } from '@/components/ui/Typography';

export function Contact() {
  return (
    <section id="contato" className="fc-section--xl fc-on-dark">
      <div className="fc-container">
        <div className="fc-cta__inner">
          <Heading>
            Dê o primeiro passo. <em>A conversa é gratuita.</em>
          </Heading>
          <p className="fc-lead">
            Conte sua situação e Gabriela indica o caminho mais rápido e seguro para resolver o seu
            desafio ambiental.
          </p>

          <div className="fc-byline">
            <Portrait sizes="56px" />
            <div className="fc-byline__text">
              <Label tone="strong">{gabriela.name}</Label>
              <Label size="s">{gabriela.role}</Label>
            </div>
          </div>

          <div className="fc-cta__actions">
            <Button variant="accent" size="lg" href={contact.whatsapp} arrow="up-right">
              Iniciar conversa
            </Button>
            <Button variant="outline" size="lg" href={`mailto:${contact.email}`} icon="mail">
              Enviar e-mail
            </Button>
          </div>

          <div className="fc-cta__meta">
            {guarantees.map((item) => (
              <Label key={item}>{item}</Label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
