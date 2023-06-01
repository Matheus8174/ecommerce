import { Admin } from '@prisma/client';

interface IAdminRepository {
  create(data: Admin): Promise<Admin>;
  findOneByEmail(email: string): Promise<Admin | null>;
  listAdmins(): Promise<Admin[]>;
  deleteByEmail(email: string): Promise<void>;
}

export default IAdminRepository;
