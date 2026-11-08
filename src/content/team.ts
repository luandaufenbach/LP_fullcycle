import type { StaticImageData } from 'next/image';
import gabrielaPhoto from '@/assets/gabriela-gomes.png';
import { contact } from './site';

export type TeamMember = {
  name: string;
  role: string;
  registry: string;
  bio: string;
  /** Sem foto, aparece um quadro provisório com as iniciais */
  photo?: StaticImageData;
  /** Caminho do PDF dentro de /public */
  cv?: string;
  linkedin?: string;
};

export const teamIntro =
  'A Full Cycle nasceu da união de duas irmãs com formações que se completam: uma bióloga e uma engenheira ambiental e de segurança do trabalho. Juntas, cobrimos as etapas de uma demanda ambiental, do diagnóstico à recuperação, sem que você precise contratar vários profissionais.';

// TODO: adicionar a foto da Luana em src/assets e os currículos em public/curriculos/
export const teamMembers: TeamMember[] = [
  {
    name: 'Luana Gomes',
    role: 'Engenheira Ambiental e Sanitária e Engenheira de Segurança do Trabalho',
    registry: 'CREA-SC 086964-9',
    bio: 'São mais de 20 anos de atuação, começando na mineração de carvão no Sul de SC, onde trabalhou com recuperação de áreas degradadas. Passou pela consultoria ambiental e por mais de 12 anos na construção civil, cuidando do licenciamento e da segurança do trabalho em obras. Também é perita ambiental e trabalhista, auditora líder SASSMAQ e instrutora de brigada credenciada pelo Corpo de Bombeiros, e foi professora de pós-graduação em Engenharia de Segurança do Trabalho na UNESC.',
    cv: '/curriculos/luana-gomes.pdf',
    linkedin: 'https://www.linkedin.com/in/luana-de-oliveira-gomes-b30690189/',
  },
  {
    name: 'Gabriela Gomes',
    role: 'Bióloga',
    registry: 'CRBio 088759-D',
    bio: 'Formada pela UFSC, tem mais de 14 anos na área ambiental. Por cinco anos, gerenciou projetos de restauração ecológica na Austrália, com até 40 projetos simultâneos em manguezais, dunas, matas ciliares e florestas. Hoje atua com licenciamento, estudos de vegetação, supressão, monitoramento e projetos de carbono, e é auditora líder em ISO 14001 e ISO 14064. Fala português, inglês e espanhol.',
    photo: gabrielaPhoto,
    cv: '/curriculos/gabriela-gomes.pdf',
    linkedin: contact.linkedin,
  },
];

export const teamNotes = [
  {
    title: 'Por que unimos as duas especialidades',
    text: 'Na prática, percebemos que um mesmo projeto costuma exigir engenharia e biologia ao mesmo tempo. Um loteamento, por exemplo, precisa de licença, inventário de vegetação, autorização de supressão, controle de obra e, às vezes, recuperação de área. Unindo as duas formações, oferecemos um atendimento de ciclo completo, com uma visão integrada do início ao fim e contato direto com quem assina o trabalho.',
  },
  {
    title: 'Do projeto à execução, com parceiros de confiança',
    text: 'Além dos estudos e projetos, coordenamos a execução em campo junto a uma rede de parceiros qualificados: topografia e georreferenciamento, terraplenagem e reconformação do terreno, sondagens, produção de mudas, plantio e manutenção de áreas em recuperação. Você tem um único ponto de contato, e nós acompanhamos cada etapa para que o resultado em campo siga exatamente o que foi projetado e aprovado.',
  },
];

export type TimelineEntry = {
  year: string;
  person: 'luana' | 'gabriela' | 'both';
  title: string;
  text: string;
};

export const timelinePersonLabels: Record<TimelineEntry['person'], string> = {
  luana: 'Luana',
  gabriela: 'Gabriela',
  both: 'Luana e Gabriela',
};

export const timeline: TimelineEntry[] = [
  {
    year: '2006',
    person: 'luana',
    title: 'Engenharia Ambiental e Sanitária – UNESC',
    text: 'Início na mineração de carvão no Sul de SC, com recuperação de áreas degradadas.',
  },
  {
    year: '2009',
    person: 'luana',
    title: 'Consultoria ambiental',
    text: 'Licenciamento e estudos ambientais para empresas da região.',
  },
  {
    year: '2010',
    person: 'luana',
    title: 'Engenharia de Segurança do Trabalho – UNESC',
    text: 'Especialização que une meio ambiente e saúde e segurança do trabalho.',
  },
  {
    year: '2012',
    person: 'gabriela',
    title: 'Ciências Biológicas – UFSC',
    text: 'Formação em Licenciatura e Bacharelado, com foco em ecologia e botânica.',
  },
  {
    year: '2013',
    person: 'gabriela',
    title: 'Início na consultoria ambiental',
    text: 'Estudos ambientais (EAS, Inventários Florestais e RAP) e monitoramento em obras de infraestrutura no sul de SC.',
  },
  {
    year: '2013',
    person: 'luana',
    title: 'Construção civil',
    text: 'Mais de 12 anos à frente do licenciamento e da segurança do trabalho em obras.',
  },
  {
    year: '2016',
    person: 'gabriela',
    title: 'Diploma em Horticultura e gerenciamento de viveiro de plantas – Austrália',
    text: 'Especialização em propagação e manejo de espécies nativas.',
  },
  {
    year: '2016',
    person: 'luana',
    title: 'Docência – UNESC',
    text: 'Professora da pós-graduação em Engenharia de Segurança do Trabalho.',
  },
  {
    year: '2020–2026',
    person: 'gabriela',
    title: 'Restauração ecológica e gestão de projetos – Austrália',
    text: 'Projetos de restauração para mineração e governos; como gestora na Regen Australia, até 40 projetos simultâneos.',
  },
  {
    year: '2026',
    person: 'both',
    title: 'Fundação da Full Cycle',
    text: 'Engenharia e biologia unidas para oferecer soluções ambientais de ciclo completo em SC.',
  },
];
