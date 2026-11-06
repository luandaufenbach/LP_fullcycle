import { company, contact, gabriela, siteUrl } from '@/content/site';

// Dados estruturados (schema.org) para o Google entender quem é a empresa
export function structuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.legalName,
    description: company.description,
    url: siteUrl,
    email: contact.email,
    taxID: company.cnpj,
    foundingDate: company.foundedIn,
    areaServed: { '@type': 'State', name: company.serviceArea },
    founder: {
      '@type': 'Person',
      name: gabriela.name,
      jobTitle: gabriela.role,
      knowsLanguage: ['pt-BR', 'en', 'es'],
      sameAs: [contact.linkedin],
    },
  };

  // Escapa "<" para o JSON não fechar a tag <script> por engano
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
