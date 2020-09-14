import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(0);

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);


//at somewhere
//const [{ user }, dispatch] = useStateValue();

/*
import { actionTypes } from './reducer';

auth.signInWithPopup(provider)
.then((result) => {
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user
    })
})
*/

//at another place...
// const [{user}] = useStateValue();