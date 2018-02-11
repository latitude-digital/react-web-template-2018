import {SET_ERROR} from '../types'

export function setError(payload){
  return {
    type: SET_ERROR,
    payload,
  }
}