import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state]
            if (action.payload === 'up') {
                sortedState.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                sortedState.sort((a, b) => b.name.localeCompare(a.name));
            }
            return [...sortedState]
        }
        case 'check': {
            return [...state].filter((u: UserType) => u.age > 18) // need to fix
        }
        default:
            return state
    }
}
