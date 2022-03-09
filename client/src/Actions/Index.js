//Actions
import axios from 'axios';

export function Holis(){
    return async function(dispatch){

        return{
            type: TYPE_HOLIS,
            payload: dispatch,
        }
    }
}