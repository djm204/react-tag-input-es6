import {combineReducers} from 'redux';
import * as TagInputsTypes from './../action_types/TagsInput';
import Immutable from 'immutable';

const Keys = {
    ENTER: 13,
    TAB: 9,
    BACKSPACE: 8,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    ESCAPE: 27
};

let initialState = {
    global: {
        shop_url: "",
        shop_type: "",
        checkout_url: ""
    },
    placeholder: 'Add new tag',
    tags: [],
    suggestions: [],
    delimiters: [Keys.ENTER, Keys.TAB],
    autofocus: true,
    inline: true,
    allowDeleteFromEmptyInput: true,
    minQueryLength: 2,
    autocomplete: false,
    readOnly: false,
};

function global(state, action) {
    if (typeof state === 'undefined') {
        state = initialState.global;
    }

    return state;
}

function placeholder(state, action){

}

function tags(state, action){

}

function suggestions(state, action){
    
}

const rootReducer = combineReducers({

});

export default rootReducer;

