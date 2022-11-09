import { PrismaClient } from '@prisma/client'
/* eslint-disable */
declare global {
  var prisma: PrismaClient
}
/* eslint-disable */
// let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
