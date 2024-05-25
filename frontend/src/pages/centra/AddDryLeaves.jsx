import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import LeavesForm from "../../components/centra/LeavesForm";

function AddDryLeaves(){
    const [weight, setWeight] = useState(0);
    const [driedDate, setDriedDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDateChange = (event) => {
        setDriedDate(event.target.value);
    };

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleFlour = () => navigate("/flourdryleaves");

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>
                <img src="src/assets/AddPage/mascotAdd.svg" className="absolute left-6 top-96 pt-10 z-40"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Dry Leaves </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> Add </p>
                        <p className="w-48 rounded-full p-1" onClick={handleFlour}> Flour </p>
                    </div>
                </div>

                <br></br>

                <p className="text-lg text-septenary font-semibold"> Total Dried Leaves Daily </p>

                <br></br>

                <LeavesForm 
                    weight={weight}
                    handleWeightChange={handleWeightChange}
                    dateTitle="Dried Date"
                    date={driedDate}
                    handleDateChange={handleDateChange}
                    handleSubmit={handleSubmit}
                    formSubmitted={formSubmitted}
                    leavesType="dry"
                />
            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}

export default AddDryLeaves;