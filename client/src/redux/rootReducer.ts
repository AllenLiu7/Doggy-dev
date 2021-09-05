import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import followingUsersReducer from './slice/getFollowingUsers';
import recommandUsersReducer from './slice/getRecommandUsers';
import timelinePostsReducer from './slice/getTimelinePosts';
import loginUserReducer from './slice/loginUser';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['currentUser'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['token'],
};

const combinedReducer = combineReducers({
  currentUser: persistReducer(authPersistConfig, loginUserReducer), //nested persist to exclude token
  followingUsers: followingUsersReducer,
  recommandUsers: recommandUsersReducer,
  timelinePosts: timelinePostsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logoutUser') {
    // storage.removeItem('persist:root');
    storage.removeItem('persist:auth');
    return combinedReducer(undefined, action);
    //this setting will delete persist auth and set persist root to undefine.
    //but if next user login will not get persist auth which means next user fail to persist the state
    //for now, the best way to solve this problem is to refresh the page after logout, so that both auth and root will be reset to local storage
  }
  return combinedReducer(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
