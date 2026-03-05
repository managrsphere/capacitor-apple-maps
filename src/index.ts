import { registerPlugin } from '@capacitor/core';

import type { AppleMapsPlugin } from './definitions';

const AppleMaps = registerPlugin<AppleMapsPlugin>('AppleMaps', {
  web: () => import('./web').then((m) => new m.AppleMapsWeb()),
});

export * from './definitions';
export { AppleMaps };
