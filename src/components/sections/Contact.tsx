import { contact, guarantees } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';

export function Contact() {
  return (
    <section id="contato" className="fc-section fc-on-dark">
      <div className="fc-container">
        <div className="fc-grid fc-cta">
          <Heading className="fc-cta__title">
            Não encontrou sua dúvida ou situação? Fale diretamente com nossas especialistas pelo
            WhatsApp.
          </Heading>
          <div className="fc-stack fc-cta__body">
            <p className="fc-lead">
              Dê o primeiro passo. A primeira conversa é sem custo. Conte sua situação, e uma de
              nossas especialistas indica o caminho mais seguro para regularizar seu projeto, seja
              na área ambiental ou na segurança do trabalho.
            </p>
            <div className="fc-cta__actions">
              <Button variant="accent" size="lg" href={contact.whatsapp} arrow="up-right">
                Iniciar conversa
              </Button>
              <Button variant="outline" size="lg" href={`mailto:${contact.email}`} icon="mail">
                Enviar e-mail
              </Button>
            </div>
          </div>
        </div>

        <ul className="fc-cta__meta">
          {guarantees.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
