import React, { useEffect, useState } from 'react';
import { getAllData } from '../Config/Firebase/firebasemethods';
import { Link } from 'react-router-dom';
import '../index.css'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    const fetchedBlogs = await getAllData('blogs');
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div className="bg-[#b8dfff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-shadow text-4xl font-bold mb-8 text-center text-blue-600 ">All Blogs</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">

            {blogs.map((blog, index) => (

              <article
                key={blog.documentId}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-200`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={blog.imageUrl || './images/placeholder.jpg'}
                    className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-0"
                    alt="Blog Post"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h3 className="text-lg md:text-xl font-semibold">{blog.title}</h3>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  <Link
                    to={`/userblogs/${blog.uid}`}
                    className="btn btn-outline-info bg-blue-500 text-white font-semibold py-2 md:py-4 px-4 rounded-md hover:bg-blue-600 transition duration-300 mt-2 block text-center"
                  >
                    See All Blogs from this User
                  </Link>
                </div>
              </article>

            ))}
          </div>
        ) : (
          <p className="text-center">No blogs available.</p>
        )}
      </div>
    </div>
  );
};
export default Home