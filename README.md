# Full Cycle — landing page

Landing page da Full Cycle Consultoria e Restauração Ecológica (Gabriela Gomes, SC).

Next.js 16 + TypeScript, sem framework de CSS: os estilos seguem o design system da marca
(tokens em `src/styles/tokens.css`).

## Rodando

```bash
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## Onde mexer

- **Textos e dados**: `src/content/` (um arquivo por assunto: serviços, etapas, equipe, clientes, provas, FAQ).
- **Contatos e empresa**: `src/content/site.ts`.
- **Número do WhatsApp**: `src/lib/whatsapp.ts`.
- **Seções da página**: `src/components/sections/`, montadas em `src/app/page.tsx`.
- **Estilos**: `src/styles/`, um arquivo por seção. Mobile primeiro; o layout de desktop
  fica em `@media (min-width: 901px)`.

## Antes de publicar

- [ ] Trocar o número do WhatsApp (hoje é `5511999999999`, de teste).
- [ ] Confirmar o e-mail `contato@fullcycle.com.br`.
- [ ] Definir `NEXT_PUBLIC_SITE_URL` no deploy (veja `.env.example`).
- [ ] Colocar os currículos em `public/curriculos/` (`luana-gomes.pdf` e `gabriela-gomes.pdf`).
- [ ] Adicionar a foto da Luana em `src/assets/` e no perfil dela em `src/content/team.ts`.
- [ ] Foto da Gabriela em alta resolução (a atual tem 400px).
