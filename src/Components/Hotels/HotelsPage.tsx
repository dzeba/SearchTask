import React from "react";
import {useSelector} from "react-redux";
import {Hotels, HotelsReady} from "./Hotels";
import Preloader from "../../common/preloader";
import {getIsFetching, getIsReady, getMessageError} from "../../Selectors/selectors";
type PropsType = {

}




const HotelsPage: React.FC<PropsType>=()=> {
    let isReady = useSelector(getIsReady)
    let isFetching = useSelector(getIsFetching)
    const errorMessage = useSelector(getMessageError)
    return<>
        {isFetching ? <Preloader /> : null}
        {isReady && <Hotels/>}
        {!isReady && <HotelsReady />}

    </>
}
export default HotelsPage
