import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <div className='top-6'>
        <div className='w-full h-[70vh] flex items-center justify-center'>
            <form  className=' flex items-center justify-center gap-6 flex-col mt-6 border-2 border-black rounded-md  p-12 bg-blue-100'>
                <h1 className=' text-3xl font-extrabold '>Sign In</h1>
                <input className=' border-2 border-black rounded-md p-2 placeholder:text-lg text-lg' type="text" name="email" id="email" placeholder='Enter your Email' />
                <input className=' border-2 border-black rounded-md p-2 placeholder:text-lg text-lg' type="text" name="email" id="email" placeholder='Enter your Email' />
                <div className=' w-full'>
                <button className=' w-full bg-blue-500 hover:bg-blue-600 rounded-md py-2 text-lg font-semibold text-white'>Sign In</button>
                <Link to={'/signup'} >
                    <h1 className=' mt-3 font-bold'>Or SingUp instead </h1>
                </Link>
                </div>

            </form>
        </div>
    </div>
  )
}

export default SignIn