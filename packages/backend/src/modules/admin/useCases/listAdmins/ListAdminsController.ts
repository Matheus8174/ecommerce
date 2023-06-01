import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAdminsUseCase from './ListAdminsUseCase';

class ListAdminsController {
  async execute(request: Request, response: Response) {
    const listAdminsUseCase = container.resolve(ListAdminsUseCase);

    const allAdmins = await listAdminsUseCase.execute();

    return response.json(allAdmins);
  }
}

export default ListAdminsController;
