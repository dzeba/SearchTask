import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getHotels, hotelsType} from "../../redux/hotelsReducer";
import Hotels from "./Hotels";
import Preloader from "../../common/preloader";


type MapStatePropsType = {
    hotels: Array<hotelsType>
    isFetching: boolean

}
type MapDispatchPropsType = {
    getHotels: () => void

}
type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType

class SearchContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getHotels();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Hotels
                hotels={this.props.hotels}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        hotels: state.hotelsPage.hotels,
        isFetching: state.hotelsPage.isFetching
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {
        getHotels
    })(SearchContainer);