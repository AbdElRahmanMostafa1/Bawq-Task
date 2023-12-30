export interface IClient {
  _id?: string;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  dataLifeTime?: number;
  createdAt?: number;
  deletedAt?: number;
  protectAgainstAutoDisable?: boolean;
  maintenanceAppEnabled?: boolean;
}
