// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { loginUser } from '../Config/Firebase/firebasemethods';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const user = await loginUser(data);
//       console.log('User logged in:', user);
//       reset();
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Login</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
//           />
//           {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
//           />
//           {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login








// import React, { useRef, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginUser } from '../Config/Firebase/firebasemethods'
// // import { CircularProgress } from '@mui/material'
// // import Swal from 'sweetalert2'

// const Login = () => {
//   const email = useRef()
//   const password = useRef()
//   const navigate = useNavigate()

//   const [loading, setloading] = useState(false)

//   const loginUserFunc = async (event) => {
//     setloading(true)
//     event.preventDefault()
//     console.log(email.current.value);
//     console.log(password.current.value);

//     try {
//       const loginUserFromDatabase = await loginUser({
//         email: email.current.value,
//         password: password.current.value
//       })
//         // Swal.fire({
//         //     title: 'Success!',
//         //     text: 'Your are Login Successfully',
//         //     icon: 'success',
//         //     confirmButtonText: 'Login',
//         //     confirmButtonColor: '#234e94'
//         // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             navigate('/dashbord')
//           }
//         });
//       console.log('user login ho giya', loginUserFromDatabase);
//       setloading(false)
//     } catch (error) {
//             // Swal.fire({
//             //     title: error,
//             //     text: 'Please check email & password!',
//             //     icon: 'error',
//             //     confirmButtonColor: '#de2323',
//             //     confirmButtonText: 'Try Again',
//             // })
//                 .then((result) => {
//       if (result.isConfirmed) {
//         // navigate('/dashbord')
//       }
//     });
// setloading(false)
//         }
//     }

// return (
//   <>
//     <Navbar register="Register" />
//     <section className="container mx-auto p-4">
//       <div className="login-section mt-[200px] lg:mt-[100px] first:md:mt-[100px] max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
//         <form onSubmit={handleSubmit()} className="flex flex-col gap-4">

//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               ref={email}
//               {...register('email', { required: 'Email is required' })}
//               className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
//             />
//             {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               ref={password}
//               placeholder="Password"
//               {...register('password', { required: 'Password is required' })}
//               className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
//             />
//             {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//           </div>

//           {/* <div className="mt-4">
//                             <div className="text-center">
//                                 <button
//                                     id="registorBtn"
//                                     className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                                 >
//                                     {loading ? <CircularProgress color='white' className='mt-1' size="20px" /> : "Login"}
//                                 </button>
//                                 <br />
//                             </div>
//                         </div> */}
//           <Link to='/register' className="text-center text-blue-500 hover:underline mt-4" >
//             NOT A USER? PLEASE REGISTER FIRST
//           </Link>
//         </form>
//       </div>
//     </section>
//   </>
// )
// }

// export default Login





















































































































import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { loginUser } from '../Config/Firebase/firebasemethods'
// import Swal from 'sweetalert2'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginUserFunc = async (data) => {
    setLoading(true);
    console.log(data.email, data.password);

    try {
      const loginUserFromDatabase = await loginUser({
        email: data.email,
        password: data.password
      });

      console.log('User logged in successfully', loginUserFromDatabase);
      setLoading(false);
      
      // Swal.fire({
      //   title: 'Success!',
      //   text: 'Your are logged in successfully',
      //   icon: 'success',
      //   confirmButtonText: 'Go to Dashboard',
      //   confirmButtonColor: '#234e94'
      // }).then(() => {
        navigate('/dashboard');
      // });
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);

      // Swal.fire({
      //   title: 'Error',
      //   text: 'Please check email & password!',
      //   icon: 'error',
      //   confirmButtonText: 'Try Again',
      //   confirmButtonColor: '#de2323'
      // });
    }
  };

  return (
    <>
      {/* <Navbar register="Register" /> */}
      <section className="container mx-auto p-4">
        <div className="login-section mt-[200px] lg:mt-[100px] max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit(loginUserFunc)} className="flex flex-col gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
                className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
                className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <Link to='/register' className="text-center text-blue-500 hover:underline mt-4">
              NOT A USER? PLEASE REGISTER FIRST
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;
