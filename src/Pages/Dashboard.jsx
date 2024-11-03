import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendData, getData, uploadImage } from '../Config/Firebase/firebasemethods';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth } from 'firebase/auth';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!currentUser) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const userEmail = currentUser.email;

  const onSubmit = async (data) => {
    const { title, description, file } = data;
    let imageUrl = '';

    if (file[0]) {
      imageUrl = await uploadImage(file[0], `blog_images/${userEmail}`);
    }

    const blogData = {
      title,
      description,
      imageUrl,
      uid: currentUser.uid,
    };

    await sendData(blogData, 'blogs');
    fetchBlogs();
  };

  const fetchBlogs = async () => {
    setLoading(true);
    const fetchedBlogs = await getData('blogs', currentUser.uid);
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#b8dfff] py-16  px-4 sm:px-6 lg:px-8  ">
      <h1 className='text-shadow text-center font-bold text-4xl pb-5 text-blue-700 '>Publish New Blog</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 shadow-xl rounded-lg ">

        <div className="mb-4">
          <input
            type="text"
            placeholder="Blog Title"
            {...register('title', { required: 'Title is required' })}
            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Blog Description"
            {...register('description', { required: 'Description is required' })}
            className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="file"
            {...register('file', { required: 'File is required' })}
            className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
          />
          {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"  >
          Publish Blog
        </button>

      </form>
      <br />
      <br />

      <h1 className='text-shadow text-center font-bold text-4xl py-5 text-blue-700 '>Your Blogs</h1>

      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (

            <div key={index} className="border rounded-md p-4 shadow-xl bg-gray-100">
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt="Blog"
                  className="w-full h-48 object-cover mt-4 rounded-md" />
              )}

              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default Dashboard