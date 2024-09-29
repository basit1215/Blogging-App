// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home











import React, { useEffect, useState } from 'react';
import { getAllData } from '../Config/Firebase/firebasemethods';
import app from '../Config/Firebase/firebaseconfig';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    const fetchedBlogs = await getAllData('blogs'); // Fetch all blogs from Firestore
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when component mounts
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.documentId} className="mb-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className="w-full h-auto mt-2" />}
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Home;

