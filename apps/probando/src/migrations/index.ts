import * as migration_20250909_183928 from './20250909_183928';

export const migrations = [
  {
    up: migration_20250909_183928.up,
    down: migration_20250909_183928.down,
    name: '20250909_183928'
  },
];
