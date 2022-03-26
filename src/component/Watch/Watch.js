import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Watch = (props) => {
    const {watch,AddingSelectedWatch} = props;
    const {name,price,desc,img} = watch;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-watch-product">
                <div className="add-to-cart  btn btn-success" onClick={()=>AddingSelectedWatch(watch)}>
                    <span>Select</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div
                    className="watch-bg"
                    style={{
                        backgroundImage:`url(${img})`,                    
                    }}
                ></div>
                <div className="content">
                    <h2 className="title">{name}</h2>
                    <p>
                        {desc}
                    </p>
                    <span>Price: {price}</span>
                </div>
            </div>
        </div>
    );
};

export default Watch;
