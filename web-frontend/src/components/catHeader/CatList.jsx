import React from 'react';
import { NavLink } from 'react-router-dom';

const CatList = (props) => {
    return (
        <>
            {/* <li id={props.id} className={props.classes}><NavLink to={props.link} >{props.name}</NavLink></li> */}

            <li id={props.id} className="list-inline-item mr-4 ml-4"><img src={props.imgsrc} alt="categoryImage" /><h6>{props.name}</h6></li>
        </>
    )
}

export default CatList;
