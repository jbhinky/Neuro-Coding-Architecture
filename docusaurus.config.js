
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Theophilus Documentation',
  tagline: 'Universal Delayed Consciousness Architecture',
  url: 'https://theophilus.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jbhinky', // Usually your GitHub org/user name.
  projectName: 'Neuro-Coding-Architecture', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jbhinky/Neuro-Coding-Architecture/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
