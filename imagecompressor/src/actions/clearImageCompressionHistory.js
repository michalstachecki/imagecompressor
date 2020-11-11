import * as constants from '../constants/constants';

export function clearImageCompressionHistoryStart(){
    return{
        type: constants.clearImageCompressionHistoryType
    }
}

export function clearImageCompressionHistoryComplete(data){
    return{
        type: constants.clearImageCompressionCompletedType,
        payload:{
            data
        }
    }
}


export function clearImageCompressionHistory(){
    return (dispatch) => {
        dispatch(clearImageCompressionHistoryStart);
        localStorage.removeItem("ImageCompressionHistory");
        dispatch(clearImageCompressionHistoryComplete(""));
    }
}
