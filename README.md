// npm i prisma -D
// npm i @prisma/client
// npx prisma init --datasource-provider SQLite
// npx prisma migrate dev

Internal server error - Invalid `this.prismaClient.admin.create()` invocation in /home/matheus/Área de Trabalho/projetos/ecommerce/packages/backend/dist/server.js:862:49 859 this.prismaClient = prismaClient2; 860 } 861 async create(data) { → 862 const admin = await this.prismaClient.admin.create( Unique constraint failed on the fields: (`email`)
