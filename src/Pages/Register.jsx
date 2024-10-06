import React, { useRef, useState } from 'react';
import { signUpUser, uploadImage } from '../Config/Firebase/firebasemethods';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (data) => {
    setLoading(true);
    try {
      if (!fileRef.current.files[0]) {
        throw new Error("Please select a profile image.");
      }

      const userProfileUrl = await uploadImage(fileRef.current.files[0], `profile_images/${data.email}`);
      console.log("Profile image uploaded: ", userProfileUrl);

      const registerUserData = await signUpUser({
        fullname: data.fullName,
        email: data.email,
        password: data.password,
        userProfile: userProfileUrl,
      });

      console.log("User registered successfully: ", registerUserData);
      reset();
      setLoading(false);

      navigate('/dashboard');
    } catch (error) {
      console.error("Registration error: ", error.message);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div>
      <section className="bg-[#b8dfff] py-1 pb-16  px-4 sm:px-6 lg:px-8 ">
        <div className="login-section max-w-md mx-auto  lg:mt-[100px] first:md:mt-[70px] bg-gray-100  p-6 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">
            <h1 className="text-shadow text-4xl font-bold mb-4 text-center text-blue-600 ">Register</h1>
            <div>
              <label className="block">
                <span className='text-base text-blue-500 pl-1'>Full Name</span>
                <input
                  className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2 focus:bg-gray-50 focus:border-blue-500 focus:outline-none'
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
              {errors.fullName && <span className='text-red-600 text-sm pl-1'>{errors.fullName.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-base text-blue-500 pl-1'>Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2  focus:bg-gray-50 focus:border-blue-500 focus:outline-none'                   {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    }
                  })}
                />
              </label>
              {errors.email && <span className='text-red-600 text-sm pl-1'>{errors.email.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-base text-blue-500 pl-1'>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2 focus:bg-gray-50 focus:border-blue-500 focus:outline-none'
                  {...register('password', { required: 'Password is required' })}
                />
              </label>
              {errors.password && <span className="text-red-600 text-sm pl-1">{errors.password.message}</span>}
            </div>

            <div>
              <label className="block">
                <span className='text-base text-blue-500 pl-1'>Profile Image</span>
                <input
                  type="file"
                  ref={fileRef}
                  className='w-full h-12 border border-gray-300 rounded-xl pl-5 pt-2 mt-2 focus:bg-gray-50 focus:border-blue-500 focus:outline-none'
                  {...register("profile", { required: "Profile image is required" })}
                />
              </label>
              {errors.profile && <span className='text-red-600 text-sm pl-1'>{errors.profile.message}</span>}
            </div>

            <div id="loadingDiv" className="mt-4 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>

            <Link to='/login' className="text-left text-sm text-blue-500 hover:underline pl-1">
            Already have an account? Log in
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register