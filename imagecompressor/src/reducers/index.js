import {combineReducers} from 'redux';
import {getImageCompressionHistoryReducer} from './getImageCompressionHistoryReducer'
import {updateImageCompressionHistoryReducer} from './updateImageCompressionHistoryReducer'
import {clearImageCompressionHistoryReducer} from './clearImageCompressionHistoryReducer'

const rootReducer = combineReducers({
    getImageCompressionHistoryStore: getImageCompressionHistoryReducer,
    updateImageCompressionHistoryStore: updateImageCompressionHistoryReducer,
    clearImageCompressionHistoryStore:clearImageCompressionHistoryReducer
});

export default rootReducer;