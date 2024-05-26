import React, { useState, useEffect } from 'react';

import Sidebar from '../../../components/xyz/Sidebar';
import "../../../style/AdminDesktop.css";
import CentraMonitorTable from '../../../components/xyz/CentraMonitorTable';
import CentraMonitorBar from '../../../components/xyz/CentraMonitorBar';

import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import bell from "../../../assets/desktop/bellicon.svg";

const CentraActivityMonitor = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [dataType, setDataType] = useState('Wet Leaves');

  const handleDataTypeChange = (type) => {
    setDataType(type);
  };

  return (
    <div className='bg-primary w-screen h-screen overflow-hidden flex flex-row'>
      <Sidebar />
      <div className='bg-white rounded-xl h-auto w-4/5 mt-3 mb-3 mr-3 p-4 overflow-y-auto'>
        <div className="flex justify-between items-center mb-5">
          <h1 className='text-4xl font-semibold text-left ml-9 mt-9 mb-3'>Centra Activity Monitor</h1>
          <span className="flex items-center mr-9 mt-9">
            <img src={bell} className="mr-4" alt="notification" />
            <img src={profilepic} alt='profile picture' />
          </span>
        </div>
        <div className="ml-9 mb-5">
          <p className="text-left text-sm bg-quinary text-black border border-green-800 w-fit px-2 rounded">Date: {date.toLocaleDateString()}</p>
        </div>
        <div className='bg-quinary rounded-xl mt-4 ml-9 mr-9 w-auto'>
          <CentraMonitorTable dataType={dataType} handleDataTypeChange={handleDataTypeChange} />
        </div>

        <div className='bg-quinary rounded-xl mt-4 ml-9 mr-9 mb-4 w-auto'>
          <h2 className='text-left font-medium text-xl pt-6 ml-6'>Statistics</h2>
          <CentraMonitorBar />
        </div>
      </div>
    </div>
  );
};

export default CentraActivityMonitor;
