import { PriorityEnum, TaskStatus } from './enums.model';
import { User } from './user.model';

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: PriorityEnum;
  assignee?: User;
  dueDate: string;
  tags: string[];
}
