import styled from "@emotion/styled"
import { useModsWithLoading } from "../../libs/hooks/useModsFile"
import { useTables } from "./use-tables"
import { CenterLoading } from "../../components/loading"
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import { createTable, deleteTable, joinTable } from "../../libs/api/table"
import { RES_TYPE } from "../../typing"
import { useMyName } from "../../libs/auth"
import { isSupperAdmin } from '../../../../common/is-super-admin'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const Card = styled.button`
  min-width: 50px;
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
  const { data, isLoading, mutate } = useTables()
  const isAdmin = isSupperAdmin(myName)
  const tables = data?.data || []

  const handleCardClick = async (params: { ind: number, id: number }) => {
    const res = await joinTable(params)
    if (res.type === RES_TYPE.success) {
      mutate()
    }
  }
  const handleCreateTable = async () => {
    const res = await createTable()
    if (res.type === RES_TYPE.success) {
      mutate()
    } 
  }

  const handleDeleteTable = async (id: number) => {
    const res = await deleteTable(id)
    if (res.type === RES_TYPE.success) {
      mutate()
    } 
  }

  if (isLoading) return <CenterLoading />
  return <Container>
    {
      tables.map((t, ind) => {
        const u = t.userList
        const showDeleteBtn = ind > 2 && (isAdmin || t.admin === myName)
        return  <div className='hover-f'>
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
              Array.from({length:4}).map((i, ind) => <Card
                className="button is-primary is-rounded"
                style={{ cursor: 'pointer' }}
                disabled={ !!(u[ind]?.name && u[ind]?.name !== myName) }
                onClick={handleCardClick.bind(null, { ind, id: t.id })}
              >
                { 
                u[ind] ? <NameWrap>{u[ind]?.name}</NameWrap>  : <Icon path={mdiPlusCircleOutline} size={1} />
                }
              </Card>)
            }
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

