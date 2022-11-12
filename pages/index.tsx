import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.div`
  height: 100vh;
  background-color: #0091c1;
`
const Title = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Todoリスト</title>
      </Head>
      <Main>
        <Title>Todoリスト</Title>
      </Main>
    </Container>
  )
}

export default Home
