import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchInitialData } from './channelsSlice';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState({
  messages: [],
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, { payload }) => {
      state.messages = payload.messages;
    });
  },
});

export const { addMessage } = messagesSlice.actions;

export const messagesSelectors = messagesAdapter.getSelectors((state) => state.messages);

export default messagesSlice.reducer;