import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from './../model/user.model';
import { AuthActions } from './../auth.actions';


export interface AuthState {
  user: User;
}

const initialState: AuthState = { user: undefined} ;

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login,(state, { user }) => {
    return { ...state, user: user }
  })
)
