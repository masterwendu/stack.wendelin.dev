module.exports = {
  base: '/',
  title: 'stack.wendelin.dev',
  description: 'My technology stack, applications, OS, config, ...; documented with vue-press',
  dest: 'public',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Linux',
        link: '/linux/',
      },
      {
        text: 'Cross-Platform',
        link: '/cross-platform/',
      },
      {
        text: 'Home assistant',
        link: '/home-assistant/',
      },
    ],
  },
  plugins: [
    ['vuepress-plugin-code-copy', true],
  ]
}
