
import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '^0.6.0',
  modelExtensions: [
    { name: 'Page', type: 'page', urlPath: '/{slug}' },
    { name: 'Post', type: 'page', urlPath: '/blog/{slug}' }
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page');

    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => {
        const rawSlug = document.fields?.slug || document.id;
        const cleanSlug = String(rawSlug).replace(/^\/+/, '');

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

// Hidden form for Netlify detection
// Paste this into a static page like pages/index.tsx:
/*
<form name="contact" method="POST" data-netlify="true" hidden>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
*/
