import type { NextApiRequest, NextApiResponse } from 'next'

type TestRes = {
  title: string
  content: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<TestRes>) => {
  const result: TestRes = {
    title: `id: ${req.query.id}, authorization header: ${req.headers.authorization}`,
    content: `body[test]: ${req.body['test']}, cookie[test]: ${req.cookies.test}`,
  }
  console.log('つながった！！')
  console.log(req.body.name)
  console.log(req.body.age)
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await response.json()
  res.status(200).send(users)
}

export default handler

// ターミナルに打つコマンド
// curl -X POST -H "Content-Type: application/json" -d '{"name":"太郎", "age":"30"}' http://localhost:3000/api/test/
