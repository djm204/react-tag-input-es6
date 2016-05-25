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

    tags: [],
    classNames: {
        tags: 'ReactTags__tags',
        tagInput: 'ReactTags__tagInput',
        selected: 'ReactTags__selected',
        tag: 'ReactTags__tag',
        remove: 'ReactTags__remove',
        suggestions: 'ReactTags__suggestions'
    },
    suggestions: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
        ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
        ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
        ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
        ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
        ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
        ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
        ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
        ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
        ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
        ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
        ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
        ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
        ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"],
    delimiters: [Keys.ENTER, Keys.TAB],
    autofocus: true,
    inline: true,
    allowDeleteFromEmptyInput: true,
    minQueryLength: 2,
    autocomplete: false,
    readOnly: false,
    query: ""


};


function global(state, action) {
    if (typeof state === 'undefined') {
        state = initialState.global;
    }

    return state;
}

function classNames(state, action){
    state = initialState.classNames;

    return state;
}

function tags(state, action){

}

function query(state,action){
    state = initialState.query;
    return state;
}

function suggestions(state, action){
    state = initialState.suggestions;

    return state;
}

const rootReducer = combineReducers({
    global,
    classNames,
    suggestions,
    query

});

export default rootReducer;

