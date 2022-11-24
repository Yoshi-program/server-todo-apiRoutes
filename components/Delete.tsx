import styled from 'styled-components'
import prisma from '../lib/prisma'

const DeleteButton = styled.button`
  width: 40px;
  height: 20px;
  font-size: 10px;
  background-color: red;
`

export type DeleteProps = {
  id: number
  content: string
  createdAt: string
}

export const deleteStaticProps = async (id: number) => {
  await prisma.toDoList.delete({
    where: {
      id: id,
    },
  })
}

const Delete: React.FC<{ data: DeleteProps }> = ({ data }) => {
  return <DeleteButton onClick={() => deleteStaticProps(data.id)}>削除</DeleteButton>
}

export default Delete
