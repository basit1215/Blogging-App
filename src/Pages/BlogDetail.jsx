// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const BlogDetail = () => {
//   const { id } = useParams(); // Get blog id from URL
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchBlogDetail = async () => {
//     const fetchedBlogs = await getAllData('blogs'); 
//     const singleBlog = fetchedBlogs.find(blog => blog.documentId === id);
//     setBlog(singleBlog);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogDetail();
//   }, [id]);

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : blog ? (
//           <article className="bg-white p-6 rounded-lg shadow-md">
//             <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//             <img src={blog.imageUrl || './images/placeholder.jpg'} className="w-full h-64 object-cover rounded-lg mb-4" alt="Blog Post" />
//             <p className="text-gray-600">{blog.description}</p>
//           </article>
//         ) : (
//           <p>Blog not found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;













