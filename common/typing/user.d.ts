export type TReadyStatus = 'ready' | 'unready'

export interface User {
  name: string;
  readyStatus?: TReadyStatus
}
