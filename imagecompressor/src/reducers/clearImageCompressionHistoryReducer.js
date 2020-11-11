import * as constants from '../constants/constants'

const initialState = {
    imageCompressionHistory : ""
};

export function clearImageCompressionHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case constants.clearImageCompressionHistoryType:
            return state;
         case constants.clearImageCompressionCompletedType:
            return {...state, imageCompressionHistory: ""};
        default:
            return state;
    }
}