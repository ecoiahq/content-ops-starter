// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  // ...
  modelExtensions: [
    // Extend the "Page" and "Post" models by defining them as page models
    { name: "Page", type: "page" },
    { name: "Post", type: "page" }
  ]
});
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
  // ...
  modelExtensions: [
    // Static URL paths derived from the model's "slug" field
    { name: "Page", type: "page", urlPath: "/{slug}" },
    { name: "Post", type: "page", urlPath: "/blog/{slug}" }
  ]
  siteMap: ({ documents, models }) => {
    // 1. Filter all page models which were defined in modelExtensions
    const pageModels = models.filter((m) => m.type === "page")

    return documents
      // 2. Filter all documents which are of a page model
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      // 3. Map each document to a SiteMapEntry
      .map((document) => {
        // Map the model name to its corresponding URL
        const urlModel = (() => {
            switch (document.modelName) {
                case 'Page':
                    return 'otherPage';
                case 'Blog':
                    return 'otherBlog';
                default:
                    return null;
            }
        })();

        return {
          stableId: document.id,
          urlPath: `/${urlModel}/${document.id}`,
          document,
          isHomePage: false,
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  }
});

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
