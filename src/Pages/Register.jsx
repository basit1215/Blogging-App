// import React from 'react'

// const Register = () => {
//     return (
//         <>

//         </>
//     )
// }

// export default Register





// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { sendData, uploadImage } from '../Config/Firebase/firebasemethods'

// const Register = () => {

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const [userData, setUserData] = useState([]);


//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [profilePic, setProfilePic] = useState(null);

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     // Form submission logic here
//     //     console.log({ fullName, email, password, profilePic });
//     // };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <form onSubmit={handleSubmit(sendDatatoFirestore)} className="w-full max-w-sm p-6 bg-white rounded shadow-md">
//                 <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">
//                         Full Name
//                         {/* <input 
//                         type="text" 
//                         value={fullName} 
//                         onChange={(e) => setFullName(e.target.value)} 
//                         required 
//                         className="w-full p-2 border border-gray-300 rounded"
//                     /> */}
//                         <input
//                             type="text"
//                             placeholder='Full Name'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("fullName", {
//                                 required: "Full Name is required",
//                                 pattern: {
//                                     value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
//                                     message: "Must contain only Letters"
//                                 },
//                                 minLength: {
//                                     value: 3,
//                                     message: "Full Name must be 3 Letters"
//                                 },
//                                 maxLength: {
//                                     value: 30,
//                                     message: "Full Name must be 30 Letters"
//                                 }
//                             })}
//                         />
//                     </label>
//                     {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
//                 </div>

//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Email
//                         <input
//                             type="email"
//                             placeholder='Email'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("email", {
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     message: "Must contain '@' , 'gmail' , '.com'"
//                                 }
//                             })}
//                         />
//                     </label>
//                     {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Password
//                         <input
//                             type="password"
//                             placeholder='password'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("password", {
//                                 required: "Password is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     message: "At least 8 Characters (Uppercase, Lowercase, Number, Special Character)"
//                                 }
//                             })}
//                         />
//                     </label>
//                     {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Profile Picture
//                         <input
//                             type="file"
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("profile", { required: "Profile image is required" })}
//                         />
//                     </label>
//                     {errors.profile && <span className='text-red-600 text-sm'>{errors.profile.message}</span>}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Register;








// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { signUpUser } from '../Config/Firebase/firebasemethods'; // Firebase methods import

// const Register = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [profilePic, setProfilePic] = useState(null);
    
//     const onSubmit = async (data) => {
//         // Image upload and user registration
//         if (profilePic) {
//             const imageUrl = await uploadImage(profilePic, data.email); // Firebase image upload function
//             data.profilePic = imageUrl; // Save image URL to user data
//         }
        
//         signUpUser(data) // Sign up user in Firebase
//             .then((uid) => console.log("User registered with UID:", uid))
//             .catch((error) => console.error("Registration error:", error));
//     };

//     const handleImageChange = (e) => {
//         setProfilePic(e.target.files[0]);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-6 bg-white rounded shadow-md">
//                 <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
                
//                 {/* Full Name */}
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Full Name
//                         <input
//                             type="text"
//                             placeholder='Full Name'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("fullName", {
//                                 required: "Full Name is required",
//                                 pattern: {
//                                     value: /^[A-Za-z\s]+$/,
//                                     message: "Must contain only letters"
//                                 },
//                                 minLength: { value: 3, message: "Minimum 3 characters" },
//                                 maxLength: { value: 30, message: "Maximum 30 characters" }
//                             })}
//                         />
//                     </label>
//                     {errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName.message}</span>}
//                 </div>

//                 {/* Email */}
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Email
//                         <input
//                             type="email"
//                             placeholder='Email'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("email", {
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     message: "Invalid email format"
//                                 }
//                             })}
//                         />
//                     </label>
//                     {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
//                 </div>

//                 {/* Password */}
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Password
//                         <input
//                             type="password"
//                             placeholder='Password'
//                             className='w-full p-2 border border-gray-300 rounded'
//                             {...register("password", {
//                                 required: "Password is required",
//                                 pattern: {
//                                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
//                                     message: "At least 8 characters, including uppercase, lowercase, number, and special character"
//                                 }
//                             })}
//                         />
//                     </label>
//                     {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
//                 </div>

//                 {/* Profile Picture */}
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-semibold">Profile Picture
//                         <input
//                             type="file"
//                             className='w-full p-2 border border-gray-300 rounded'
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             {...register("profilePic", { required: "Profile image is required" })}
//                         />
//                     </label>
//                     {errors.profilePic && <span className='text-red-600 text-sm'>{errors.profilePic.message}</span>}
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Register;










import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'; // Import your firebase methods
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      if (image) {
        const imageUrl = await uploadImage(image, data.email);
        data.profileImage = imageUrl; // Save image URL in the data object
      }
      await signUpUser(data); // Register user
      reset();
      navigate('/login'); // Redirect to login page after registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input 
            type="text" 
            {...register('fullName', { required: 'Full Name is required' })} 
            className={`mt-1 block w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded p-2`} 
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            {...register('email', { required: 'Email is required' })} 
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`} 
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            {...register('password', { required: 'Password is required' })} 
            className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded p-2`} 
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Profile Image</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full border rounded p-2" 
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Register;
