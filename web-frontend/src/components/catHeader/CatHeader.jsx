import React from 'react';
import { NavLink } from 'react-router-dom';
import CatList from './CatList';

import data from './data';
// console.log(data);


const CatHeader = () => {
    return (
        <>
            <ul className="list-inline">
                {data.map((val, index, array) => {
                    // console.log(val, index, array);
                    return (
                        <CatList
                            key={val._id}
                            id={val._id}
                            imgsrc={val.categoryimg}
                            name={val.cagegoryname}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default CatHeader;
