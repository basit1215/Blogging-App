import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { loginUser } from '../Config/Firebase/firebasemethods'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
      navigate('/dashboard');

    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <section className="bg-[#b8dfff] py-1 pb-4  px-4 sm:px-6 lg:px-8 h-[82.6vh]">
        <div className="login-section max-w-md mx-auto  lg:mt-[100px] first:md:mt-[50px] bg-gray-100  p-6 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit(loginUserFunc)} className="flex flex-col gap-4">
            <h1 className="text-shadow text-4xl font-bold mb-4 text-center text-blue-600 ">Login</h1>
            <div>
              <label className="block">
                <span className='text-base text-blue-500 pl-1'>Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  className='w-full h-12 border border-gray-300 rounded-xl pl-5 mt-2  focus:bg-gray-50 focus:border-blue-500 focus:outline-none'
                  {...register("email", {
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

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <Link to='/register' className="text-left text-sm text-blue-500 hover:underline pl-1 ">
              Don't have an account? Register
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login