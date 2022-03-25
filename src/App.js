import "./App.css";
import React, { useState } from "react";
import watches from "./fakeData/watches";
import Watch from "./component/Watches/Watch/Watch";
import SelectedWatch from "./component/SelectedWatch/SelectedWatch";
import Modal from "./component/Modal/Modal";
import Header from "./component/Header/Header";
import SectionTitle from "./component/SectionTitle/SectionTitle";
import SubTitle from "./component/SubTitle/SubTitle";

function App() {
    const [selectedWatches, setSelectedWatches] = useState([]);
    const [randomWatch, setRandomWatch] = useState("");

    
    //alertMessage create
    // const alertMessage = () => {
    //   console.log('alert message')
    // }

    //Adding Product To cart
    const AddingSelectedWatch = (selectedWatch) => {
        //checking uniq items
        const exists = selectedWatches.includes(selectedWatch);

        if (selectedWatches.length < 4) {
            if (!exists) {
                let newSelected = [...selectedWatches, selectedWatch];
                setSelectedWatches(newSelected);
            } else {
                alert("Please Select an Unique Value");
            }
        } else {
            alert("Max 4 items can be added");
        }
    };

    

    //Removing Selected Items;
    const removeSelectedWatch = (id) => {
        let restSelectedWatch = selectedWatches.filter(
            (watch) => watch.id !== id
        );
        setSelectedWatches(restSelectedWatch);
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
        } else {
            alert("please select some items");
            setRandomWatch("");
        }
    };

    //Random Id Generated
    function getRandomId(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            {
              selectedWatches.length>0 && <Modal randomWatch={randomWatch}/>
            }
            {/* Layout Component */}
            <section className="watches-box">
                <div className="container">
                    <SectionTitle/>
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12 order-md-first order-last">
                            <div className="watch-products-wrapper">
                                <SubTitle title="Pick Your Best One"/>


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
                </div>
            </section>
        </>
    );
}

export default App;
