import { audienceIntro, projectPhases } from '@/content/audience';
import { Label, SectionHeader } from '@/components/ui/Typography';

export function Audience() {
  return (
    <section id="clientes" className="fc-section fc-on-dark">
      <div className="fc-container">
        <SectionHeader title="Para quem trabalhamos" aside={audienceIntro} />

        {/* Cabeçalho só visual: no celular cada linha já se explica sozinha */}
        <div className="fc-phases__head" aria-hidden="true">
          <Label>Fase do projeto</Label>
          <Label>Como apoiamos</Label>
        </div>
        <dl className="fc-phases">
          {projectPhases.map((item) => (
            <div key={item.phase} className="fc-phase">
              <dt className="fc-phase__name">{item.phase}</dt>
              <dd className="fc-phase__support">{item.support}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
