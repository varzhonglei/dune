import { createSyncExternalAtom, useSyncExternalState } from "../hooks/useSyncStore"
import jwt_decode from "jwt-decode";

const tokenState = createSyncExternalAtom('')

export const setToken = (t: string) => {
  localStorage.setItem('token', t)
  tokenState.setState(t)
}

export const getToken  = () => {
  return tokenState.getState()
}

export const clearToken = () => {
  localStorage.setItem('token', '')
  tokenState.setState('')
}

export const useToken = () =>  useSyncExternalState(tokenState)


export const getMyName = () => {
  let name = ''
  try {
    const decoded = jwt_decode(getToken()) as any
    name = decoded.name
  } catch(e) {
    // skip
  } 
  return name
}

export const useMyName = () => {
  const token =  useSyncExternalState(tokenState)
  let name = ''
  try {
    const decoded = jwt_decode(token) as any
    name = decoded.name
  } catch(e) {
    // skip
  } 
  return name
}

export const initAuth = () => {
  tokenState.setState(localStorage.getItem('token') || '')
}