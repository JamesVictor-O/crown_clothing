const initial_State = {
    current: "victor",
    status:true
}
export const loginReducer = (state = initial_State, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                current:action.payload
            }
        case "exist":
            return {
                ...state,
                states:action.payload
            }
        default:
            return state;
    }
}