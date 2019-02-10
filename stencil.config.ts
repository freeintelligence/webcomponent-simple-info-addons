import { Config } from '@stencil/core';
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'webcomponent-simple-info-addons',
  plugins: [ sass() ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'www',
      dir: 'docs',
      baseUrl: '/webcomponent-simple-info-addons',
      serviceWorker: null, // disable service workers
      collapseWhitespace: false,
    },
  ]
};
