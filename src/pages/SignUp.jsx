import React from 'react'

const SignUp = () => {
  return (
    <div className='top-6'>
    <div className='w-full h-[70vh] flex items-center justify-center'>
        <form  className=' flex items-center justify-center gap-6 flex-col mt-6 border-2 border-black rounded-md  p-12 bg-blue-100'>
            <h1 className=' text-3xl font-extrabold '>Sign Up</h1>
            <input className=' border-2 border-black rounded-md p-2 placeholder:text-lg text-lg' type="text" name="name" id="name" placeholder='Enter your Name' />
            <input className=' border-2 border-black rounded-md p-2 placeholder:text-lg text-lg' type="text" name="email" id="email" placeholder='Enter your Email' />
            <input className=' border-2 border-black rounded-md p-2 placeholder:text-lg text-lg' type="text" name="password" id="password" placeholder='Enter your Password' />
            <button className=' w-full bg-blue-500 hover:bg-blue-600 rounded-md py-2 text-lg font-semibold text-white'>Sign Up</button>
           

        </form>
    </div>
</div>
  )
}

export default SignUp