import { inject, injectable } from 'tsyringe';

import IAdminRepository from '@modules/admin/repositories/IAdminRepository';
import { PrismaClient } from '@prisma/client';
import { AdminData } from '@ecommerce/zod';

@injectable()
class AdminsRepository implements IAdminRepository {
  constructor(
    @inject('PrismaClient')
    private prismaClient: PrismaClient
  ) {}

  async create(data: AdminData) {
    const admin = await this.prismaClient.admin.create({ data });

    return admin;
  }

  async findOneByEmail(email: string) {
    const admin = await this.prismaClient.admin.findUnique({
      where: {
        email
      }
    });

    return admin;
  }

  async listAdmins() {
    const allAdmins = await this.prismaClient.admin.findMany();

    return allAdmins;
  }

  async deleteByEmail(email: string) {
    await this.prismaClient.admin.delete({
      where: {
        email
      }
    });
  }
}

export default AdminsRepository;
