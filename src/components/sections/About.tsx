import { profileFacts, timeline } from '@/content/about';
import { contact, gabriela } from '@/content/site';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Heading, Label } from '@/components/ui/Typography';

export function About() {
  return (
    <section id="sobre" className="fc-section--xl fc-on-light">
      <div className="fc-container">
        <div className="fc-grid fc-about">
          <div className="fc-stack fc-about__intro">
            <Heading>Quem conduz o seu projeto</Heading>
            <p className="fc-lead">
              À frente da Full Cycle está {gabriela.name}, bióloga formada pela UFSC, com uma
              trajetória em restauração ecológica e consultoria ambiental construída na Austrália.
            </p>
            <p className="fc-body">
              Hoje, Gabriela aplica em Santa Catarina o que aprendeu em campo nos dois países:
              diagnóstico criterioso, planejamento técnico e acompanhamento até o resultado.
            </p>
          </div>

          <div className="fc-stack fc-about__aside">
            <dl className="fc-facts">
              {profileFacts.map((fact) => (
                <div key={fact.label}>
                  <Label as="dt">{fact.label}</Label>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <ArrowLink href={contact.linkedin}>Ver perfil no LinkedIn</ArrowLink>
          </div>
        </div>

        <div className="fc-about__history">
          <Heading level={3} size="m">
            Uma trajetória construída em <em>dois continentes</em>
          </Heading>
          <ol className="fc-timeline">
            {timeline.map((item) => (
              <li key={item.year + item.title}>
                <span className="fc-timeline__year">{item.year}</span>
                <Label className="fc-timeline__place">{item.place}</Label>
                <Heading level={4} size="title" className="fc-timeline__title">
                  {item.title}
                </Heading>
                <p className="fc-timeline__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
