const reducer = (state: any , action: any)=>{
    switch (action.type) {
        case 'ADD_TRANSECTION':
            return{
                ...state , 
                transition: [...state.transition , action.payload]
            }
        case 'DELETE_TRANSECTION':
            return{
                ...state,
                transition: state.transition.filter((transition:any) => transition.id !== action.payload)
            }
        default: 
        return state
        }
    }
        
 export default reducer 