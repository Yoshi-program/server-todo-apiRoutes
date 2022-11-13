import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import prisma from '../lib/prisma'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.div`
  height: 100vh;
  background-color: #b6edff;
`
const Title = styled.div`
  font-size: 50px;
  color: #000;
  text-align: center;
`
const Do = styled.li`
  font-size: 30px;
  text-align: center;
`

export const getStaticProps: GetStaticProps = async () => {
  const post = await prisma.toDoList.findMany({})
  const list = JSON.parse(JSON.stringify(post))
  return { props: { list } }
}

type PostProps = {
  id: number
  content: string
}

type Props = {
  list: PostProps[]
}

const Home: NextPage<Props> = (props) => {
  // async function main() {
  //   const allTodo = await prisma.toDoList.findMany()
  //   console.log(allTodo)4
  // }
  // useEffect(() => {
  //   const allTodo = prisma.toDoList.findMany()
  //   console.log(allTodo)
  // }, [])
  return (
    <Container>
      <Head>
        <title>Todoリスト</title>
      </Head>
      <Main>
        <Title>Todoリスト</Title>
        {props.list.map((post) => (
          <Do key={post.id}>{post.content}</Do>
        ))}
      </Main>
    </Container>
  )
}

export default Home
