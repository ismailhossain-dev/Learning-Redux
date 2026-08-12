import { createSlice } from "@reduxjs/toolkit";

//========we are write all state here in redux=======

//========type define ts=========

interface initialState {
    value: number
}

//slice create korar somoy name , initialState, reducers must be provide korte hobe
const initialState:initialState = {
    value: 0, 
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,//etar value ta ekane declear kora jai but ekto big hower karone bahire declear kora hoiche

    
    reducers: {
        //create a increment function 
        increment: (state) => {
            state.value = state.value +1
        },

        //create a decrement function
        decrement: (state) => {
            //- click korle negative chole na jawer jonno bisoy ta fixed korchi 
            //0 teke value boro na hole nagetive er kaj ta korbe na
            if(state.value >0){
                state.value  = state.value -1 
            }
            
        }

    }
})

export const {increment, decrement}= counterSlice.actions;

export default counterSlice.reducer; 