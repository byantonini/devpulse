import { User } from './user.model';

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ON_HOLD';
  progress: number; // 0 a 100
  members: User[];
  totalTasksCount: number;
  completedTasksCount: number;
}
