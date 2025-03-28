import {
  defineStackbitConfig,
  DocumentStringLikeFieldNonLocalized,
  SiteMapEntry
} from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from 'sources/local/models';

const gitContentSource = new GitContentSource({
  rootPath: __dirname,
  contentDirs: ['content'],
  models: Object.values(allModels),
  assetsConfig: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/'
  }
});

export const config = defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  styleObjectModelName: 'ThemeStyle',
  contentSources: [gitContentSource],
  presetSource: {
    type: 'files',
    presetDirs: ['sources/local/presets']
  },
  siteMap: ({ documents, models }): SiteMapEntry[] => {
    const pageModels = models.map((model) => model.name);

    return documents
      .filter((document) => pageModels.includes(document.modelName))
      .map((document) => {
        // Try to get the slug from multiple possible fields
        const slug =
          (document.fields.slug as DocumentStringLikeFieldNonLocalized)?.value ||
          (document.fields.path as DocumentStringLikeFieldNonLocalized)?.value ||
          (document.fields.permalink as DocumentStringLikeFieldNonLocalized)?.value ||
          document.id?.split('/').pop(); // fallback: use filename

        if (!slug) {
          console.warn(`Skipping document ${document.id}: no usable slug`);
          return null;
        }

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
          default:
            return {
              urlPath: `/${cleanSlug}`,
              document
            };
        }
      })
      .filter(Boolean); // Filter out nulls
  }
});

export default config;
