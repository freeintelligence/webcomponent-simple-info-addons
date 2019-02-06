import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'webcomponent-simple-info-addons',
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
      serviceWorker: null // disable service workers
    },
  ]
};
