import "./App.css";
import React, { useState } from "react";
import watches from "./fakeData/watches";
import Watch from "./component/Watch/Watch";
import SelectedWatch from "./component/SelectedWatch/SelectedWatch";
import Modal from "./component/Modal/Modal";
import SectionTitle from "./component/SectionTitle/SectionTitle";
import SubTitle from "./component/SubTitle/SubTitle";
import Warning from "./component/Warning/Warning";
import Questions from "./component/Questions/Questions";

function App() {
    const [selectedWatches, setSelectedWatches] = useState([]);
    const [randomWatch, setRandomWatch] = useState("");
    const [warning,setWarning] = useState({state:false,message:""});


    //Adding Product To cart
    const AddingSelectedWatch = (selectedWatch) => {
        //checking uniq items
        const exists = selectedWatches.includes(selectedWatch);

        if (selectedWatches.length < 4) {
            if (!exists) {
                let newSelected = [...selectedWatches, selectedWatch];
                setSelectedWatches(newSelected);
                // clearing Warning 
                 warning.state && setWarning({state:false,message:""});
            } else {
                //Adding warning messages
                setWarning({state:true,message:"Please select an unique value!"})
            }
        } else {
            //Adding warning messages
            setWarning({state:true,message:"Only 4 maximum items can be added!"})
        }
    };

    

    //Removing Selected Items;
    const removeSelectedWatch = (id) => {
        let restSelectedWatch = selectedWatches.filter(
            (watch) => watch.id !== id
        );
        setSelectedWatches(restSelectedWatch);
        // clearing Warning 
        warning.state && setWarning({state:false,message:""});
    };

    //Clear all Selected Items;
    const clearSelectedWatch = () => {
        return setSelectedWatches([]);
    };

    //Random Selection of Watches;
    const randomSelectedWatch = () => {
        if (selectedWatches.length > 0) {
            let randomId = getRandomId(0, selectedWatches.length - 1);
            setRandomWatch(selectedWatches[randomId]);
            // clearing Warning 
            warning.state && setWarning({state:false,message:""});
        } else {
            // alert("please select some items");
            setRandomWatch("");
            setWarning({state:true,message:'Please select some item first!'})
        }
    };

    //Random Id Generated
    function getRandomId(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const closeWarning = () =>{
        setWarning({state:false,message:""})
    }

    return (
        <>
            {/* <Modal showing */}
            {
              selectedWatches.length>0 && <Modal randomWatch={randomWatch}/>
            }

            <section className="watches-box">
                <div className="container">
                    <SectionTitle title="Watch HOUSE" desc="Choose the best watch for yourself."/>
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12 order-md-first order-last">
                            <div className="watch-products-wrapper">

                                <SubTitle title="Pick Your Best One"/>
                                {warning.state && <Warning closeWarning={closeWarning} message={warning.message}/>}

                                <div className="row">
                                    {watches.length > 0 &&
                                        watches.map((watch) => (
                                            <Watch
                                                key={watch.id}
                                                watch={watch}
                                                AddingSelectedWatch={
                                                    AddingSelectedWatch
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-12 order-md-last order-first">
                            <SelectedWatch
                                selectedWatches={selectedWatches}
                                removeSelectedWatch={removeSelectedWatch}
                                clearSelectedWatch={clearSelectedWatch}
                                randomSelectedWatch={randomSelectedWatch}
                            />
                        </div>
                    </div>
                    
                    {/* question section  */}
                    <Questions/>
                </div>
            </section>
           
        </>
    );
}

export default App;
