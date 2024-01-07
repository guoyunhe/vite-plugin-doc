import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import recmaExportFilepath from 'recma-export-filepath';
import recmaMdxDisplayname from 'recma-mdx-displayname';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeMdxTitle from 'rehype-mdx-title';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import type { Plugin } from 'vite';

export default function doc(): Plugin {
  const plugin: Plugin = {
    name: 'rive:doc',
    config: () => ({
      resolve: {
        alias: {
          foo: 'bar',
        },
      },
      plugins: [
        {
          enforce: 'pre',
          ...mdx({
            recmaPlugins: [recmaExportFilepath, recmaMdxDisplayname],
            rehypePlugins: [rehypeMdxTitle, rehypeMdxCodeProps],
            remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
          }),
        },
        react(),
      ],
    }),
  };

  return plugin;
}
