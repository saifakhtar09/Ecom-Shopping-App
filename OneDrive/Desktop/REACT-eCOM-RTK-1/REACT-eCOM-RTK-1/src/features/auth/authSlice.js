import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users:[{name:"",email:"",password:"",profilePic:""},],
   isLogged:false
  },
  reducers: {
    signUp:(state,action)=>{
     state.users.push({...action.payload,id:date.now()})
    },
   logIn: (state, action) => {
     state.isLogged=true;
    },
    logOut: (state, action) => {
      state.isLogged=false;
     },
  },
});

export const {  logIn,logOut} = authSlice.actions;
export default authSlice.reducer;
