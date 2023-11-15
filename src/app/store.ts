import { configureStore } from '@reduxjs/toolkit';
import devicesSlice from '../features/devices/devicesSlice';

const store = configureStore({
  reducer: {
    devices: devicesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
