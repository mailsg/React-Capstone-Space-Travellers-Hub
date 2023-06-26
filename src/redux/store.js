import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from '../components/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
