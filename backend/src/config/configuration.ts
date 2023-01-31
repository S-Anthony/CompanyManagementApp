import { registerAs } from '@nestjs/config/dist';
import { EnumConfig } from './enum/enumConfig';
import { pgConfig } from './postgres.config';

export const databaseConfig = registerAs(EnumConfig.DATABASE, () => ({
  pg: {
    ...pgConfig(),
  },
}));
