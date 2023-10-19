import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'components/assets', dest: 'assets' }],
    },
  ],

  testing: {
    browserHeadless: 'new',
  },
  plugins: [
    sass({
      injectGlobalPaths: ['src/components/assets/variables.scss'],
    }),
  ],
};
