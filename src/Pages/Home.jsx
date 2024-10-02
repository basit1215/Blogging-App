// import React, { useEffect, useState } from 'react';
// import { getAllData } from '../Config/Firebase/firebasemethods';
// import app from '../Config/Firebase/firebaseconfig';
// import { Link } from 'react-router-dom'; 

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     const fetchedBlogs = await getAllData('blogs'); 
//     setBlogs(fetchedBlogs);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs()
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4">
//       <h1 className="text-3xl font-bold mb-8">All Blogs</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : blogs.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <div key={blog.documentId} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">{blog.title}</h3>
//               <p className="mt-2 text-gray-600">{blog.description}</p>
//               {blog.imageUrl && (
//                 <img
//                   src={blog.imageUrl}
//                   alt="Blog"
//                   className="w-full h-64 object-cover mt-4 rounded-lg"
//                 />
//               )}
//               <Link to="/userBlogs" className="text-blue-500 hover:underline mt-4 block">
//                 See all blogs by this user
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No blogs available.</p>
//       )}
//     </div>
//   );
// };

// export default Home

































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
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">All Blogs</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog, index) => (
              <article 
                key={blog.documentId} 
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white p-6 rounded-lg shadow-md transition-transform duration-200`}
              >
                <div className="w-1/2">
                  <img
                    src={blog.imageUrl || './images/placeholder.jpg'} // Default image if no imageUrl
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    alt="Blog Post"
                  />
                </div>
                <div className="w-1/2 pl-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  <Link 
                    to="/userBlogs" 
                    className="btn btn-outline-info bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mt-4 block text-center"
                  >
                    Read More
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

export default Home;





























// import React, { useEffect, useState } from 'react';
// import { getAllData } from '../Config/Firebase/firebasemethods';
// import app from '../Config/Firebase/firebaseconfig';
// import { Link } from 'react-router-dom'; 

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     const fetchedBlogs = await getAllData('blogs'); 
//     setBlogs(fetchedBlogs);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">All Blogs</h1>
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : blogs.length > 0 ? (
//           <div className="grid grid-cols-1 gap-6">
//             {blogs.map((blog, index) => (
//               <article 
//                 key={blog.documentId} 
//                 className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white p-6 rounded-lg shadow-md transition-transform duration-200`}
//               >
//                 <div className="w-1/2">
//                   <img
//                     src={blog.imageUrl || './images/placeholder.jpg'} // Default image if no imageUrl
//                     className="w-full h-48 object-cover rounded-lg mb-4" // Image height decreased
//                     alt="Blog Post"
//                   />
//                 </div>
//                 <div className="w-1/2 pl-4">
//                   <h3 className="text-xl font-semibold">{blog.title}</h3>
//                   <p className="mt-2 text-gray-600 h-48 overflow-hidden">{blog.description}</p> {/* Description height set */}
//                   <div className="flex justify-between mt-4">
//                     <Link 
//                       to={`/blog/${blog.documentId}`} // Link to individual blog page
//                       className="btn btn-outline-info bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//                     >
//                       Read More
//                     </Link>
//                     <Link 
//                       to={`/blog/${blog.documentId}`} // Same link for "See All This Blog" button
//                       className="btn btn-outline-info bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//                     >
//                       See All This Blog
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No blogs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
