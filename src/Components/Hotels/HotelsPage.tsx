import React from "react";
import {useSelector} from "react-redux";
import {Hotels, HotelsReady} from "./Hotels";
import Preloader from "../../common/preloader";
import {getIsFetching, getIsReady} from "../../Selectors/selectors";
type PropsType = {

}




const HotelsPage: React.FC<PropsType>=()=> {
    let isReady = useSelector(getIsReady)
    let isFetching = useSelector(getIsFetching)
    return<>
        {isFetching ? <Preloader /> : null}
        {isReady && <Hotels/>}
        {!isReady && <HotelsReady />}

    </>
}
export default HotelsPage
