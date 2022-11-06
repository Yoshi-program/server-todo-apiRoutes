import type { NextApiRequest, NextApiResponse } from 'next'

type TestRes = {
  title: string
  content: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<TestRes>) => {
  const result: TestRes = {
    title: `id: ${req.query.id}, authorization header: ${req.headers.authorization}`,
    content: `body[test]: ${req.body['test']}, cookie[test]: ${req.cookies.test}`,
  }
  console.log('つながった！！')
  console.log(req.body.name)
  console.log(req.body.age)
  res.status(200).send(result)
}

export default handler

// ターミナルに打つコマンド
// curl -X POST -H "Content-Type: application/json" -d '{"name":"太郎", "age":"30"}' http://localhost:3000/api/test/
