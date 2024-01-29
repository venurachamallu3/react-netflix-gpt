import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>
    <div><Header/></div>
    <div>
        <img  src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg' alt='bg-image' className='' ></img>
    </div>
    <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <input type="text" placeholder='email' className='p-2 m -2'></input>
        <input type="password" className='p-2 m-2' ></input>
        <button>Sign In</button>
    </form>
    </>
  )
}

export default Login