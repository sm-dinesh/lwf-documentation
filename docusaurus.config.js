// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lwf eTender Documentation',
  tagline: 'v1.0.0',
  favicon: 'https://lwfeprocurements.org/static/images/favicon.png',

  // Set the production url of your site here
  url: 'https://sm-dinesh.github.io',
  baseUrl: '/lwf-documentation/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Studio Matrix', // Usually your GitHub org/user name.
  projectName: 'lwf-etender', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'uk', 'ar'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
      es: { label: 'Español' },
      uk: { label: 'Українська' },
      ar: { label: 'العربية', direction: 'rtl' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:'https://github.com/sm-dinesh/lwf-documentation/blob/main/',
          exclude: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        language: ['en', 'fr', 'es', 'ar'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://lwfeprocurements.org/static/images/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Lwf Documentation',
        logo: {
          alt: 'Lwf Documentation',
          src: 'https://lwfeprocurements.org/static/images/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
