import React from "react";

const Modal = (props) => {
    const {img,name,price,desc} = props.randomWatch;
    
    return (
        <div
            className="modal fade"
            id="exampleModal"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-watch-img text-center">
                            <img src={img} alt="watch" className="d-inline-block"/>
                        </div>
                        <h5 className="modal-title" id="exampleModalLabel">
                            {name}
                        </h5>
                        <p>
                            {desc}
                        </p>
                        <span>Price: {price}</span>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
