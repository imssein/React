import React, { useEffect } from "react";

function DataList({ datas, getDatas }) {
    
    useEffect(() => {
        getDatas();
    }, [getDatas]);

    console.log({datas})
    return (
        <div>
            {datas.map((item) => (
                <div key={item.id}>
                    <p>{item.korean_name}</p>
                    <p>{item.market}</p>                    
                </div>
                
            ) )}
        </div>
    );
}

export default DataList;