'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { clientProfiles } from '@/content/services';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Heading, Label } from '@/components/ui/Typography';

const PANEL_ID = 'perfil-painel';
const tabId = (id: string) => `perfil-${id}`;

// Abas no padrão WAI-ARIA: setas, Home e End movem o foco entre os perfis
function nextIndex(key: string, current: number, total: number) {
  switch (key) {
    case 'ArrowDown':
    case 'ArrowRight':
      return (current + 1) % total;
    case 'ArrowUp':
    case 'ArrowLeft':
      return (current - 1 + total) % total;
    case 'Home':
      return 0;
    case 'End':
      return total - 1;
    default:
      return null;
  }
}

export function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const profile = clientProfiles[activeIndex];

  function onKeyDown(event: KeyboardEvent) {
    const next = nextIndex(event.key, activeIndex, clientProfiles.length);
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="fc-grid fc-services">
      <div
        className="fc-services__tabs"
        role="tablist"
        aria-label="Perfil do cliente"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
      >
        {clientProfiles.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={tabId(item.id)}
              aria-selected={isActive}
              aria-controls={PANEL_ID}
              tabIndex={isActive ? 0 : -1}
              className="fc-services__tab"
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.label}</span>
              <Icon name="arrow-right" size={20} />
            </button>
          );
        })}
      </div>

      <div
        className="fc-services__panel"
        role="tabpanel"
        id={PANEL_ID}
        aria-labelledby={tabId(profile.id)}
      >
        <div className="fc-stack fc-services__intro">
          <Heading level={3} size="m">
            {profile.painPoint}
          </Heading>
          <p className="fc-lead">{profile.benefit}</p>
        </div>

        <div className="fc-stack fc-services__list-wrap">
          <Label as="p">Serviços para este perfil</Label>
          <ul className="fc-services__list">
            {profile.services.map((service) => (
              <li key={service.name}>
                <Icon name="check" size={16} />
                <span>
                  {service.acronym && <strong>{service.acronym} — </strong>}
                  {service.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="fc-services__foot">
          <div className="fc-stack fc-services__note">
            <p>Gabriela analisa o seu caso e indica o caminho mais rápido e seguro.</p>
            <Label size="s">Conversa inicial gratuita · Sem compromisso</Label>
          </div>
          <Button href={profile.cta.href} arrow="up-right">
            {profile.cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
