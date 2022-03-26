import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleSelectedWatch = ({watch,removeSelectedWatch}) => {
    const {img,id,name} =watch;
    return (
        <div className="single-selected-watch">
            <img src={img} alt="watch" className="SingleSelectedWatchImg"/> <span>{name}</span>{" "}
            <button onClick={()=>{removeSelectedWatch(id)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default SingleSelectedWatch;
