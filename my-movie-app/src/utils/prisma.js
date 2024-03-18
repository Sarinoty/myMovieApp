// C'est une surcharge du client Prisma qui permet de ne pas créer une nouvelle instance du client Prisma à chaque appel. Code fourni dans la doc.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;