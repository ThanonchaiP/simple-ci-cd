import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  search: {
    one: (search: string) => [search],
    engine: (userKey: string) => [userKey],
    dashboard: null,
    suggest: (search: string | null) => [search ?? ''],
    suggestCorrect: (search: string) => [search],
    dataFile: (dataFileId: string) => [dataFileId],
  },
});
