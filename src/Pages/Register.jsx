// import React, { useState , useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import { signUpUser, uploadImage} from '../Config/Firebase/firebasemethods'; 
// import { useNavigate , Link } from 'react-router-dom';

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [image, setImage] = useState();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       if (image) {
//         const imageUrl = await uploadImage(image, data.email);
//         data.profileImage = imageUrl; 
//       }
//       await signUpUser(data); 

//       // Save the user data to local storage
//       localStorage.setItem('userData', JSON.stringify(data)); // Save data as string
//       reset();
//       navigate('/login'); 
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Register</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700">Full Name</label>
//           <input 
//             type="text" 
//             {...register('fullName', { required: 'Full Name is required' })} 
//             className={`mt-1 block w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded p-2`} 
//           />
//           {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
//         </div>

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

//         <div className="mb-4">
//           <label className="block text-gray-700">Profile Image</label>
//           <input 
//             type="file" 
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="mt-1 block w-full border rounded p-2" 
//           />
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;














// import React, { useRef, useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'
// import { Link, useNavigate } from 'react-router-dom'
// // import { CircularProgress } from '@mui/material'
// // import Swal from 'sweetalert2'

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const fullName = useRef()
//   const email = useRef()
//   const password = useRef()
//   const myFile = useRef()

//   const [loading, setloading] = useState(false)

//   // for navigation
//   const navigate = useNavigate()

//   const registerUser = async (event) => {
//     event.preventDefault()
//     setloading(true)
//     try {
//       // image to url converter
//       const userProfileUrl = await uploadImage(myFile.current.files[0], email.current.value)
//       console.log(userProfileUrl);

//       const registerUserData = await signUpUser({
//         fullname: fullName.current.value,
//         email: email.current.value,
//         password: password.current.value,
//         userProfile: userProfileUrl
//       })

//         // Swal.fire({
//         //   title: 'Success!',
//         //   text: 'Your are Register Successfully',
//         //   icon: 'success',
//         //   confirmButtonColor: '#234e94',
//         //   confirmButtonText: 'Login'
//         // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             navigate('/login')
//           }
//         });
//       console.log('user register successfully', registerUserData);
//       setloading(false)
//     } catch (error) {
//       setloading(false)
//       console.log("Use Another Email")
//         // Swal.fire({
//         //   title: error,
//         //   text: 'Use Another Email',
//         //   icon: 'error',
//         //   confirmButtonText: 'Try Again',
//         //   confirmButtonColor: '#de2323',
//         // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             // navigate('/login')
//           }
//         });
//     }

//   }
//   return (
//     <div>

//       <section className="container mx-auto p-4">
//         <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-white shadow-lg p-6 rounded-lg">
//           <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">
//             <input
//               ref={fullName}
//               type="text"
//               {...register('fullName', { required: 'Full Name is required' })}
//               placeholder="Full Name"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.fullName && 'border-red-500'}`}
//             />
//             {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
//             <input
//               ref={email}
//               type="email"
//               {...register('email', { required: 'Email is required' })}
//               placeholder="Email"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email && 'border-red-500'}`}
//             />
//             {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//             <input
//               ref={password}
//               type="password"
//               {...register('password', { required: 'Password is required' })}
//               placeholder="Password"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password && 'border-red-500'}`}
//             />
//             {errors.password && <span className="text-red-500">{errors.password.message}</span>}


//             <input  type="file"
//               ref={myFile}
//               placeholder="file" {...register("profile", { required: true })}
//                />
//           {errors.profile && <span className='text-red-600 text-sm'>Profile Image is required</span>}


//             <div id="loadingDiv" className="mt-4">
//               <div className="text-center">
//                 <button
//                   id="registorBtn"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                 >
//                   {loading ? <CircularProgress color='white' className='mt-1' size="20px" /> : "Register"}
//                 </button>
//                 <br />
//               </div>
//             </div>
//             <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
//               ALREADY A USER? PLEASE LOGIN
//             </Link>
//           </form>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Register



















// import React, { useRef, useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'
// import { Link, useNavigate } from 'react-router-dom'
// // import { CircularProgress } from '@mui/material'
// // import Swal from 'sweetalert2'

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const fullName = useRef()
//   const email = useRef()
//   const password = useRef()
//   const myFile = useRef()

//   const [loading, setLoading] = useState(false)

//   // for navigation
//   const navigate = useNavigate()

//   const registerUser = async (data) => {
//     setLoading(true)
//     console.log(data)
//     try {
//       // image to url converter
//       const userProfileUrl = await uploadImage(myFile.current.files[0], data.email)
//       console.log(userProfileUrl);
//       console.log(data)
//       const registerUserData = await signUpUser({
//         fullname: data.fullName,
//         email: data.email,
//         password: data.password,
//         userProfile: userProfileUrl

//       });

//       console.log('user registered successfully', registerUserData);

//       setLoading(false);

//       // Swal.fire({
//       //   title: 'Success!',
//       //   text: 'You are Registered Successfully',
//       //   icon: 'success',
//       //   confirmButtonColor: '#234e94',
//       //   confirmButtonText: 'Login'
//       // }).then((result) => {
//       //   if (result.isConfirmed) {
//       //     navigate('/login')
//       //   }
//       // });

//       navigate('/login');
//     } catch (error) {
//       setLoading(false);
//       console.log("Use Another Email");
//       console.log(error)


//       // Swal.fire({
//       //   title: error,
//       //   text: 'Use Another Email',
//       //   icon: 'error',
//       //   confirmButtonText: 'Try Again',
//       //   confirmButtonColor: '#de2323',
//       // }).then((result) => {
//       //   if (result.isConfirmed) {
//       //     // navigate('/login')
//       //   }
//       // });
//     }
//   }

//   return (
//     <div>
//       <section className="container mx-auto p-4">
//         <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-white shadow-lg p-6 rounded-lg">
//           <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">
//             <input
//               ref={fullName}
//               type="text"
//               {...register('fullName', { required: 'Full Name is required' })}
//               placeholder="Full Name"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.fullName && 'border-red-500'}`}
//             />
//             {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}

//             <input
//               ref={email}
//               type="email"
//               {...register('email', { required: 'Email is required' })}
//               placeholder="Email"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email && 'border-red-500'}`}
//             />
//             {errors.email && <span className="text-red-500">{errors.email.message}</span>}

//             <input
//               ref={password}
//               type="password"
//               {...register('password', { required: 'Password is required' })}
//               placeholder="Password"
//               className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password && 'border-red-500'}`}
//             />
//             {errors.password && <span className="text-red-500">{errors.password.message}</span>}

//             <input
//               type="file"
//               ref={myFile}
//               placeholder="Profile Image"
//               {...register("profile", { required: true })}
//             />
//             {errors.profile && <span className='text-red-600 text-sm'>Profile Image is required</span>}

//             <div id="loadingDiv" className="mt-4">
//               <div className="text-center">
//                 <button
//                   id="registorBtn"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                 >
//                   {loading ? 'Loading...' : 'Register'}
//                 </button>
//                 <br />
//               </div>
//             </div>

//             <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
//               ALREADY A USER? PLEASE LOGIN
//             </Link>
//           </form>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Register;




























// import React, { useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const myFile = useRef();
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // const registerUser = async (data) => {
//   //   setLoading(true);
//   //   try {
//   //     // Check if file is selected
//   //     if (myFile.current.files.length > 0) {
//   //       const userProfileUrl = await uploadImage(myFile.current.files[0], data.email);
//   //       console.log(userProfileUrl);

//   //       const registerUserData = await signUpUser({
//   //         fullname: data.fullName,
//   //         email: data.email,
//   //         password: data.password,
//   //         userProfile: userProfileUrl
//   //       });

//   //       console.log('User registered successfully', registerUserData);
//   //       setLoading(false);
//   //       navigate('/login');
//   //     } else {
//   //       throw new Error('Profile Image is required');
//   //     }
//   //   } catch (error) {
//   //     setLoading(false);
//   //     console.log("Registration failed:", error.message);
//   //   }
//   // };


//   const registerUser = async (data) => {
//     setLoading(true);
//     try {
//       // Check if file is selected
//       if (myFile.current && myFile.current.files.length > 0) {
//         const file = myFile.current.files[0]; // Get the selected file
//         const userProfileUrl = await uploadImage(file, data.email);
//         console.log("Uploaded Image URL: ", userProfileUrl);

//         const registerUserData = await signUpUser({
//           fullname: data.fullName,
//           email: data.email,
//           password: data.password,
//           userProfile: userProfileUrl
//         });

//         console.log('User registered successfully', registerUserData);
//         alert('Your registration was successful! You can now log in.'); // Normal alert for success
//         navigate('/login');
//       }
//     } catch (error) {
//       console.log("Registration failed:", error.message);
//     } finally {
//       setLoading(false); // Ensure loading state is turned off
//     }
//   };

//   const handleFileChange = (event) => {
//     myFile.current = event.target.files; // Set the file to the ref
//   };


//   return (
//     <div>
//       <section className="container mx-auto p-4">
//         <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] bg-white shadow-lg p-6 rounded-lg">
//           <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">

//             <div className="mb-4">
//               <label className="block text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 {...register('fullName', { required: 'Full Name is required' })}
//                 placeholder="Full Name"
//                 className={`mt-1 block w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
//               />
//               {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 {...register('email', { required: 'Email is required' })}
//                 placeholder="Email"
//                 className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`} />
//               {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 {...register('password', { required: 'Password is required' })}
//                 placeholder="Strong Password"
//                 className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2`} />
//               {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Profile Image</label>
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 ref={myFile}
//                 placeholder="Profile Image"
//                 {...register("profile", { required: "Profile image is required" })}
//                 className="mt-1 block w-full border rounded p-2" />
//               {errors.profile && <span className='text-red-500'>{errors.profile.message}</span>}
//             </div>


//             <div className="text-center mt-4">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Loading...' : 'Register'}
//               </button>
//             </div>

//             <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
//               ALREADY A USER? PLEASE LOGIN
//             </Link>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;

































































































































































































































































// import React, { useRef, useState } from 'react'
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'
// import { Link, useNavigate } from 'react-router-dom'
// // import Navbar from '../components/Navbar'
// // import { CircularProgress } from '@mui/material'
// // import Swal from 'sweetalert2'

// const Register = () => {
//   const fullName = useRef()
//   const email = useRef()
//   const password = useRef()
//   const myFile = useRef()

//   const [loading, setloading] = useState(false)

//   // for navigation
//   const navigate = useNavigate()

//   const registerUser = async (event) => {
//     event.preventDefault()
//     setloading(true)
//     try {
//       // image to url converter
//       const userProfileUrl = await uploadImage(myFile.current.files[0], email.current.value)
//       console.log(userProfileUrl);

//       const registerUserData = await signUpUser({
//         fullname: fullName.current.value,
//         email: email.current.value,
//         password: password.current.value,
//         userProfile: userProfileUrl
//       })
//       navigate('/dashboard')
//       // Swal.fire({
//       //   title: 'Success!',
//       //   text: 'Your are Register Successfully',
//       //   icon: 'success',
//       //   confirmButtonColor: '#234e94',
//       //   confirmButtonText: 'Login'
//       // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             navigate('/login')
//           }
//         });
//       console.log('user register successfully', registerUserData);
//       setloading(false)
//     } catch (error) {
//       setloading(false)
//       // Swal.fire({
//       //   title: error,
//       //   text: 'Use Another Email',
//       //   icon: 'error',
//       //   confirmButtonText: 'Try Again',
//       //   confirmButtonColor: '#de2323',
//       // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             // navigate('/login')
//           }
//         });
//     }

//   }
//   return (
//     <div>
//       {/* <Navbar login="Login" /> */}
//       <section className="container mx-auto p-4">
//         <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-white shadow-lg p-6 rounded-lg">
//           <form onSubmit={registerUser} className="flex flex-col gap-4">
//             <input
//               ref={fullName}
//               className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               type="text"
//               placeholder="Full Name"
//               required
//             />
//             <input
//               ref={email}
//               type="email"
//               placeholder="Email"
//               className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               ref={password}
//               type="password"
//               placeholder="Password"
//               required
//               className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="file"
//               ref={myFile}
//               placeholder="file"
//               required
//               className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div id="loadingDiv" className="mt-4">
//               <div className="text-center">
//                 <button
//                   id="registorBtn"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                 >
//                    Register
//                 </button>
//                 <br />
//               </div>
//             </div>
//             <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
//               ALREADY A USER? PLEASE LOGIN
//             </Link>
//           </form>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Register



































// import React, { useRef, useState } from 'react'
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'
// import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form';
// // import Navbar from '../components/Navbar'
// // import { CircularProgress } from '@mui/material'
// // import Swal from 'sweetalert2'

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Initialize useForm
//   const fullName = useRef()
//   const email = useRef()
//   const password = useRef()
//   const myFile = useRef()

//   const [loading, setloading] = useState(false)

//   // for navigation
//   const navigate = useNavigate()

//   const registerUser = async (event) => {
//     // event.preventDefault()
//     setloading(true)
//     try {
//       // image to url converter
//       const userProfileUrl = await uploadImage(myFile.current.files[0], email.current.value)
//       console.log(userProfileUrl);

//       const registerUserData = await signUpUser({
//         fullname: fullName.current.value,
//         email: email.current.value,
//         password: password.current.value,
//         userProfile: userProfileUrl
//       })
//       reset()
//       navigate('/dashboard')
//         // Swal.fire({
//         //   title: 'Success!',
//         //   text: 'Your are Register Successfully',
//         //   icon: 'success',
//         //   confirmButtonColor: '#234e94',
//         //   confirmButtonText: 'Login'
//         // })
//         .then((result) => {
//           if (result.isConfirmed) {
//             navigate('/login')
//           }
//         });
//       console.log('user register successfully', registerUserData);
//       setloading(false)
//     } catch (error) {
//       setloading(false)
//         // Swal.fire({
//         //   title: error,
//         //   text: 'Use Another Email',
//         //   icon: 'error',
//         //   confirmButtonText: 'Try Again',
//         //   confirmButtonColor: '#de2323',
//         // })
      
//     }

//   }
//   return (
//     <div>
//       {/* <Navbar login="Login" /> */}
//       <section className="container mx-auto p-4">
//         <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-white shadow-lg p-6 rounded-lg">
//           <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">

//             <div>
//               <label className="block">
//                 <span className='text-sm'>Full Name</span>
//                 <input
//                   ref={fullName}
//                   className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   type="text"
//                   placeholder="Full Name"

//                   {...register("fullName", {
//                     required: "Full Name is required",
//                     pattern: {
//                       value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                       message: "Must contain only Letters"
//                     },
//                     minLength: {
//                       value: 3,
//                       message: "Full Name must be 3 Letters"
//                     },
//                     maxLength: {
//                       value: 30,
//                       message: "Full Name must be 30 Letters"
//                     }
//                   })}
//                 />
//               </label>
//               {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
//             </div>

//             <div>
//               <label className="block">
//                 <span className='text-sm'>Email</span>
//                 <input
//                   ref={email}
//                   type="email"
//                   placeholder="Email"
//                   className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                       message: "Must contain '@' , 'gmail' , '.com'"
//                     }
//                   })}
//                 />
//               </label>
//               {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
//             </div>

//             <div>
//               <label className="block">
//                 <span className='text-sm'>Password</span>
//                 <input
//                   ref={password}
//                   type="password"
//                   placeholder="Password"

//                   {...register('password', { required: 'Password is required' })}
//                   className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

//                 />
//               </label>
//               {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//             </div>

//             <div>
//               <label className="block">
//                 <span className='text-sm'>Profile Image</span>
//                 <input
//                   type="file"
//                   ref={myFile}
//                   placeholder="Profile Image"

//                   {...register("profile", { required: "Profile image is required" })}
//                   className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </label>
//               {errors.profile && <span className='text-red-600 text-sm'>{errors.profile.message}</span>}
//             </div>


//             <div id="loadingDiv" className="mt-4">
//               <div className="text-center">
//                 <button
//                   id="registorBtn"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
//                 >
//                   Register
//                 </button>
//                 <br />
//               </div>
//             </div>
            

//             <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
//               ALREADY A USER? PLEASE LOGIN
//             </Link>

//           </form>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Register



























import React, { useRef, useState } from 'react';
import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const fileRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (data) => {
    setLoading(true);
    try {
      // Check if a file is selected
      if (!fileRef.current.files[0]) {
        throw new Error("Please select a profile image.");
      }

      // Upload the image
      const userProfileUrl = await uploadImage(fileRef.current.files[0], data.email);
      console.log("Image uploaded: ", userProfileUrl);

      // Register the user
      const registerUserData = await signUpUser({
        fullname: data.fullName,
        email: data.email,
        password: data.password,
        userProfile: userProfileUrl,
      });
      
      console.log("User registered successfully: ", registerUserData);
      reset(); // Reset the form after successful registration
      setLoading(false);

      // Navigate to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Registration error: ", error.message);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div>
      <section className="container mx-auto p-4">
        <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">

            <div>
              <label className="block">
                <span className='text-sm'>Full Name</span>
                <input
                  ref={fullNameRef}
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                    pattern: {
                      value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                      message: "Must contain only Letters",
                    },
                    minLength: {
                      value: 3,
                      message: "Full Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Full Name must be less than 30 characters",
                    }
                  })}
                />
              </label>
              {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-sm'>Email</span>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    }
                  })}
                />
              </label>
              {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-sm'>Password</span>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('password', { required: 'Password is required' })}
                />
              </label>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-sm'>Profile Image</span>
                <input
                  type="file"
                  ref={fileRef}
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              {errors.profile && <span className='text-red-600 text-sm'>{errors.profile.message}</span>}
            </div>

            <div id="loadingDiv" className="mt-4 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>

            <Link to='/login' className="text-center text-blue-500 hover:underline mt-4">
              Already a user? Please login
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
