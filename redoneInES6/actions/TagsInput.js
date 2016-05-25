import * as TagTypes from './../action_types/TagsInput';


export function textBoxChange(type, field, value) {
    return {
        type: TagTypes.TEXT_BOX_CHANGE,
        payload: {
            type: type,
            field: field,
            value: value
        }
    }
}
