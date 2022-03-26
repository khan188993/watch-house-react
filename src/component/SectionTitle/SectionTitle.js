import React from "react";

const SectionTitle = ({title,desc}) => {
    return (
        <div className="section-title text-center">
            <h1>{title}</h1>
            <p>{desc}</p>
            {/* <p>Choose the best watch for yourself.</p> */}
        </div>
    );
};

export default SectionTitle;
