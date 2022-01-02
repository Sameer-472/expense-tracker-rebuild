
import React ,  {createContext , useReducer} from 'react';  
import reducer from './Reducer';


const InitalState: any = {
    transition: [
        // {id: 1 , text: "flower" , amount: 200 } , 
        // {id: 2 , text: "flower" , amount: -4} ,
        // {id: 3 , text: "flower" , amount: 500} ,
        // {id: 3 , text: "flower" , amount: -50} ,
        // {id: 4 , text: "flower" , amount: 100} ,
    ]
}

// console.log(InitalState.transition); // this printing an array

// create conetxt
// provider
// consumer

// createcontext
const Global = createContext(InitalState)
 // this returning  an object of context

// provider component

export const GlobalProvider = ({children}: any)=> {
    const [state, dispatch] = useReducer(reducer, InitalState)

// action for addTransection
    const addTransection = (transition: any) => {
         dispatch({
             type: 'ADD_TRANSECTION',
             payload: transition
         })
    }
//action for delete transection 

    const deleteTransection = (id: any)=>{
        console.log(id)
        console.log(state.transition)
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }
    return(
        <>
        <Global.Provider value={{
            transition: state.transition,
            addTransection ,
            deleteTransection
            }
            }>
            {children}
        </Global.Provider>
        </>
    )

}

export default Global 

