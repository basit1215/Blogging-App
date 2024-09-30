import React, { useEffect, useState } from 'react';
import { getData } from '../Config/Firebase/firebasemethods';
import { getAuth } from 'firebase/auth';
import app from '../Config/Firebase/firebaseconfig';

const UserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUserBlogs = async () => {
      if (currentUser) {
        const blogs = await getData('blogs', currentUser.uid);
        setUserBlogs(blogs);
      }
      setLoading(false);
    };

    fetchUserBlogs();
  }, [currentUser]);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Your Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : userBlogs.length > 0 ? (
        userBlogs.map((blog, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className="w-full h-auto mt-2" />}
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default UserBlogs