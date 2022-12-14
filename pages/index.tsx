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
  height: 90vh;
  background-color: #b6edff;
`
const Title = styled.div`
  font-size: 50px;
  color: #000;
  text-align: center;
`
const TodoArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 540px;
  margin: 0;
  margin-right: -50%;
  background-color: #e3e3e3;
  transform: translate(-50%, -50%);
`
const AddTodoText = styled.input`
  position: static;
  width: 300px;
  height: 50px;
  margin: 10px;
  font-size: 25px;
  vertical-align: middle;
  background-color: #c7c7c7;
`
const AddTodoBtn = styled.button`
  position: static;
  width: 100px;
  height: 50px;
  margin: 10px;
  font-size: 30px;
  background-color: green;
`
const Do = styled.li`
  padding-left: 20px;
  font-size: 30px;
`

export const getStaticProps: GetStaticProps = async () => {
  const post = await prisma.toDoList.findMany({})
  const list = JSON.parse(JSON.stringify(post))
  return { props: { list } }
}

type PostProps = {
  id: number
  content: string
  createdAt: string
}

type Props = {
  list: PostProps[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <Container>
      <Head>
        <title>Todoリスト</title>
      </Head>
      <Main>
        <Title>Todoリスト</Title>
        <TodoArea>
          <AddTodoText />
          <AddTodoBtn>追加</AddTodoBtn>
          {props.list.map((post) => (
            <Do key={post.id}>
              {post.id}.&nbsp;{post.content}&emsp;
              {post.createdAt}
            </Do>
          ))}
        </TodoArea>
      </Main>
    </Container>
  )
}

export default Home
