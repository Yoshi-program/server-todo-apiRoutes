import type { Prisma, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// type TestRes = {
//   title: string
//   content: string
// }

// type Users = {
//   name: string
// }

const handler = async (req: NextApiRequest, res: NextApiResponse<User | { error: string }>) => {
  // const { content }: ToDo = req.body
  // const result: TestRes = {
  //   title: `id: ${req.query.id}, authorization header: ${req.headers.authorization}`,
  //   content: `body[test]: ${req.body['test']}, cookie[test]: ${req.cookies.test}`,
  // }
  // const feed = await prisma.post.findMany({
  //   where: { published: true },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  // })
  const userBody: Prisma.UserCreateInput = {
    name: 'Yoshi',
  }
  // userBody = {
  //   name: 'Yoshi',
  // }
  let statusCode = 200
  const result = await prisma.user
    .create({
      data: userBody,
    })
    .catch((err) => {
      statusCode = 500
      console.log(err)
      return { error: 'Failed to read user' }
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  res.status(statusCode).json(result)
}
// console.log('つながった！！')
// console.log(req.body.name)
// console.log(req.body.age)
// const response = await fetch('https://jsonplaceholder.typicode.com/users/')
// const users = await response.json()
// res.status(200).send(users)

export default handler

// ターミナルに打つコマンド
// curl -X POST -H "Content-Type: application/json" -d '{"do":"課題をやる"}' http://localhost:3000/api/test/
