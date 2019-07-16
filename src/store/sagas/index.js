import { takeLatest } from 'redux-saga/effects';

export function* sagaWatcher(){
    yield takeLatest('S', ()=>{})
}