import * as constants from '../constants/constants'

const initialState = {
    imageCompressionHistory : ""
};

export function getImageCompressionHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case constants.getImageCompressionHistoryType:
            return state;
         case constants.getImageCompressionHistoryCompletedType:
            return {...state, imageCompressionHistory: action.payload.data};
        default:
            return state;
    }
}