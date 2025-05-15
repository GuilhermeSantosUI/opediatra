import { OsBySetProps } from '@/app/models';
import { api } from '..';

export async function getCountOsBySet(setor: number): Promise<OsBySetProps> {
  const { signal } = new AbortController();

  const { data } = await api.get<OsBySetProps>(
    `/serviceOrder/osBySet${setor == 0 ? '' : '?setor=' + setor}`,
    { signal },
  );

  return data;
}
