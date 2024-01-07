import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import recmaExportFilepath from 'recma-export-filepath';
import recmaMdxDisplayname from 'recma-mdx-displayname';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeMdxTitle from 'rehype-mdx-title';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkMdxImages from 'remark-mdx-images';
import type { Plugin, PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default function doc(): Array<Plugin | PluginOption> {
  let packageJson: any = {};

  try {
    packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
  } catch (e) {
    console.log(chalk.cyan(`[${PACKAGE_NAME}]`), 'Failed to parse package.json. Skip.');
  }

  const plugin: Plugin = {
    name: PACKAGE_NAME,
    config: () => ({
      resolve: {
        alias: {
          [packageJson.name]: './src/',
        },
      },
      define: {
        PACKAGE_NAME: `"${packageJson.name}"`,
        PACKAGE_VERSION: `"${packageJson.version}"`,
      },
    }),
  };

  return [
    {
      enforce: 'pre',
      ...mdx({
        recmaPlugins: [recmaExportFilepath, recmaMdxDisplayname],
        rehypePlugins: [rehypeMdxTitle, rehypeMdxCodeProps],
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter, remarkMdxImages],
      }),
    },
    ...react({ tsDecorators: true }),
    tsconfigPaths(),
    plugin,
  ];
}
