import { UPDATE_PROP } from '../types';

const INITIAL_STATE = {
    keyboardOpen: false,
    activeStack: '',
    phoneNumber: '',
};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UPDATE_PROP:
            return{...state, [action.key]: action.value}
        default:
            return state;
    }
}