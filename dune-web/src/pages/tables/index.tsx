import styled from "@emotion/styled"
import { useModsWithLoading } from "../../libs/hooks/useModsFile"
import { useTables } from "./use-tables"
import { CenterLoading } from "../../components/loading"
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import { createTable, deleteTable, joinTable } from "../../libs/api/table"
import { useMyName } from "../../libs/auth"
import { isSupperAdmin } from '../../../../common/is-super-admin'
import { useNavigate } from "react-router-dom"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const Button = styled.button`
  min-width: 50px;
`

const Column = styled.div`
  width: 50px;
  flex: 1;
`

const NameWrap = styled.div`
  min-width: 50px;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Table = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 60vw;
  height: 80px;
  min-height: 80px;
  border: 1px dashed #ddd;
  align-items: center;
  margin-bottom: 60px;
  padding: 0 40px;
`
const TableHeader = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
`

export const TablesPage = () => {
  useModsWithLoading()
  const myName = useMyName()
  const nav = useNavigate()
  const { data, isLoading } = useTables()
  const isAdmin = isSupperAdmin(myName)
  const tables = data?.data || []

  const handleCardClick = async (params: { ind: number, id: number }) => {
    try {
     await joinTable(params)
    } catch (error) {
      //
    }
  }
  const handleCreateTable = async () => {
    await createTable()
  }

  const handleDeleteTable = async (id: number) => {
    await deleteTable(id)
  }

  const handleSha = (tableId: number) => {
    nav(`/table/${tableId}`)
  }

  if (isLoading) return <CenterLoading />
  return <Container>
    {
      tables.map((t, ind) => {
        const u = t.userList
        const showDeleteBtn = ind > 2 && (isAdmin || t.admin === myName)
        return  <div className='hover-f' key={t.id} >
          <div className='is-flex'>
            <TableHeader>桌号：{t.id}</TableHeader>
            {showDeleteBtn && <div 
            onClick={handleDeleteTable.bind(null, t.id)}
            className="tag is-light align-items-center ml-2 hover-c is-pointer">
              删除
              <button className="delete is-small"></button>
            </div>}
          </div>
          <Table>
            {
              Array.from({length:4}).map((i, ind) => 
              <Column
                key={ind}
              >
                <Button
                  className="button is-primary is-rounded max-w-120"
                  style={{ cursor: 'pointer' }}
                  disabled={ !!(u[ind]?.name && u[ind]?.name !== myName) }
                  onClick={handleCardClick.bind(null, { ind, id: t.id })}
                >
                  { 
                  u[ind] ? <NameWrap>{u[ind]?.name}</NameWrap>  : <Icon path={mdiPlusCircleOutline} size={1} />
                  }
                </Button>
              </Column>
              )
            }
              <Button
                  className="button is-rounded"
                  style={{ cursor: 'pointer' }}
                  onClick={handleSha.bind(null, t.id)}
                >
                  开沙
                </Button>
          </Table>
        </div>
      })
    }
    <Table onClick={handleCreateTable} style={{ justifyContent: 'center', cursor: 'pointer' }}>
        <Icon path={mdiPlusCircleOutline} size={1.4} />
        <span className='ml-3'>开新桌</span>
    </Table>
  </Container>
}

