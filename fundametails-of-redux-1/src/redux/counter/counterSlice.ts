import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "../store";
//========we are write all state here in redux=======

//========type define ts=========

interface initialState {
  value: number;
}

//slice create korar somoy name , initialState, reducers must be provide korte hobe
const initialState: initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState, //etar value ta ekane declear kora jai but ekto big hower karone bahire declear kora hoiche

  reducers: {
    //create a increment function
    //old eta use korle app.ts ekta error fetch korsilam like payload dite bolsilo
    increment: (state) => {
      state.value = state.value + 1;
    },
    // new fixed payload
    //payloadAction is a type so ekane amra bole dissi eta holo number and eta number chara er kichu support korbe na
    incrementByValue: (state, action:PayloadAction<number>) => {
      // বর্তমান মানের সাথে payload-এর মান যোগ হবে
      state.value = state.value + action.payload;
    },
    //create a decrement function
    decrement: (state) => {
      //- click korle negative chole na jawer jonno bisoy ta fixed korchi
      //0 teke value boro na hole nagetive er kaj ta korbe na
      if (state.value > 0) {
        state.value = state.value - 1;
      }
    },
  },
});
//eta korle amader app.ts e   const value = useAppSelector((state) => state.counter.value) eto code leka lagbe na just selectValue ta bole dile hobe
export const selectValue = (state:RootState) =>state.counter.value;
export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
