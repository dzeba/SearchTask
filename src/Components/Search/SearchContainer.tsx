import React from "react";
// import Search from "./Search";
// import {connect} from "react-redux";
// import {AppStateType} from "../../redux/reduxStore";
// import {
//     addAdultsActionCreator, addArrivalDateActionCreator, addDepartureDateActionCreator,
//     addKidsActionCreator,
//     addRoomsActionCreator,
//     countKidsActionCreator, DataType, getData,
//     setData
// } from "../../redux/searchReducer";
// import {filterByRooms} from "../../redux/hotelsReducer";
//
// type MapStatePropsType = {
//     arrival_date: DataType | null
//     departure_date: DataType | null
//     adults: number
//     kids: Array<number>
//     numberOfKids: Array<string>
//     rooms: number
// }
// type MapDispatchPropsType = {
//     setData: (arrival_date: DataType | null, departure_date: DataType | null, adults: number, kids: any) => void
//     countKidsActionCreator: (numberOfKids: Array<string>) => void
//     addKidsActionCreator: (kids: Array<number>) => void
//     addAdultsActionCreator: (adult: number) => void
//     addRoomsActionCreator: (rooms: number) => void
//     addArrivalDateActionCreator: (day: number | null | undefined, month: number | null | undefined, year: number | null | undefined) => void
//     addDepartureDateActionCreator: (day: number | null | undefined, month: number | null | undefined, year: number | null | undefined) => void
//     getData:(arrival_date: string, departure_date: string, adults: number, kids: Array<number>)=>void
//     filterByRooms: (room: number) => void
// }
// type OwnPropsType = {}
//
// type PropsType = MapStatePropsType & MapDispatchPropsType
//
// class SearchContainer extends React.Component<PropsType> {
//
//     render() {
//         return <Search arrival_date={this.props.arrival_date}
//                        departure_date={this.props.departure_date}
//                        adults={this.props.adults}
//                        kids={this.props.kids}
//                        numberOfKids={this.props.numberOfKids}
//                        rooms={this.props.rooms}
//                        setData={this.props.setData}
//                        addKidsActionCreator={this.props.addKidsActionCreator}
//                        addAdultsActionCreator={this.props.addAdultsActionCreator}
//                        addRoomsActionCreator={this.props.addRoomsActionCreator}
//                        countKidsActionCreator={this.props.countKidsActionCreator}
//                        addArrivalDateActionCreator={this.props.addArrivalDateActionCreator}
//                        addDepartureDateActionCreator={this.props.addDepartureDateActionCreator}
//                        getData={this.props.getData}
//                        filterByRooms={this.props.filterByRooms}
//         />
//
//     }
// }
//
// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         arrival_date: state.searchPage.arrival_date,
//         departure_date: state.searchPage.departure_date,
//         adults: state.searchPage.adults,
//         kids: state.searchPage.kids,
//         numberOfKids: state.searchPage.numberOfKids,
//         rooms: state.searchPage.rooms
//     }
// }
//
// export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
//     {
//         setData,
//         addKidsActionCreator,
//         addAdultsActionCreator,
//         addRoomsActionCreator,
//         countKidsActionCreator,
//         addArrivalDateActionCreator,
//         addDepartureDateActionCreator,
//         getData,
//         filterByRooms
//     })(SearchContainer);