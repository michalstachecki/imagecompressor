import * as constants from '../constants/constants'

const initialState = {
    imageCompressionHistory : ""
};

export function updateImageCompressionHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case constants.updateImageCompressionHistoryType:
            return state;
        default:
            return state;
    }
}