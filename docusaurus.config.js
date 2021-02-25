module.exports = {
  title: 'OS Data Hub Documentation',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OrdnanceSurvey', // Usually your GitHub org/user name.
  projectName: 'os-data-hub-documentation', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
   
    navbar: {
      title: 'Data Hub',
      logo: {
        alt: 'OS Data Hub',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'os-maps-api/web-developers',
          label: 'Web Developers',
          position: 'right',
        },
        {
          to: 'os-maps-api/data-scientists',
          label: 'Data Scientists',
          position: 'right',
        }, 
        {
          to: 'os-maps-api/gis-analysts',
          label: 'GIS Analysts',
          position: 'right',
        },
        {
          href: 'https://github.com/johnx25bd/os-data-hub-documentation',
          // label: 'GitHub',
          className: "header-github-link",
          position: 'right',
          'aria-label': 'GitHub repository',
        },
 
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: "https://labs.os.uk/public/os-data-hub-examples/",
          label: 'Code Examples',
          position: 'left',
        },
        {
          href: "https://labs.os.uk/public/os-data-hub-tutorials/",
          label: 'Tutorials',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ordnancesurvey',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ordnancesurvey',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/johnx25bd/os-data-hub-documentation/edit/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
