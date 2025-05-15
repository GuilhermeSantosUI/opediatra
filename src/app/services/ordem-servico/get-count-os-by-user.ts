import { CountOsByUser } from '@/app/models';
import { api } from '..';

export async function getCountOsByUser(
  setor: number,
): Promise<Array<CountOsByUser>> {
  const { signal } = new AbortController();
  const { data } = await api.get<Array<CountOsByUser>>(
    `/serviceOrder/osByUser${
      setor == 0 || isNaN(setor) ? '' : '?setor=' + setor
    }`,
    { signal },
  );

  return data;
}
