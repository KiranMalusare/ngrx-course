import { createAction, props } from "@ngrx/store";

const login= createAction(
    "[Login page] User login",
    props<{user}>()
)

const logout = createAction(
    "[Login page] User logout"
)

export const AuthActions ={
    login,
    logout
}