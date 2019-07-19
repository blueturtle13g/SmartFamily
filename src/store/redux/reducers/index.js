import { UPDATE_PROP } from '../types';

const INITIAL_STATE = {
    keyboardOpen: false,
    activeStack: '',
};

export default (state = INITIAL_STATE, action)=>{
    console.log('action: ', action)
    switch(action.type){
        case UPDATE_PROP:
            return{...state, [action.key]: action.value}
        default:
            return state;
    }
}