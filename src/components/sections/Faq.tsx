import { faqItems } from '@/content/faq';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Icon } from '@/components/ui/Icon';
import { Heading } from '@/components/ui/Typography';

export function Faq() {
  return (
    <section id="duvidas" className="fc-section fc-on-light">
      <div className="fc-container fc-grid fc-faq-section">
        <div className="fc-stack fc-sticky fc-faq-section__intro">
          <Heading>Perguntas frequentes</Heading>
          <p className="fc-lead">As dúvidas mais comuns antes de dar o primeiro passo.</p>
        </div>

        <div className="fc-stack fc-faq-section__body">
          {/* name="faq" deixa só uma resposta aberta por vez, sem JavaScript */}
          <div className="fc-faq">
            {faqItems.map((item, index) => (
              <details key={item.question} name="faq" className="fc-faq__item" open={index === 0}>
                <summary className="fc-faq__q">
                  <span>{item.question}</span>
                  <span className="fc-faq__icon" aria-hidden="true">
                    <Icon name="plus" />
                    <Icon name="minus" />
                  </span>
                </summary>
                <p className="fc-faq__a">{item.answer}</p>
              </details>
            ))}
          </div>
          <p>
            Não encontrou sua dúvida?{' '}
            <ArrowLink href="#contato" arrow="down">
              Fale diretamente com a Gabriela
            </ArrowLink>
          </p>
        </div>
      </div>
    </section>
  );
}
