import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../Config/Firebase/firebasemethods'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data); 
      console.log('User logged in:', user); 
      reset(); 
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Login</h2>

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

        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login