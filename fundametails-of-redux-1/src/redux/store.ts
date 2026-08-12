import { configureStore } from '@reduxjs/toolkit'
//ekane amra counterSlice take connect korbo 
import counterReducer from  "./counter/counterSlice"
const store = configureStore({
  reducer: {
    //============connect counterSlice with store.ts=======
    counter : counterReducer
  },
})


//
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store; 

