import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import SingleSelectedWatch from "./SingleSelectedWatch/SingleSelectedWatch"

const SelectedWatch = ({selectedWatches,removeSelectedWatch,clearSelectedWatch,randomSelectedWatch}) => {

    return (
        <div className="selected-watches">
            <SubTitle title="Selected Watch"/> 
            <div className="selected-watches-wrapper">
                {
                    selectedWatches.length >0 && selectedWatches.map((watch)=><SingleSelectedWatch key={watch.id} watch={watch} removeSelectedWatch={removeSelectedWatch}/>)
                }
            </div>
            <div className="selected-watches-buttons">
                <button  data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-danger" onClick={()=>{randomSelectedWatch()}}>Choose Best One</button>
                <button className="btn btn-danger" onClick={()=>{clearSelectedWatch()}}>Choose Again</button>
            </div>
        </div>
    );
};

export default SelectedWatch;
