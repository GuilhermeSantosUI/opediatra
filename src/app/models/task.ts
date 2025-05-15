export type TaskProps = {
  id: number;
  client: string;
  user: string;
  joinedDate: string;
  date: Date;
  sector: string;
  system: string;
  title: string;
  priority: string;
  dtEntry: Date;
  dtValidity: Date;
  dtSector: Date;
};

export type TaskDataOs = Omit<
  TaskProps,
  'dtEntry' | 'dtValidity' | 'dtSector'
> & {
  dtEntry: string;
  dtValidity: string;
  dtSector: string;
  description: string;
};

export type TaskData = {
  os: TaskDataOs;
  timeline: Array<TaskTimeline>;
};

export type TaskTimeline = {
  id: number;
  sector: string;
  description: string;
  enterDate: Date;
  leftDate: Date;
  isCurrent: boolean;
};
