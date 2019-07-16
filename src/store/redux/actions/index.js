import {
    UPDATE_PROP,
} from '../types';

export const updateProp = value=>{
    return{
        key: UPDATE_PROP,
        value,
    }
}