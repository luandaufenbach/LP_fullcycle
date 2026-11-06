import { SectionHeader } from '@/components/ui/Typography';
import { ServiceTabs } from './ServiceTabs';

export function Services() {
  return (
    <section id="servicos" className="fc-section fc-on-light">
      <div className="fc-container">
        <SectionHeader
          title={
            <>
              Qual é a <em>sua situação</em>?
            </>
          }
          aside="Selecione o perfil que melhor descreve o seu caso."
        />
        <ServiceTabs />
      </div>
    </section>
  );
}
