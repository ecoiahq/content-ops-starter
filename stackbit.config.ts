import { defineStackbitConfig, SiteMapEntry } from '@stackbit/sdk';

export default defineStackbitConfig({
  stackbitVersion: '^0.6.0', // ✅ Required field!
  modelExtensions: [
    { name: 'Page', type: 'page', urlPath: '/{slug}' },
    { name: 'Post', type: 'page', urlPath: '/blog/{slug}' }
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');

    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => {
        const slug = document.fields?.slug || document.id;
        const cleanSlug = slug.replace(/^\/+/, '');

        switch (document.modelName) {
          case 'PostFeedLayout':
            return {
              urlPath: '/blog',
              document
            };
          case 'PostLayout':
            return {
              urlPath: `/blog/${cleanSlug}`,
              document
            };
          case 'Page':
            return {
              urlPath: `/${cleanSlug}`,
              document
            };
          default:
            return {
              urlPath: `/other/${cleanSlug}`,
              document
            };
        }
      })
      .filter(Boolean) as SiteMapEntry[];
  }
});
