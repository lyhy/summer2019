import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';
// import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface State {

}
export interface AuthState {
  user: User
}
export const initialAuthState: AuthState = {
  user: undefined
}


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, actions) => {
    return {
      user: actions.user
    }
  }),
  on(AuthActions.logout, (state, actions) => {
    return {
      ...initialAuthState
    }
  })
)



// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
