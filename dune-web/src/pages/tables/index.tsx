import styled from "@emotion/styled"
import { useModsWithLoading } from "../../libs/hooks/useModsFile"
import { useTables } from "./usetables"
import { CenterLoading } from "../../components/loading"
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import { joinTable } from "../../libs/api/table"
import { RES_TYPE } from "../../typing"



const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
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
  const { data, isLoading, mutate } = useTables()
  const tables = data?.data || []

  const handleJoin = async (params: { ind: number, id: number }) => {
    const res = await joinTable(params)
    if (res.type === RES_TYPE.success) {
      mutate()
    }
  }

  if (isLoading) return <CenterLoading />
  return <Container>
    {
      tables.map(t => {
        const u = t.userList
        return  <Table>
        {
          Array.from({length:4}).map((i, ind) => <Card>
            { 
            u[ind] ? u[ind]?.name : 
              <div
                onClick={handleJoin.bind(null, { ind, id: t.id })}
              >
                <Icon path={mdiPlusCircleOutline} size={1} />
              </div>
          }
          </Card>)
        }
      </Table>
      })
    }
  </Container>
}


