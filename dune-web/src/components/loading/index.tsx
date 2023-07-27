import * as React from 'react'
import './styles.css'

export interface ILoadingProps {
  size?: number
}
export const Loading = React.memo(function Loading ({
  size = 10,
}: ILoadingProps) {
  const colors = ['#f44336', '#f8b26a', '#66bb6a', '#1979ff']

  return (
    <ul className={ 'app-loading' }>
      { Array.from(new Array(4)).map((_, ind) => (
        <li
          key={ ind }
          style={ {
            backgroundColor: colors[ind],
            width: `${size}px`,
            height: `${size}px`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            '--line-index': ind,
          } }
        />
      )) }
    </ul>
  )
})

export const CenterLoading = () => {
  return (
    <div
      style={ {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      } }
    >
      { <Loading /> }
    </div>
  )
}
