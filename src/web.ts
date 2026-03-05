import { WebPlugin } from '@capacitor/core';

import type { AppleMapsPlugin } from './definitions';

export class AppleMapsWeb extends WebPlugin implements AppleMapsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
