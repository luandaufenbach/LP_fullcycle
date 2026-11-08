'use client';

import { useEffect, useRef, useState } from 'react';
import { contact, navItems } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { Brand } from './Brand';

const DESKTOP_QUERY = '(min-width: 1200px)';

// Com o menu aberto, o resto da página sai da ordem de foco e do leitor de tela
function setPageInert(inert: boolean) {
  document.querySelectorAll('main, footer').forEach((el) => {
    (el as HTMLElement).inert = inert;
  });
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => desktop.matches && setIsMenuOpen(false);

    document.body.classList.add('is-locked');
    setPageInert(true);
    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      document.body.classList.remove('is-locked');
      setPageInert(false);
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={cn('fc-header', (isScrolled || isMenuOpen) && 'is-scrolled')}>
        <div className="fc-container fc-header__bar">
          <Brand onClick={closeMenu} />

          <nav className="fc-nav" aria-label="Principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="fc-header__cta">
            <Button size="sm" href={contact.whatsapp} icon="message-circle">
              Falar no WhatsApp
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="fc-header__menu-btn"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </header>

      <div id="menu-mobile" className="fc-menu-sheet fc-on-dark" hidden={!isMenuOpen}>
        <nav aria-label="Menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          variant="accent"
          size="lg"
          href={contact.whatsapp}
          icon="message-circle"
          block
          onClick={closeMenu}
        >
          Falar no WhatsApp
        </Button>
      </div>
    </>
  );
}
