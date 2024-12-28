import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./tweetsSlice";
import appReducer from "./app-slice";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    app: appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
