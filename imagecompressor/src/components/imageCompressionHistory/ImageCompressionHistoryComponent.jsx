import React from "react";
import {connect} from 'react-redux';
import Button from "../common/button/Button";
import * as getImageCompressionHistoryActions from '../../actions/getImageCompressionHistory';
import * as clearImageCompressionHistoryActions from '../../actions/clearImageCompressionHistory';
import PropTypes from "prop-types";

class ImageCompressionHistoryComponent extends React.Component {
    componentDidMount() {
        this.props.getImageCompressionHistory();
    }

    render() {
        let { imageCompressionHistory } = this.props;
        let iamgeCompressionHistoryDisplayList = this.parseImageCompressionHistory(imageCompressionHistory);
        const shouldHideClearButton = !iamgeCompressionHistoryDisplayList.length;
        return (
            <div>
                <h1>History</h1>
                <Button click={this.clearImageCompressionHistory} hidden={shouldHideClearButton} label="Clear history"/>
                {
                    iamgeCompressionHistoryDisplayList.map((imageCompressionRow, key) => {
                        const imageCompressionRowSplitResult = imageCompressionRow.split(" Date:");
                        const linkSplitResult = imageCompressionRowSplitResult[0].split("/");
                        const fileName = linkSplitResult[linkSplitResult.length-1];

                        return (
                            <h4 key={key}>{fileName} {imageCompressionRowSplitResult[1]}</h4>
                        );
                    })
                }
                <h2 hidden={!shouldHideClearButton}>No recent compressions</h2>
            </div>
        )
    }

    clearImageCompressionHistory = () => {
        this.props.clearImageCompressionHistory();
        this.props.getImageCompressionHistory();
    }

    parseImageCompressionHistory = imageCompressionHistory => {
        if(!imageCompressionHistory){
            return [];
        }
        const stats = imageCompressionHistory.split("\n");
        return stats;
    }
}

const mapStateToProps = state =>{
    return {
        imageCompressionHistory: state.getImageCompressionHistoryStore.imageCompressionHistory
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      getImageCompressionHistory: () => dispatch(getImageCompressionHistoryActions.getImageCompressionHistory()),
      clearImageCompressionHistory: () => dispatch(clearImageCompressionHistoryActions.clearImageCompressionHistory())
    }
  };

  ImageCompressionHistoryComponent.propTypes = {
    getImageCompressionHistory: PropTypes.func.isRequired,
    imageCompressionHistory: PropTypes.string
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ImageCompressionHistoryComponent);
