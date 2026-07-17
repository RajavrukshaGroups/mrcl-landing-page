import { configureStore } from '@reduxjs/toolkit';
import enquiryReducer from './enquirySlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('mrcl_enquiry_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('mrcl_enquiry_state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

export const store = configureStore({
  reducer: {
    enquiry: enquiryReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    enquiry: store.getState().enquiry,
  });
});
