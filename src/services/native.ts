import type * as fs from 'fs';
import type * as electron from 'electron';

class Native {
  public fs!: typeof fs;
  public electron!: typeof electron;

  public valid = () => !!(window?.process as any)?.type;

  constructor() {
    if (this.valid()) {
      this.fs = window.require('fs');
      this.electron = window.require('electron');
    }
  }
}

export const svcNative = new Native();
