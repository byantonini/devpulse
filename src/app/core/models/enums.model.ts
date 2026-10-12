export enum PriorityEnum {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';

export type UserRole = 'ADMIN' | 'DEVELOPER' | 'DESIGNER' | 'PRODUCT_OWNER';
