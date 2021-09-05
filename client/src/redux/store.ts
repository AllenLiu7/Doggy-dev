import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { persistedReducer } from './rootReducer';

export const store = (function configureAppStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // add to prevent bugs ---stack overflow
        },
      }),
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./slice/index.ts', () =>
      store.replaceReducer(persistedReducer)
    );
  }

  return store;
})();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
