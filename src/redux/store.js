import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketSlice';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
  },
});

export default store;
