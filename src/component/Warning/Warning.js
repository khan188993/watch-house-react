import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Warning = ({ message,closeWarning }) => {
    return (
        <div
            className="alert mt-5 alert-danger d-flex align-items-center alert-dismissible fade show"
            role="alert"
        >   
             <FontAwesomeIcon icon={faTriangleExclamation} />
            <div className="ms-2">{message}</div>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={closeWarning}
            ></button>
        </div>
    );
};

export default Warning;
