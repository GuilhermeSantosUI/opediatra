import { ProjectProps } from '@/app/models';
import { api } from '..';

type ProjectResponse = Array<ProjectProps>;

export async function getAll(): Promise<ProjectResponse> {
  const { signal } = new AbortController();

  const { data } = await api.get<ProjectResponse>(`/project`, { signal });

  return data;
}
