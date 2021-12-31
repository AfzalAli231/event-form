import { configureStore } from '@reduxjs/toolkit';
import {authApi} from '../services/auth';
import {usersApi} from '../services/users';
import {vendorsApi} from '../services/vendors';
import {extraApi} from '../services/extra';
import {eventsApi} from '../services/events';
import {categoryApi} from '../services/category';
import {biddingsApi} from '../services/biddings';
import userReducer from "./rootSlice";
import { packagesApi } from '../services/packages';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [vendorsApi.reducerPath]: vendorsApi.reducer,
    [extraApi.reducerPath]: extraApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [biddingsApi.reducerPath]: biddingsApi.reducer,
    [packagesApi.reducerPath]: packagesApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});
