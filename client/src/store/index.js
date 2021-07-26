import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import config from "../config";

const { ENV } = config;

const logger = createLogger();

const persistConfig = {
  key: "root",
  storage,
  // blacklist: [],
  // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

if (ENV !== "production") {
  middleware.push(logger);
}

const composeEnchaner =
  ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnchaner);
const persistor = persistStore(store);

export { store, persistor };
