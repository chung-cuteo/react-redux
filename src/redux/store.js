import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { counterReducer } from "./count/reducer";
import { todosReducers } from "./todos/reducer";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["count"],
  blacklist: [""],
};

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (store) => (next) => (action) => {
  next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, middleware))
);
const persistor = persistStore(store);

export { store, persistor };
