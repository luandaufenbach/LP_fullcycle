import { processSteps } from '@/content/steps';
import { Heading, Label, SectionHeader } from '@/components/ui/Typography';

export function Steps() {
  return (
    <section id="como-funciona" className="fc-section fc-on-dark">
      <div className="fc-container">
        <SectionHeader
          title="O ciclo completo, etapa por etapa"
          aside="Um processo claro para você saber o que acontece em cada fase do projeto."
        />
        <ol className="fc-steps">
          {processSteps.map((step, index) => (
            <li key={step.title} className="fc-step">
              <Label tone="accent">Etapa {index + 1}</Label>
              <Heading level={3} size="heading">
                {step.title}
              </Heading>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
