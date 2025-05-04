import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site-level configuration
  title: 'Agent Starter Pack',
  description: 'Accelerate your agent development on Google Cloud',

  // Add custom CSS for Roboto font
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    ['style', {}, `
      :root {
        --vp-font-family-base: 'Roboto', sans-serif;
        --vp-font-family-mono: 'Roboto Mono', monospace;
        --vp-c-text-1: 0.9rem;
        --vp-font-size-base: 0.9rem;
      }
    `]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Agents', link: '/agents/overview' },
      { text: 'CLI', link: '/cli/README.md' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Why Starter Pack?', link: '/guide/why_starter_pack' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Deployment', link: '/guide/deployment' },
          { text: 'Data Ingestion', link: '/guide/data-ingestion' },
          { text: 'Observability', link: '/guide/observability' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' }
        ]
      },
      {
        text: 'Agents',
        items: [
          { text: 'Overview', link: '/agents/overview' },

        ]
      },
      {
        text: 'CLI Reference',
        items: [
          { text: 'create', link: '/cli/create' },
          { text: 'setup-cicd', link: '/cli/setup_cicd' }
        ]
      }
    ],
    // Add or modify the socialLinks array
    socialLinks: [
      // This entry adds the GitHub icon link to the top right navbar
      { 
        icon: 'github', // VitePress recognizes 'github' and uses the correct icon
        link: 'https://github.com/GoogleCloudPlatform/agent-starter-pack' 
      },
      // You can add other links too (e.g., twitter, discord)
      // { icon: 'twitter', link: '...' },
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.'
    }
  }
})
