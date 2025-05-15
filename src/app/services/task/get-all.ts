import { TaskProps } from '@/app/models';

import { api } from '..';

type TaskResponse = {
  pages: number;
  os: Array<TaskProps>;
};

type TaskQueryParams = {
  setor: number;
  page: number;
  size: number;
  filter?: string;
  prjCodigo?: number;
  startDate?: string;
  endDate?: string;
};

export async function getAll({
  setor,
  page,
  size,
  filter,
  prjCodigo,
  startDate,
  endDate,
}: TaskQueryParams): Promise<TaskResponse> {
  const { signal } = new AbortController();

  const queryParams = new URLSearchParams({
    ...(setor !== 0 && !isNaN(setor) ? { setCodigo: setor.toString() } : {}),
    page: page.toString(),
    size: size.toString(),
    ...(filter ? { filter } : {}),
    ...(prjCodigo ? { prjCodigo: prjCodigo.toString() } : {}),
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
  });

  const { data } = await api.get<TaskResponse>(
    `/serviceOrder/os?${queryParams.toString()}`,
    { signal },
  );

  return data;
}
