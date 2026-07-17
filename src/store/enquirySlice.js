import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEnquirySubmitted: false,
};

const enquirySlice = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    setEnquirySubmitted: (state, action) => {
      state.isEnquirySubmitted = action.payload;
    },
  },
});

export const { setEnquirySubmitted } = enquirySlice.actions;
export default enquirySlice.reducer;
