import { differentials } from '@/content/proof';
import { Heading, SectionHeader } from '@/components/ui/Typography';

export function Differentials() {
  return (
    <section className="fc-section fc-on-sunken" aria-labelledby="diferenciais-titulo">
      <div className="fc-container">
        <SectionHeader
          id="diferenciais-titulo"
          title="Por que escolher a Full Cycle"
          aside="Conhecimento técnico construído em dois países, aplicado com rigor a cada projeto."
        />
        <ul className="fc-diffs">
          {differentials.map((item) => (
            <li key={item.title} className="fc-diff">
              <Heading level={3} size="heading">
                {item.title}
              </Heading>
              <p className="fc-body">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
