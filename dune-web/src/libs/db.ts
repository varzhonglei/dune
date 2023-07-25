// db.ts
import Dexie, { Table } from 'dexie';

export interface ModFile {
  id?: number;
  name: string;
  file: Uint8Array
}

export class MySubClassedDexie extends Dexie {
  files!: Table<ModFile>; 

  constructor() {
    super('DuneMods');
    this.version(1).stores({
      files: '++id, name, file' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();