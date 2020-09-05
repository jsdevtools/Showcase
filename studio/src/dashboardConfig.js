export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f52e4179e0e9701214f3baa',
                  title: 'Sanity Studio',
                  name: 'showcase-studio',
                  apiId: '17d88b03-f1ba-458b-9cf6-ecb3ef15f6f9'
                },
                {
                  buildHookId: '5f52e4179282d600c5b07f3f',
                  title: 'Blog Website',
                  name: 'showcase-web',
                  apiId: '1a0b10a1-17a4-495c-80ae-08061b85f635'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JEStaubach/Showcase',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://showcase-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
