import { useState, useEffect } from "react";
import "../../style/AdminDesktop.css"
import { login } from "../../../api/authAPI";
import { Navigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import eye from "../../assets/auth-desktop/eye.svg";
import eyeClosed from "../../assets/auth-desktop/eyeclosed.svg";
import MoferaLogo from "../../assets/auth-desktop/mofera-login.svg"
import TopCorner from "../../assets/auth-desktop/login-tc.svg"
import BottomCorner from "../../assets/auth-desktop/bc-login.svg"
import Mascot from "../../assets/auth-desktop/login-mascot.svg"
import {motion} from "framer-motion"


function ResetPassDesktop() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
    
        try {
          const response = await login(formData);
          Navigate('/centradashboard');
        } catch (error) {
          console.error("Error: ", error)
        }
    };

    

    return (
    //     <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //     transition={{ duration: 0.5 }}
    // >
         <div className="bg-white h-screen">
            <div className="flex">
                <div className="relative w-full">
                <img src={MoferaLogo} alt="logo" className="absolute top-0 pt-5 pl-5 z-50 w-40"/>
                    <img src={TopCorner} alt="" className="fixed z-10"/>
                    <img src={BottomCorner} alt="" className="fixed bottom-0 right-0 h-99.999vh"/>
                    <img 
                        src={Mascot}
                        alt="mascot" 
                        className="fixed right-24 top-32 h-md:top-32 h-lg:top-24 w-1/3"
                    />

                    <div className="absolute bg-white">

                    <motion.div
                    initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
                    animate={{ opacity: 1, x: 0 }} // Slide to the right into view
                    exit={{ opacity: 0, x: 200 }} // Slide out to the right when exiting
                    transition={{ duration: 0.5 }}
                    className="absolute z-20 p-10"
                    >
                    <form onSubmit={handleLogin} className="relative z-20 flex flex-col justify-start pt-36 pl-20 text-primary">
                        <p className='text-secondary font-bold text-4xl text-left'> Create New Password</p>
                        
                        <label htmlFor="password" className="text-left secondary font-medium pt-5 text-base">Password</label>
                            <Input
                                type={isVisible ? "text" : "password"}
                                radius="sm"
                                className="pt-1 w-96" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endContent= {
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <img src={eye} alt="eyeClosed" className="w-5"/>
                                        ) : (
                                            <img src={eyeClosed} alt="eyeClosed" className="w-5"/>
                                        )}
                                    </button>
                                }
                            />

                        <label htmlFor="confirmpassword" className="text-left secondary font-medium pt-5 text-base"> Confirm Password</label>
                            <Input
                                type={isVisible2 ? "text" : "password"}
                                radius="sm"
                                className="pt-1 w-96" 
                                endContent= {
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                                        {isVisible2 ? (
                                            <img src={eye} alt="eyeClosed" className="w-5"/>
                                        ) : (
                                            <img src={eyeClosed} alt="eyeClosed" className="w-5"/>
                                        )}
                                    </button>
                                }
                            />

                        <div className=''>
                            <Button
                            className="w-36 mt-8 bg-secondary text-white text-base font-bold"
                            radius="full"
                            >
                            Reset
                            </Button>
                        </div>

                    </form>
                    </motion.div>
                    
                    </div>
                </div>
            </div>
        </div>
        
    // </motion.div>
       
    )
}

export default ResetPassDesktop;