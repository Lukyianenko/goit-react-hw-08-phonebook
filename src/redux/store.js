import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import { persistStore, 
        persistReducer, 
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  // const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contact: contactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);