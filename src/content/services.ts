import { whatsappUrl } from '@/lib/whatsapp';

export type ServiceGroup = {
  id: string;
  title: string;
  services: string[];
  /** Atalho para outro grupo, para quem entrou pelo grupo errado */
  shortcut?: { label: string; href: string };
  cta: { label: string; href: string };
};

export type Situation = {
  label: string;
  /** Para onde a opção leva, mostrado abaixo do texto */
  destination: string;
  href: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'licenciamento',
    title: 'Licenciamento e Regularização Ambiental',
    services: [
      'Estudo de viabilidade ambiental de terrenos e imóveis',
      'Licenciamento ambiental: LAP, LAI, LAO, AuA e renovações (IMA/SC e municípios)',
      'LAO corretiva para atividades que já funcionam sem licença',
      'Estudos ambientais: EAS, RAP, ECA e EIV',
      'Cadastro Ambiental Rural (CAR) e regularização de propriedades rurais',
      'Monitoramento ambiental e acompanhamento de condicionantes',
      'Planos de gerenciamento de resíduos (PGRS e PGRCC) e outorga de uso da água',
      'Resposta a notificações e autos de infração',
    ],
    shortcut: { label: 'Precisa suprimir vegetação?', href: '#vegetacao' },
    cta: {
      label: 'Falar sobre licenciamento',
      href: whatsappUrl(
        'Olá, vim pelo site e preciso de ajuda com licenciamento ou regularização ambiental.',
      ),
    },
  },
  {
    id: 'vegetacao',
    title: 'Vegetação, Restauração Ecológica e Carbono',
    services: [
      'Inventários florísticos e florestais',
      'Autorização de supressão de vegetação e de corte de árvores isoladas',
      'Levantamento e resgate de fauna e flora',
      'PRAD: projetos de recuperação de áreas degradadas ou alteradas',
      'Projetos e execução de restauração ecológica com espécies nativas',
      'Recomposição de APP e Reserva Legal',
      'Inventário de emissões de gases de efeito estufa (ISO 14064) e viabilidade de projetos de carbono (REDD+ e ARR)',
    ],
    cta: {
      label: 'Falar sobre vegetação e restauração',
      href: whatsappUrl(
        'Olá, vim pelo site e preciso de ajuda com supressão, recuperação de área ou carbono.',
      ),
    },
  },
  {
    id: 'seguranca',
    title: 'Segurança do Trabalho, Gestão e Perícias',
    services: [
      'PGR (NR-01), LTCAT e laudos de insalubridade e periculosidade',
      'Segurança na construção civil (NR-18) e programas específicos (NR-12, NR-20, NR-33, NR-35)',
      'Treinamentos de NRs e formação de brigada de incêndio',
      'Auditorias e implantação de ISO 14001, ISO 9001 e ISO 45001; auditoria SASSMAQ',
      'Perícias ambientais e trabalhistas e assistência técnica',
    ],
    cta: {
      label: 'Falar sobre segurança do trabalho',
      href: whatsappUrl(
        'Olá, vim pelo site e preciso de ajuda com segurança do trabalho ou gestão.',
      ),
    },
  },
];

export const situations: Situation[] = [
  {
    label: 'Vou construir ou lotear',
    destination: 'Licenciamento: viabilidade, LAP/LAI, EAS',
    href: '#licenciamento',
  },
  {
    label: 'Licença do meu negócio',
    destination: 'Licenciamento: LAO, AuA, renovação, LAO corretiva',
    href: '#licenciamento',
  },
  {
    label: 'Imóvel rural',
    destination: 'Licenciamento: CAR e regularização rural',
    href: '#licenciamento',
  },
  {
    label: 'Cortar árvores ou recuperar área',
    destination: 'Vegetação e Restauração',
    href: '#vegetacao',
  },
  {
    label: 'PGR, laudos ou treinamentos',
    destination: 'Segurança do Trabalho',
    href: '#seguranca',
  },
  {
    label: 'Notificação ou multa',
    destination: 'Conversar agora no WhatsApp',
    href: whatsappUrl('Recebi uma notificação ambiental e preciso de orientação'),
  },
];
