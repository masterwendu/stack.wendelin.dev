module.exports = {
  base: '/',
  title: 'stack.wendelin.dev',
  description: 'My technology stack, applications, OS, config, ...; documented with vue-press',
  dist: 'public',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Linux applications',
        link: '/linux/',
      },
      {
        text: 'Android apps',
        link: '/android/',
      },
    ],
  }
}
