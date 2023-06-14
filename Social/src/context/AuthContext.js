import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:{
        _id:"63fef8dfdc9b024de0a95ef8",
        username:"jacky1",
        email:"jacky1@gmail.com",
        profilePicture:"",
        coverPicture:"",
        isAdmin:false,
        followers:[],
        following:[],
    },
    isFetching:false,
    error:false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error,dispatch}}>
             {children}
        </AuthContext.Provider>
    )
}