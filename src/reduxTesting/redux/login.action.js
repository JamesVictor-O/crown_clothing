export const loginAction= (user)=>{
    return {
        type: "LOGIN",
        payload:user
    }
}

export const existAction = (status) => {
    return {
        type: "exist",
        payload:status,
    }
}