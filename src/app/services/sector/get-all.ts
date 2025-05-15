import { GetAllSectorProps } from '@/app/models';
import { api } from '..';

export async function getAll(): Promise<Array<GetAllSectorProps>> {
  const { signal } = new AbortController();

  const { data } = await api.get<Array<GetAllSectorProps>>(`/sectors`, {
    signal,
  });

  return data;
}
