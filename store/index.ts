import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import user from "./userStore";
import category from "./categoryStore";
import thunk from "redux-thunk";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const reducers = combineReducers({
  user,
  category,
});
const storage = createWebStorage("local");

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
