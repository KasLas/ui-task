import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DEVICES_URL } from '../../utils/constants';
import { DevicesSlice } from '../../utils/types';
import axios from 'axios';

const initialState: DevicesSlice = {
  devices: [],
  isLoading: false,
  error: '',
};

async function getDevicesData() {
  try {
    const response = await axios.get(DEVICES_URL);

    return response.data;
  } catch (e) {
    throw new Error(String(e));
  }
}

export const getDevices = createAsyncThunk('devices/getDevices', async () => {
  const devices = await getDevicesData();
  return devices;
});

const transitionsSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDevices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDevices.fulfilled, (state, action) => {
      const devices = action.payload;

      state.devices = devices;

      state.isLoading = false;
    });
    builder.addCase(getDevices.rejected, (state, action) => {
      state.error = String(action.error.message);
      state.isLoading = false;
    });
  },
});

export default transitionsSlice.reducer;
