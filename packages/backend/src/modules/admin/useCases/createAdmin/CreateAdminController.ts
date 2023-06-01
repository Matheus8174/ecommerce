import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { AdminData, AdminSchema } from '@ecommerce/zod';

import CreateAdminUseCase from './CreateAdminUseCase';

class CreateAdminController {
  async execute(request: Request, response: Response) {
    const { email, password }: AdminData = request.body;

    AdminSchema.parse({
      email,
      password
    });

    const createAdminUseCase = container.resolve(CreateAdminUseCase);

    await createAdminUseCase.execute({
      email,
      password
    });

    return response.status(201).end();
  }
}

export default CreateAdminController;
