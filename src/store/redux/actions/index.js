import {
    UPDATE_PROP,
} from '../types';

export const updateProp = (key,value)=>{
    return{
        type: UPDATE_PROP,
        key,
        value,
    }
}