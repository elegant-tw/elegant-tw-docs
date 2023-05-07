// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '言雅 Elegant TW 說明文件',
  tagline: '「言之隨機，雅之名篇。」',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.elegant.tw',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'elegant-tw', // Usually your GitHub org/user name.
  projectName: 'elegant-tw-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/elegant-tw/elegant-tw-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/elegant-tw/elegant-tw-docs/tree/main/packages/create-docusaurus/templates/shared/',
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} Elegant TW.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        gtag: {
          trackingID: 'G-BN5ZFZ7LPK',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '言雅 Elegant TW 說明文件',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/docs/intro',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/blog/rss.xml',
            label: 'RSS 追蹤',
            position: 'right',
          },
          {
            href: 'https://github.com/elegant-tw',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '言雅 Elegant TW 簡介',
                to: '/docs/intro',
              },
              {
                label: '語錄 API 介面',
                to: '/docs/category/語錄-api-介面',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: '部落格',
                to: '/blog',
              },
              {
                label: '聯絡我們',
                to: 'mailto:contact@elegant.tw',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/elegant-tw',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Elegant TW. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
