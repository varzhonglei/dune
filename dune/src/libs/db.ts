// db.ts
import Dexie, { Table } from 'dexie';

export interface ModFile {
  id?: number;
  name: string;
  // file: File
}

export class MySubClassedDexie extends Dexie {
  files!: Table<ModFile>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      files: '++id, name' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();