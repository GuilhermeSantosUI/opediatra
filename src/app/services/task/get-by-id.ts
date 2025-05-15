import { TaskData } from '@/app/models';
import { api } from '..';

export async function getById(setor: number, id: number): Promise<TaskData> {
  const { signal } = new AbortController();

  const queryParams = new URLSearchParams({
    ...(setor !== 0 && !isNaN(setor) ? { setCodigo: setor.toString() } : {}),
    ...(id !== 0 && !isNaN(id) ? { id: id.toString() } : {}),
  });

  const { data } = await api.get<TaskData>(
    `/serviceOrder/osById?${queryParams.toString()}`,
    { signal },
  );

  return data;
}
