import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Project Documentation',
  description: 'Documentation for your project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/your-repo' }
    ]
  }
})
