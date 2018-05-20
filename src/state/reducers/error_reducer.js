import {
    SET_ERROR,
} from '../actions/types'

const INITIAL_STATE = '';
const INITIAL_ACTION = {type: '', payload: ''};

export default function(state=INITIAL_STATE, action=INITIAL_ACTION){
    switch(action.type){
            case SET_ERROR:
                return action.payload;
    }
    return state;
}