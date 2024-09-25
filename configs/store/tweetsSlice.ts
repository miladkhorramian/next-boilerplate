import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface TweetState {
  id: number;
  text: string;
  isVerfied?: boolean;
}

interface TweetsState {
  list: TweetState[];
}

const intialState: TweetsState = {
  list: [],
};

export const tweetSlice = createSlice({
  name: "tweets",
  initialState: intialState,
  reducers: {
    addTweet: (state, action: PayloadAction<TweetState>) => {
      state.list.push(action.payload);
    },
    addTweetReversed: (state, action: PayloadAction<TweetState>) => {
      state.list.unshift(action.payload);
    },
    removeTweet: (state, action: PayloadAction<Partial<TweetState>>) => {
      state.list = state.list.filter(tweet => tweet.id !== action.payload.id);
    },
    clearList: state => {
      state.list = [];
    },
  },
});

export const { addTweet, removeTweet, clearList } = tweetSlice.actions;

export const selectTweets = (state: RootState) => state.tweets.list;

export default tweetSlice.reducer;
