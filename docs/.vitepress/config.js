import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Starter Pack',
  description: 'Documentation for the Agent Starter Pack',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Agents', link: '/agents/' },
      { text: 'CLI', link: '/cli/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Deployment', link: '/guide/deployment' },
          { text: 'Local Development', link: '/guide/local-development' }
        ]
      },
      {
        text: 'Agents',
        items: [
          { text: 'Overview', link: '/agents/' }
        ]
      },
      {
        text: 'CLI Reference',
        items: [
          { text: 'Overview', link: '/cli/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoogleCloudPlatform/agent-starter-pack' }
    ]
  }
})
