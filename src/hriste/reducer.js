/** Created by hhj on 8/19/16. */
import { Record } from 'immutable'
import * as actions from './actions'

export const InitialState = Record({
  hodnota: 1
})

const reducer = (state = {}, action = {}) => {
  if (!(state instanceof InitialState)) state = InitialState(state)

  switch (action.type) {
    case actions.INCREMENT:
      return state.update('hodnota', hodnota => hodnota + 1)
    case actions.DECREMENT:
      return state.update('hodnota', hodnota => hodnota - 1)
    default:
      return state
  }
}

export default reducer
