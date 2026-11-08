import { serviceGroups, situations, type ServiceGroup } from '@/content/services';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Heading, Label, SectionHeader } from '@/components/ui/Typography';
import { externalLinkProps } from '@/lib/links';

export function Services() {
  return (
    <section id="servicos" className="fc-section fc-on-light">
      <div className="fc-container">
        <SectionHeader
          title="Qual é a sua situação?"
          aside="Escolha a opção mais parecida com o seu caso e veja os serviços certos para ele."
        />

        <ul className="fc-situations">
          {situations.map((situation) => {
            const isExternal = !situation.href.startsWith('#');
            return (
              <li key={situation.label}>
                <a
                  href={situation.href}
                  className="fc-situation"
                  {...externalLinkProps(situation.href)}
                >
                  <span className="fc-situation__label">{situation.label}</span>
                  <Label size="s">{situation.destination}</Label>
                  <span className="fc-situation__arrow">
                    <Icon name={isExternal ? 'arrow-up-right' : 'arrow-down'} size={20} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="fc-service-groups">
          {serviceGroups.map((group) => (
            <ServiceGroupBlock key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGroupBlock({ group }: { group: ServiceGroup }) {
  return (
    <article id={group.id} className="fc-grid fc-service-group">
      <Heading level={3} size="m" className="fc-service-group__title">
        {group.title}
      </Heading>

      <div className="fc-stack fc-service-group__body">
        <ul className="fc-service-list">
          {group.services.map((service) => (
            <li key={service}>
              <Icon name="check" size={16} />
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <div className="fc-service-group__foot">
          <Button href={group.cta.href} icon="message-circle">
            {group.cta.label}
          </Button>
          {group.shortcut && (
            <ArrowLink href={group.shortcut.href} arrow="down">
              {group.shortcut.label}
            </ArrowLink>
          )}
        </div>
      </div>
    </article>
  );
}
