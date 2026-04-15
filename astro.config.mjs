// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://gabrielhayatosuzukipicarelli.github.io',
  base: '/basics',
  integrations: [
    starlight({
      title: 'Claude Code + VS Code',
      description: 'Curso completo: do zero ao deploy com Claude Code e VS Code.',
      defaultLocale: 'pt-BR',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      sidebar: [
        {
          label: '📚 Curso',
          items: [
            { label: '1. Introdução', slug: 'curso/01-introducao' },
            { label: '2. Instalação e Setup', slug: 'curso/02-instalacao-setup' },
            { label: '3. Fundamentos do VS Code', slug: 'curso/03-vscode-fundamentos' },
            { label: '4. Git e GitHub do Zero', slug: 'curso/04-git-github' },
            { label: '5. Como Dar Boas Instruções', slug: 'curso/05-boas-instrucoes' },
            { label: '6. CLAUDE.md — Memória do Projeto', slug: 'curso/06-claude-md' },
            { label: '7. Claude Code Básico', slug: 'curso/07-claude-code-basico' },
            { label: '8. Primeiro Projeto', slug: 'curso/08-primeiro-projeto' },
            { label: '9. Agentes de IA', slug: 'curso/09-agentes-ia' },
            { label: '10. MCP — Superpoderes', slug: 'curso/10-mcp-superpoderes' },
            { label: '11. APIs — Encontrar e Usar', slug: 'curso/11-apis' },
          ],
        },
        {
          label: '🗂 Referência Rápida',
          items: [
            { label: 'Comandos & Flags', slug: 'referencia/comandos-flags' },
            { label: 'Atalhos do VS Code', slug: 'referencia/atalhos-vscode' },
            { label: 'Tipos de Pasta', slug: 'referencia/tipos-de-pasta' },
            { label: 'APIs Úteis', slug: 'referencia/apis-uteis' },
            { label: 'Snippets Prontos', slug: 'referencia/snippets' },
          ],
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/gabrielhayatosuzukipicarelli/basics' },
      ],
    }),
  ],
});
