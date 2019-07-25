import { useReducer } from 'react'

export const CHAT_SELECTED = 'CHAT_SELECTED'

const initialState = { chatSelected: false }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case CHAT_SELECTED:
            return { ...state, chatSelected: payload }
    
        default:
            return state
    }
}

export default () => useReducer(reducer, initialState)