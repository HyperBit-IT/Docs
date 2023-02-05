// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HyperBit - Documentation',
    tagline: 'Documentazione per vari progetti sviluppati da HyperBit',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://docs.hyperbit.it',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'HyperBit SRLs', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'it',
        locales: ['it', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                },
                blog: false,
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
                title: 'Documentazione',
                logo: {
                    alt: 'HyperBit SRLs Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {to: '/intro', label: 'Docs', position: 'left'},
                    {to: '/RubyBill/intro', label: 'RubyBill', position: 'left'},
                    {to: '/RubyTik/intro', label: 'RubyTik', position: 'left'},
                    {to: '/GemNode/intro', label: 'GemNode', position: 'left'},
                    {
                        href: 'https://gitlab.com/HyperBit-IT',
                        label: 'GitLab',
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
                                label: 'RubyBill',
                                to: '/RubyBill/intro',
                            },
                            {
                                label: 'RubyBill',
                                to: '/RubyTik/intro',
                            },
                            {
                                label: 'GemNode',
                                to: '/GemNode/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'HyperBit SRLs',
                                href: 'https://hyperbit.it',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/J87gjfxQf8',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/hyperbitit',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Website',
                                to: 'https://hyperbit.it',
                            },
                            {
                                label: 'Main GitLab',
                                href: 'https://gitlab.com/HyperBit-IT',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} HyperBit SRLs, Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
