import { company, contact, navItems } from '@/content/site';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Label } from '@/components/ui/Typography';
import { externalLinkProps } from '@/lib/links';
import { Brand } from './Brand';

const contactLinks: { label: string; href: string; icon: IconName }[] = [
  { label: 'WhatsApp', href: contact.whatsapp, icon: 'message-circle' },
  { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
  { label: contact.email, href: `mailto:${contact.email}`, icon: 'mail' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="fc-footer fc-on-deep">
      <div className="fc-container">
        <div className="fc-grid fc-footer__top">
          <div className="fc-footer__brand">
            <Brand />
            <p>
              Consultoria ambiental e restauração ecológica com experiência no Brasil e na
              Austrália.
            </p>
          </div>

          <nav className="fc-footer__col fc-footer__col--nav" aria-label="Rodapé">
            <Label as="p">Navegação</Label>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="fc-footer__col fc-footer__col--contact">
            <Label as="p">Contato</Label>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} {...externalLinkProps(link.href)}>
                    <Icon name={link.icon} size={16} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fc-footer__legal">
          <span>
            © {year} {company.legalName}
          </span>
          <span>
            CNPJ {company.cnpj} · Atendimento em {company.serviceArea}
          </span>
        </div>
      </div>
    </footer>
  );
}
