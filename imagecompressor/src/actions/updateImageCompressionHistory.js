import * as constants from '../constants/constants';
import {getImageCompressionHistorySuccess} from '../actions/getImageCompressionHistory';

export function updateImageCompressionHistoryStart(){
    return{
        type: constants.updateImageCompressionHistoryType
    }
}

export function updateImageCompressionHistory(data){
    return (dispatch) => {
        dispatch(updateImageCompressionHistoryStart);
        let imageCompressionHistory = localStorage.getItem("ImageCompressionHistory");
        imageCompressionHistory = !imageCompressionHistory ? data : imageCompressionHistory + data;
        localStorage.setItem("ImageCompressionHistory", imageCompressionHistory);
        dispatch(getImageCompressionHistorySuccess(imageCompressionHistory));
    }
}
