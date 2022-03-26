import React from "react";

const Question = ({ques,ans}) => {
    return (
        <div className="col-md-6 col-12">
            <div className="questions-box">
                <div className="single-question">
                    <h1>{ques}</h1>
                    <p>
                        {ans}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;
