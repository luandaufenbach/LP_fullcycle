import { whatsappUrl } from '@/lib/whatsapp';

export type Service = { acronym?: string; name: string };

export type ClientProfile = {
  id: string;
  label: string;
  painPoint: string;
  benefit: string;
  services: Service[];
  cta: { label: string; href: string };
};

const greeting = 'Olá, Gabriela! Vim pelo site da Full Cycle.';

export const clientProfiles: ClientProfile[] = [
  {
    id: 'empresa',
    label: 'Empresa ou indústria',
    painPoint: 'Minha empresa precisa de licenças, relatórios ou certificações ambientais.',
    benefit: 'Evite multas e mantenha a conformidade com a legislação ambiental.',
    services: [
      { acronym: 'RAP', name: 'Relatório Ambiental Prévio' },
      { acronym: 'RAS', name: 'Relatório Ambiental Simplificado' },
      { acronym: 'EIA/RIMA', name: 'Estudo e Relatório de Impacto Ambiental' },
      { acronym: 'ISO 14001', name: 'Sistema de gestão ambiental' },
      { acronym: 'ISO 14064', name: 'Inventário de gases de efeito estufa' },
      { name: 'Compensação e reposição florestal' },
    ],
    cta: {
      label: 'Consultar a regularização da empresa',
      href: whatsappUrl(
        `${greeting} Minha empresa precisa de apoio com licenciamento ou certificação ambiental.`,
      ),
    },
  },
  {
    id: 'rural',
    label: 'Produtor rural',
    painPoint: 'Minha propriedade rural precisa de regularização ou diagnóstico ambiental.',
    benefit: 'Acesse crédito rural e opere sem impedimentos legais.',
    services: [
      { acronym: 'CAR', name: 'Cadastro Ambiental Rural' },
      { name: 'Compensação e reposição florestal' },
      { name: 'Inventário florestal' },
      { name: 'Estudo fitossociológico' },
      { name: 'Levantamento faunístico' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: {
      label: 'Regularizar minha propriedade',
      href: whatsappUrl(`${greeting} Quero regularizar minha propriedade rural.`),
    },
  },
  {
    id: 'restauracao',
    label: 'Restauração de área',
    painPoint: 'Tenho uma área degradada e quero restaurar o ecossistema.',
    benefit: 'Transforme áreas degradadas em ecossistemas vivos e produtivos.',
    services: [
      { name: 'Diagnóstico ambiental' },
      { acronym: 'PRAD', name: 'Plano de Recuperação de Áreas Degradadas' },
      { name: 'Restauração ecológica' },
      { name: 'Monitoramento ambiental contínuo' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: {
      label: 'Iniciar a restauração da minha área',
      href: whatsappUrl(`${greeting} Tenho uma área degradada e quero restaurá-la.`),
    },
  },
];
