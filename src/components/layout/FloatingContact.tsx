'use client';

import { useEffect, useState } from 'react';
import { contact } from '@/content/site';
import { Icon } from '@/components/ui/Icon';

// Topo, serviços e contato já têm botões de WhatsApp; no FAQ ele cobriria os botões +/−
const HIDDEN_ON_SECTIONS = ['inicio', 'servicos', 'duvidas', 'contato'];

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sections = HIDDEN_ON_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const inView = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      setIsVisible(inView.size === 0);
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fc-float"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      data-visible={isVisible}
    >
      <Icon name="message-circle" size={24} strokeWidth={1.75} />
    </a>
  );
}
