// import { Persistor, persistReducer, persistStore } from "redux-persist"
// import { Store, applyMiddleware, createStore } from "redux"
// import { rootReducer } from "./rootReducers"
// import createWebStorage from "redux-persist/lib/storage/createWebStorage"
// import thunkMiddleware from "redux-thunk"

// const bindMiddleware = (middleware: any[]) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension")
//     return composeWithDevTools(applyMiddleware(...middleware))
//   }

//   return applyMiddleware(...middleware)
// }

// const createNoopStorage = () => {
//   return {
//     getItem(_key: string) {
//       return Promise.resolve(null)
//     },
//     setItem(_key: string, value: any) {
//       return Promise.resolve(value)
//     },
//     removeItem(_key: string) {
//       return Promise.resolve()
//     },
//   }
// }

// export let persistor: Persistor

// export const makeStore = () => {
//   const middleware = [thunkMiddleware]
//   const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage()

//   const persistConfig = {
//     key: "primary",
//     version: 9,
//     storage,
//     whitelist: ["user", "prop", "admin"],
//     blacklist: ["place", "review", "category", "city"],
//   }

//   const persistedReducer = persistReducer(persistConfig, rootReducer)
//   const store = createStore(persistedReducer, bindMiddleware(middleware))

//   persistor = persistStore(store)

//   return store
// }

import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
import { rootReducer } from "./rootReducers"
import thunk from "redux-thunk"

import createWebStorage from "redux-persist/lib/storage/createWebStorage"
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage()

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "prop", "admin"],
  blacklist: ["place", "review", "category", "city"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleware: Middleware[] = [thunk];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
