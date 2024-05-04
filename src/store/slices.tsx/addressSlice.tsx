import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import axios from 'axios';

interface AddressPayload {
    coordinates: {
        lng: number | null,
        lat: number | null,
    },
    address: string,
}

const initialState:AddressPayload = {
    coordinates: {
        lng: null,
        lat: null,
    },
    address: '',
}

const AddressSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setAddress: (state, { payload }:PayloadAction<string>) => { state.address = payload },
        setAddressCoordinates: (state, { payload }:PayloadAction<{lng: number, lat: number}>) => { 
            state.coordinates.lng = payload.lng, state.coordinates.lat = payload.lat
        }
    }
})

export const { setAddress, setAddressCoordinates } = AddressSlice.actions;
const AddressReducer = AddressSlice.reducer;
export default AddressReducer;

export const fetchUserAddress = (latitude: number, longitude: number): AppThunk => async dispatch => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC-rx6ZQMcHDYNXupzGqLhs5uEnKvmKB90`,
      );
      const results = response.data.results;
      if (results.length > 0) {
        dispatch(setAddress(results[0].formatted_address))
        console.log(results)
      }
    } catch (err) {
      console.log(err);
    }
};