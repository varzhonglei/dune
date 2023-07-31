import styled from "@emotion/styled"
import { useModsWithLoading } from "../../libs/hooks/useModsFile"


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Card = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Table = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 60vw;
  margin-bottom: 30px;
`

export const TablesPage = () => {
  useModsWithLoading()
  return <Container>
    <Table>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
    </Table>
    <Table>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
    </Table>
    <Table>
       <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
    </Table>

  </Container>
}


