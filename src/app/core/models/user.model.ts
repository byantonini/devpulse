import { UserRole } from './enums.model';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: UserRole;
}
