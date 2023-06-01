import './providers';

import { container } from 'tsyringe';

import IAdminRepository from '@modules/admin/repositories/IAdminRepository';
import AdminsRepository from '@modules/admin/infra/prisma/repositories/AdminsRepository';

container.registerSingleton<IAdminRepository>(
  'AdminRepository',
  AdminsRepository
);
