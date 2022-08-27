import React, {useCallback} from 'react';
import { getDatasThunk } from '../redux/modules/datas';
import DataList from "../components/DataList";
import { useDispatch, useSelector } from "react-redux";

function DataListContainer(props) {
    const datas = useSelector((state) => state.datas.data);
    const dispatch = useDispatch();

    const getDatas = useCallback(() => {
        dispatch(getDatasThunk());
    }, [dispatch]);

    return (
        <div>
            <DataList datas={datas} getDatas={getDatas} />
        </div>
    );
}

export default DataListContainer;