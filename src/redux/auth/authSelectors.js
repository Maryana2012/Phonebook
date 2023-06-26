
export const isLoggedInSelector =  (state=>state.authReducer.isLoggedIn)
export const userNameSelector = (state=>state.authReducer.user.name) 