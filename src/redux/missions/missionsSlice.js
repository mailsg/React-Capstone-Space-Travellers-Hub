import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { missionId } = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missions: newState };
    },

    leaveMission: (state, action) => {
      const { missionId } = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },

  },

  extraReducers: (builders) => {
    builders.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });
    builders.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      const data = action.payload;
      const missions = data.map((index) => ({
        mission_id: index.mission_id,
        mission_name: index.mission_name,
        description: index.description,
      }));
      state.missions = missions;
    });
    builders.addCase(fetchMissions.rejected, (state) => {
      state.isLoading = false;
    });
  },

});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
