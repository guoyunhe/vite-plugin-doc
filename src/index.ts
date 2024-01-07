import type { Plugin } from 'vite';

export function doc(): Plugin {
  const plugin: Plugin = {
    name: 'rive:doc',
    config: () => ({
      resolve: {
        alias: {
          foo: 'bar',
        },
      },
      plugins: [],
    }),
  };

  return plugin;
}
