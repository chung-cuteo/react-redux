import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./count/slice";
import todoSlice from "./todo/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["count"],
  blacklist: [""],
};

const rootReducer = combineReducers({
  count: counterSlice,
  todos: todoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
