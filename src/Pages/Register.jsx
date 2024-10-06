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
      <section className="bg-[#b8dfff] py-16  px-4 sm:px-6 lg:px-8  h-[79.7vh]">
        <div className="login-section max-w-md mx-auto mt-[180px] lg:mt-[100px] first:md:mt-[70px] bg-gray-100 shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">
            <div>
              <label className="block">
                <span className='text-sm'>Full Name</span>
                <input
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

export default Register