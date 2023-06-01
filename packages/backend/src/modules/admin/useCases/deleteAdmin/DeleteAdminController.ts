import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteAdminUseCase from './DeleteAdminUseCase';

class DeleteAdminController {
  async execute(request: Request, response: Response) {
    const { email } = request.params;

    const deleteAdminUseCase = container.resolve(DeleteAdminUseCase);

    await deleteAdminUseCase.execute(email);

    return response.status(200).end();
  }
}

export default DeleteAdminController;
