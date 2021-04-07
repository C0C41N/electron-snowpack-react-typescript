import type * as fs from 'fs';
import type * as electron from 'electron';

class Native {
  public fs!: typeof fs;
  public electron!: typeof electron;
  public app!: typeof electron.remote.app;

  public valid = () => !!(window?.process as any)?.type;

  constructor() {
    if (this.valid()) {
      this.fs = window.require('fs');
      this.electron = window.require('electron');
      this.app = this.electron.remote.app;
    }
  }
}

export const svcNative = new Native();
