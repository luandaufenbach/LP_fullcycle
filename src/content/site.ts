import { whatsappUrl } from '@/lib/whatsapp';

// Defina NEXT_PUBLIC_SITE_URL no deploy (veja .env.example). Na Vercel, sem ela, usa o domínio de produção.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000');

export const company = {
  name: 'Full Cycle',
  tagline: 'Consultoria ambiental',
  legalName: 'Full Cycle Consultoria e Restauração Ecológica',
  cnpj: '67.014.820/0001-03',
  foundedIn: '2024',
  serviceArea: 'Santa Catarina',
  description:
    'Consultoria ambiental e restauração ecológica em Santa Catarina, com experiência no Brasil e na Austrália. Licenciamento, CAR, diagnóstico, PRAD e monitoramento.',
};

export const gabriela = {
  name: 'Gabriela Gomes',
  role: 'Bióloga e consultora ambiental',
  photoAlt: 'Gabriela Gomes, bióloga e consultora ambiental da Full Cycle',
};

export const contact = {
  // TODO: trocar pelo e-mail definitivo
  email: 'contato@fullcycle.com.br',
  linkedin: 'https://www.linkedin.com/in/gabriela-gomes-674b5689/',
  whatsapp: whatsappUrl(
    'Olá, Gabriela! Vim pelo site da Full Cycle e gostaria de conversar sobre um projeto ambiental.',
  ),
};

export const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
] as const;

export const guarantees = [
  'Sem compromisso',
  'Resposta em até 2 horas',
  `Atendimento em toda ${company.serviceArea}`,
];
