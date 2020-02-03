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
