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
    // 💡 Treat all models as pages temporarily to ensure sitemap populates
    const pageModels = models.map((model) => model.name);

    return documents
      .filter((document) => pageModels.includes(document.modelName))
      .map((document) => {
        const slugField = document.fields.slug as DocumentStringLikeFieldNonLocalized;
        let slug = slugField?.value;

        if (!slug) {
          console.warn(`Skipping document ${document.id}: missing slug`);
          return null;
        }

        // Normalize slug by removing leading slashes
        slug = slug.replace(/^\/+/, '');

        switch (document.modelName) {
          case 'PostFeedLayout':
            return {
              urlPath: '/blog',
              document
            };
          case 'PostLayout':
            return {
              urlPath: `/blog/${slug}`,
              document
            };
          default:
            return {
              urlPath: `/${slug}`,
              document
            };
        }
      })
      .filter(Boolean); // Remove any nulls
  }
});

export default config;
