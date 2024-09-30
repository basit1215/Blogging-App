import React, { useEffect, useState } from 'react';
import { getAllData } from '../Config/Firebase/firebasemethods';
import app from '../Config/Firebase/firebaseconfig';
import { Link } from 'react-router-dom'; 

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
    fetchBlogs()
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">All Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.documentId} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt="Blog"
                  className="w-full h-64 object-cover mt-4 rounded-lg"
                />
              )}
              <Link to="/userBlogs" className="text-blue-500 hover:underline mt-4 block">
                See all blogs by this user
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Home