import { configureStore } from '@reduxjs/toolkit';
import userReducer from './rootSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

},

);