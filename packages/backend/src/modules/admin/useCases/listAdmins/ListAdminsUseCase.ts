import { Admin } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import IAdminRepository from '@modules/admin/repositories/IAdminRepository';

@injectable()
class ListAdminsUseCase {
  constructor(
    @inject('AdminRepository')
    private readonly adminRepository: IAdminRepository
  ) {}

  async execute(): Promise<Admin[]> {
    const allAdmins = await this.adminRepository.listAdmins();

    return allAdmins;
  }
}

export default ListAdminsUseCase;
