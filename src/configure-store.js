import { createStore } from "redux";

import { createRootReducer } from "./create-root-reducer";

export function configureStore(preloadedState) {
    const rootReducer = createRootReducer();

    const reduxDevToolsExtension =
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__();

    const store = createStore(
        rootReducer,
        preloadedState,
        reduxDevToolsExtension
    );

    return store;
}
