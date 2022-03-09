//Reducer
export const TYPE_HOLIS = 'TYPE_HOLIS'

const initialState= {
    holis:{} //ejemplo =>cambiarlo
}

export default function rootReducer(state=initialState, action){
   switch(action.payload){
       case TYPE_HOLIS: //ejemplo =>cambiarlo
           return{
               ...state,
               holis: action.payload //ejemplo =>cambiarlo
           }
        default:
            return state;
   }


}