import AsyncStorage from '@react-native-community/async-storage'
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';



const persistConfig = {
    key: 'store',
    storage: AsyncStorage,
};

// const persistedSlice = persistReducer(persistConfig, AuthSlice);

export const store = configureStore({
    reducer: {
        // login: {}
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
