import type { Prisma, ToDoList } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type ToDo = {
  id?: number
  content?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ToDoList | { error: string }>) => {
  let statusCode = 200
  switch (req.method) {
    case 'POST': {
      const { content }: ToDo = req.body
      const todoBody: Prisma.ToDoListCreateInput = {
        content: content,
      }
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
      break
    }
    case 'Delete': {
      break
    }
  }
}

export default handler

// ターミナルに打つコマンド
// curl -X POST -H "Content-Type: application/json" -d '{"content":"課題をやる"}' http://localhost:3000/api/test/
