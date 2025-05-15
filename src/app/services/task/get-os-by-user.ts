import { TaskProps } from '@/app/models';

import { api } from '..';

type TaskResponse = {
  pages: number;
  os: Array<TaskProps>;
};

type TaskQueryParams = {
  userId: number;
  setCodigo: number;
  page: number;
  size: number;
};

export async function getOsByUser({
  userId,
  page,
  size,
  setCodigo,
}: TaskQueryParams): Promise<TaskResponse> {
  const { signal } = new AbortController();

  const queryParams = new URLSearchParams({
    ...(userId !== 0 && !isNaN(userId) ? { userId: userId.toString() } : {}),
    page: page.toString(),
    size: size.toString(),
    setCodigo: setCodigo.toString(),
  });

  const { data } = await api.get<TaskResponse>(
    `/serviceOrder/osByUserId?${queryParams.toString()}`,
    { signal },
  );

  return data;
}
