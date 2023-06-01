import { Router } from 'express';

import adminRoutes from './admins.routes';

const routes = Router();

const prefix = '/api/v1';

routes.use(`${prefix}/admin`, adminRoutes);

export default routes;
