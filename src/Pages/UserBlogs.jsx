import React, { useEffect, useState } from 'react';
import { getData } from '../Config/Firebase/firebasemethods'; 
import { useParams } from 'react-router-dom'; 

const UserBlogs = () => {
  const { userId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserBlogs = async () => {
    setLoading(true);
    const fetchedBlogs = await getData('blogs', userId); 
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserBlogs();
  }, [userId]);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">User's Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className="w-full h-64 object-cover mt-4 rounded-lg" />}
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default UserBlogs