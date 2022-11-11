import type { Prisma, ToDoList } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type ToDo = {
  content?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ToDoList | { error: string }>) => {
  const { content }: ToDo = req.body
  const todoBody: Prisma.ToDoListCreateInput = {
    content: content,
  }
  let statusCode = 200
  const result = await prisma.toDoList
    .create({
      data: todoBody,
    })
    .catch((err) => {
      statusCode = 500
      console.log(err)
      return { error: 'Failed to read content' }
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

  res.status(statusCode).json(result)
}

export default handler

// ターミナルに打つコマンド
// curl -X POST -H "Content-Type: application/json" -d '{"content":"課題をやる"}' http://localhost:3000/api/test/
