import * as migration_20250918_215213 from './20250918_215213';

export const migrations = [
  {
    up: migration_20250918_215213.up,
    down: migration_20250918_215213.down,
    name: '20250918_215213'
  },
];
