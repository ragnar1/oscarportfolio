export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e258503915f401f1b05a0aa',
                  title: 'Sanity Studio',
                  name: 'oscarportfolio-studio',
                  apiId: 'd55bbf2d-c51e-48ff-b1b4-67dcbc5eb876'
                },
                {
                  buildHookId: '5e25850368310df945aa5c20',
                  title: 'Portfolio Website',
                  name: 'oscarportfolio',
                  apiId: '8a717659-44a1-497b-8d0c-c68fcfb714d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ragnar1/oscarportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://oscarportfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
