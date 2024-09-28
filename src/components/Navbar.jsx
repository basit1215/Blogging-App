// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//     <Link to="">Home</Link>
//     <Link to="dashboard">Dashboard</Link>
//     <Link to="profile">Profile</Link>
//     <Link to="login">Login</Link>
//     <Link to="register">Register</Link>
// </>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (


        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Blogging App</a>
            </div>
            <div className="flex-none gap-2">
                {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
                <div>
                    <Link to="">Home</Link>
                    <Link to="login">Login</Link>
                    <Link to="register">Register</Link>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="profile" className='justify-between'>Profile</Link>
                        </li>
                        <li>
                            <Link to="dashboard">Dashboard</Link>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar