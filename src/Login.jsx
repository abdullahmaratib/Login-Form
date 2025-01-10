import React, { useState } from 'react'
import './index.css';
import img2 from "../src/assets/email.png"
import img1 from "../src/assets/person.png"
import img3 from "../src/assets/password.png"


const Login = () => {

    const [action, setAction] = useState("Sign Up")

  return (

    <div className='h-screen w-full bg-neutral-800'>

        <div className="h-[auto] rounded-md px-10 py-8 w-[445px] bg-white absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
        
        <h1 className='text-5xl text-[#4c00b4] text-center tracking-tight font-semibold font-poppins'>{action}</h1>
        <div className='h-[5px] w-[60px] bg-[#4c00b4] mx-auto mt-4'></div>

      {/* input */}

     <div className="flex flex-col mt-8">

        {/* box */}

        {action==="Login"?<></>:<div className="flex px-3 py-2 items-center h-[60px] mb-4 w-full bg-[#eaeaea] gap-3 rounded-lg ">

           <img className='w-[18px]' src={img1} alt="" />
          <input type="text"
          placeholder="Name"
          className="py-1 placeholder-gray-500 placeholder-text-bold placeholder:font-semibold outline-none bg-transparent w-full border-none"/>
            </div>}



        <div className="flex px-3 py-2 items-center h-[60px] mb-4 w-full bg-[#eaeaea] gap-3 rounded-lg ">

      <img className='w-[19px]' src={img2} alt="" />

      <input type="email" placeholder="Email id"
       className="py-1 placeholder-gray-500 placeholder-text-bold placeholder:font-semibold outline-none bg-transparent w-full border-none"/>

        </div>

        <div className="flex px-3 py-2 items-center h-[60px] mb-4 w-full bg-[#eaeaea] gap-3 rounded-lg ">

      <img className='w-[15px]' src={img3} alt="" />

      <input type="password"
       placeholder="Password"
       className="py-1 placeholder-gray-500 placeholder-text-bold placeholder:font-semibold outline-none bg-transparent w-full border-none"/>

        </div>



    </div>

{/* forget password */}

{action==="Sign Up"?<></>:<div className="mt-2">
     <p className=' text-sm text-gray-500 font-semibold font-poppins'>Lost Password?
         <span className='ml-1 pointer text-[#4c00b4] font-semibold'>Click Here!</span></p>
    </div>}
 

    {/* button */}

    <div className="flex gap-8 mt-8">

        <button onClick={()=>{setAction("Sign Up")}}  className='text-white transition hover:bg-gray-800 bg-[#4c00b4] font-semibold text-[18px] px-[52px] py-[10px] rounded-3xl'>Sign Up
        </button>
        <button onClick={()=>{setAction("Login")}} className='text-white transition hover:bg-gray-800 bg-[#4c00b4] font-semibold text-[18px] px-[58px] py-[10px] rounded-3xl'>Login</button>

    </div>


        </div>

      

    </div>

  )
}

export default Login
