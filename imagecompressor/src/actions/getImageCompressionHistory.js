import * as constants from '../constants/constants';

export function getImageCompressionHistoryStart(){
    return{
        type: constants.getImageCompressionHistoryType
    }
}

export function getImageCompressionHistorySuccess(data){
    return{
        type: constants.getImageCompressionHistoryCompletedType,
        payload:{
            data
        }
    }
}

export function getImageCompressionHistory(){
    return (dispatch) => {
        dispatch(getImageCompressionHistoryStart);
        const imageCompressionHistory = localStorage.getItem("ImageCompressionHistory");
        dispatch(getImageCompressionHistorySuccess(imageCompressionHistory));
    }
}
