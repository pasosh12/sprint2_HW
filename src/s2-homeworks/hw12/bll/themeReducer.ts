
const initState = {
    themeId: 1,
}
type StateType = {
    themeId: number
}
export const changeThemeId = (id: number): { type: string, id: number }  => ({type: 'SET_THEME_ID' as const, id}) // fix any
export type changeThemeIdType = ReturnType<typeof  changeThemeId>

export const themeReducer = (state = initState, action: changeThemeIdType) : StateType=> { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            // debugger;
            return {...state, themeId: Number(action.id)}
        }
        default:
            return state
    }
}
