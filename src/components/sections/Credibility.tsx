import { credentials, stats } from '@/content/proof';
import { Icon } from '@/components/ui/Icon';
import { Heading, Label } from '@/components/ui/Typography';

export function Credibility() {
  return (
    <section className="fc-section fc-on-highlight" aria-labelledby="credibilidade-titulo">
      <div className="fc-container fc-grid fc-credibility">
        <div className="fc-stack fc-credibility__intro">
          <Heading id="credibilidade-titulo">Números que falam por si</Heading>
          <div className="fc-stack fc-credibility__creds">
            <Heading level={3} size="title">
              Certificações e formação
            </Heading>
            <ul className="fc-creds">
              {credentials.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="fc-stats fc-credibility__stats">
          {stats.map((stat) => (
            <li key={stat.label} className="fc-stat">
              <span className="fc-stat__value">{stat.value}</span>
              <Label tone="strong">{stat.label}</Label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
