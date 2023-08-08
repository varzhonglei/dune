import { produce } from 'immer'
import { useSyncExternalStore } from 'react'

export type Atom<T> = {
  setState: SetState<T>
  setStateImmer: SetStateImmer<T>
  getState: GetState<T>
  subscribe: any
}
type SetStateImmer<P> = (param: ((oldState: P) => void)) => void
type SetState<P> = (param: P | ((oldState: P) => P)) => void
type GetState<P> = () => P

export const createSyncExternalAtom = <T>(initialState: T): Atom<T> => {
  let state = initialState
  const getState: GetState<T> = () => state
  const listeners = new Set()
  const setState: SetState<T> = param => {
    if (typeof param === 'function') {
      state = (param as (oldState: T) => T)(state)
    } else {
      state = param
    }
    listeners.forEach((l: any) => l())
  }

  const setStateImmer = (p:((prevState: T) => any)): void => {
    if (typeof p === 'function') {
      state = produce(state, p as any)
    }
    listeners.forEach((l: any) => l())
  }

  const subscribe = (listener: any) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }
  return {
    setState,
    setStateImmer,
    getState,
    subscribe,
  }
}



export const useSyncExternalState = <T>(atom: Atom<T>) => {
  return useSyncExternalStore(atom.subscribe, atom.getState)
}
