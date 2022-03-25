import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Watch = (props) => {
    const {watch,AddingSelectedWatch,clearSelectedWatch} = props;
    const {name,price,desc,img,id} = watch;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-watch-product">
                <div className="add-to-cart  btn btn-success" onClick={()=>AddingSelectedWatch(watch)}>
                    <span>ADD To Cart</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div
                    className="watch-bg"
                    style={{
                        backgroundImage:`url(${img})`,                    
                    }}
                ></div>
                <div className="content">
                    <h2 className="title">Rolex Smooth TH</h2>
                    <p>
                        Buy the best watch from our shop.find a watch you never
                        before.
                    </p>
                    <span>Price: 3000</span>
                </div>
            </div>
        </div>
    );
};

export default Watch;
