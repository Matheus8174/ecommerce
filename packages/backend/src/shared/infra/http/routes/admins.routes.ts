import { Router } from 'express';

import createAdminController from '@modules/admin/useCases/createAdmin';
import listAdminsController from '@modules/admin/useCases/listAdmins';
import deleteAdminController from '@modules/admin/useCases/deleteAdmin';

const usersRoutes = Router();

usersRoutes.get('/', listAdminsController);
usersRoutes.post('/', createAdminController);
usersRoutes.delete('/:email', deleteAdminController);

export default usersRoutes;
