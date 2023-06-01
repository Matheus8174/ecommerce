import { inject, injectable } from 'tsyringe';

import IAdminRepository from '@modules/admin/repositories/IAdminRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class DeleteAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private readonly adminRepository: IAdminRepository
  ) {}

  async execute(email: string) {
    const adminExists = this.adminRepository.findOneByEmail(email);

    if (!adminExists) throw new AppError(`Admin ${email} don't exists`);

    await this.adminRepository.deleteByEmail(email);
  }
}

export default DeleteAdminUseCase;
