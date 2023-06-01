import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import { AdminData } from '@ecommerce/zod';
import IAdminRepository from '@modules/admin/repositories/IAdminRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateAdminUseCase {
  constructor(
    @inject('AdminRepository')
    private readonly adminRepository: IAdminRepository
  ) {}

  async execute(data: AdminData): Promise<void> {
    const isAdminExists = await this.adminRepository.findOneByEmail(data.email);

    if (isAdminExists)
      throw new AppError(`Admin ${data.email} already exists`, 409);

    const passwordHashed = await hash(data.password, 8);

    await this.adminRepository.create({
      ...data,
      password: passwordHashed
    });
  }
}

export default CreateAdminUseCase;
