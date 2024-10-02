// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'; 
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       if (image) {
//         const imageUrl = await uploadImage(image, data.email);
//         data.profileImage = imageUrl; 
//         console.log(data)
//       }
//       await signUpUser(data); 
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

// export default Register





























import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      if (image) {
        const imageUrl = await uploadImage(image, data.email);
        data.profileImage = imageUrl; 
      }
      await signUpUser(data); 

      // Save the user data to local storage
      localStorage.setItem('userData', JSON.stringify(data)); // Save data as string
      reset();
      navigate('/login'); 
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
