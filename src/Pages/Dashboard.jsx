// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { getData, sendData, uploadImage, auth } from '../Config/Firebase/firebasemethods';
// import { onAuthStateChanged } from 'firebase/auth';

// const Dashboard = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         console.log(user.uid);
//         const allBlogs = await getData("BlogData", user.uid);
//         console.log(allBlogs);
//         setBlogs(allBlogs);
//       }
//     });
//   }, []);

  // const onSubmit = (data) => {
  //   reset();
  //   console.log(data);
  //   const file = data.file[0]; // File ko select kar rahe hain

  //   // Image upload
  //   uploadImage(file, data.email) // Title ko file name ke taur par istemal kar rahe hain
  //     .then((url) => {
  //       // Firestore mein data bhejna
  //       sendData(
  //         {
  //           title: data.title,
  //           description: data.description,
  //           blogPic: url, // Image URL jo upload karne par mila
  //           uid: auth.currentUser.uid,
  //         },
  //         'BlogData'
  //       )
  //         .then((res) => {
  //           setBlogs([...blogs, {
  //             title: data.title,
  //             description: data.description,
  //             blogPic: url,
  //             uid: auth.currentUser.uid,
  //           }]);
  //           console.log(data);
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };



  // const onSubmit = (data) => {
  //   reset();
  //   console.log(data);
  //   const file = data.file[0]; // File ko select kar rahe hain

  //   // Image upload
  //   uploadImage(file, auth.currentUser.email) // Email ko reference ke liye istemal kar rahe hain
  //     .then((url) => {
  //       // Firestore mein data bhejna
  //       sendData(
  //         {
  //           title: data.title,
  //           description: data.description,
  //           blogPic: url, // Image URL jo upload karne par mila
  //           uid: auth.currentUser.uid
  //         },
  //         'BlogData'
  //       )
  //         .then((res) => {
  //           setBlogs([...blogs, {
  //             title: data.title,
  //             description: data.description,
  //             blogPic: url,
  //             uid: auth.currentUser.uid
  //           }]);
  //           console.log(data);
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };



//   const onSubmit = async (data) => {
//     reset();
//     const file = data.file[0]; // Ensure data.file is defined
  
//     if (!file) {
//       console.error("No file selected."); // Ye line jab file nahi hoti tab chalayegi
//       return; // Exit if no file
//     }
  
//     try {
//       const url = await uploadImage(file, auth.currentUser.email);
  
//       await sendData({
//         title: data.title,
//         description: data.description,
//         blogPic: url,
//         uid: auth.currentUser.uid
//       }, 'BlogData');
  
//       setBlogs([...blogs, {
//         title: data.title,
//         description: data.description,
//         blogPic: url,
//         uid: auth.currentUser.uid
//       }]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  


  


//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>Add New Blog</h1>
//           </div>
//           <div className="max-w-md mx-auto mt-10">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="bg-white p-6 rounded-lg shadow-md"
//             >
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Blog Title"
//                   {...register('title', { required: 'Title is required' })}
//                   className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <textarea
//                   placeholder="Blog Description"
//                   {...register('description', { required: 'Description is required' })}
//                   className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   {...register('file', { required: 'File is required' })}
//                   className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
//                 />
//                 {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//               >
//                 Add Blog
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>My Blogs</h1>
//           </div>
//           <div>
//             {blogs.length > 0 ? blogs.map((item, index) => (
//               <div key={index} className="border p-4 my-2 rounded-md">
//                 <h2 className="font-bold">{item.title}</h2>
//                 <p>{item.description}</p>
//                 <img src={item.blogPic} alt={item.title} />
//               </div>
//             )) : <h1>No Blogs Found!</h1>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;





















// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { getData, sendData, uploadImage, auth } from '../Config/Firebase/firebasemethods';
// import { onAuthStateChanged } from 'firebase/auth';

// const Dashboard = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     onAuthStateChanged(auth, async(user) => {
//       if (user) {
//         console.log(user.uid)
//         const allBlogs = await getData("BlogData", user.uid)
//         console.log(allBlogs)
//         setBlogs(allBlogs)
//       }
//     })
//   }, [])

//   const onSubmit = (data) => {
//     reset();
//     console.log(data);
//     const file = data.file[0]; // File ko select kar rahe hain

//     // Image upload
//     uploadImage(file, data.title) // Title ko file name ke taur par istemal kar rahe hain
//       .then((url) => {
//         // Firestore mein data bhejna
//         sendData(
//           {
//             title: data.title,
//             description: data.description,
//             blogPic: url, // Image URL jo upload karne par mila
//             uid: auth.currentUser.uid
//           },
//           'BlogData'
//         )
//           .then((res) => {
//             setBlogs([...blogs, {
//               title: data.title,
//               description: data.description,
//               blogPic: url,
//               uid: auth.currentUser.uid
//             }]);
//             console.log(data);
//             console.log(res);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>Add New Blog</h1>
//           </div>
//           <div className="max-w-md mx-auto mt-10">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="bg-white p-6 rounded-lg shadow-md"
//             >
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Blog Title"
//                   {...register('title', { required: 'Title is required' })}
//                   className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <textarea
//                   placeholder="Blog Description"
//                   {...register('description', { required: 'Description is required' })}
//                   className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="file"
//                   {...register('file', { required: 'File is required' })}
//                   className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
//                 />
//                 {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//               >
//                 Add Blog
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>My Blogs</h1>
//           </div>
//           <div>
//             {blogs.length > 0 ? blogs.map((item, index) => {
//               <div key={index}>
//                 {item.title}
//                 {item.description}
//               </div>
//             }) : <h1>No Blogs Found!</h1>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;











// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { sendData, uploadImage } from '../Config/Firebase/firebasemethods';

// const Dashboard = () => {

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }, reset
//   } = useForm();

//   const [blogs, setBlogs] = useState([])

//   // useEffect(auth , (user) => {
//   //   if(user){
//   //     console.log(user.uid)
//   //   }
//   // })


//   const onSubmit = (data) => {
//     reset()
//     console.log(data);
//     const file = data.file[0]
//     uploadImage(file, data.email)
//       .then((url) => {
//         sendData({
//           title: data.title,
//           description: data.description,
//           blogPic: url
//         }, "BlogData")
//           .then((res) => {
//             setBlogs([...blogs, {
//               title: data.title,
//               description: data.description,
//               blogPic: url
//             }])
//             console.log(data)
//             console.log(res)
//           })
//           .catch((err) => {
//             console.log(err)
//           })
//       })
//       .catch((error) => {
//         console.log(error)
//       })

//   };

//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>Add New Blog</h1>
//           </div>
//           <div className="max-w-md mx-auto mt-10">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="bg-white p-6 rounded-lg shadow-md"
//             >
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Blog Title"
//                   {...register('title', { required: 'Title is required' })}
//                   className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <textarea
//                   placeholder="Blog Description"
//                   {...register('description', { required: 'Description is required' })}
//                   className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//                 />
//                 {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="file"
//                   {...register('file', { required: 'File is required' })}
//                   className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
//                 />
//                 {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//               >
//                 Add Blog
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div>
//             <h1 className='text-center font-bold text-3xl'>My Blogs</h1>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Dashboard






















// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Dashboard = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-6 rounded-lg shadow-md"
//       >
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Blog Title"
//             {...register('title', { required: 'Title is required' })}
//             className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//           />
//           {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//         </div>

//         <div className="mb-4">
//           <textarea
//             placeholder="Blog Description"
//             {...register('description', { required: 'Description is required' })}
//             className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//           />
//           {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//         </div>

//         <div className="mb-4">
//           <input
//             type="file"
//             {...register('file', { required: 'File is required' })}
//             className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
//           />
//           {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Add Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;



























// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { uploadImage, sendData, getAllData } from '../Config/Firebase/firebasemethods'; // adjust the path accordingly
// import { auth } from '../Config/Firebase/firebasemethods';

// const Dashboard = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
  
//   const [blogs, setBlogs] = useState([]);

//   const onSubmit = async (data) => {
//     const user = auth.currentUser;
//     if (user) {
//       // Upload the image and get the URL
//       const imageUrl = await uploadImage(data.file[0], user.email);

//       // Prepare the blog data
//       const blogData = {
//         title: data.title,
//         description: data.description,
//         imageUrl: imageUrl,
//         uid: user.uid, // Store user id for retrieval
//       };

//       // Send the blog data to Firestore
//       await sendData(blogData, 'blogs');
      
//       // Reset form or do something after submission
//     }
//   };

//   const fetchBlogs = async () => {
//     const user = auth.currentUser;
//     if (user) {
//       const userBlogs = await getAllData('blogs');
//       setBlogs(userBlogs.filter(blog => blog.uid === user.uid)); // Filter blogs for the logged-in user
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-6 rounded-lg shadow-md"
//       >
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Blog Title"
//             {...register('title', { required: 'Title is required' })}
//             className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//           />
//           {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//         </div>

//         <div className="mb-4">
//           <textarea
//             placeholder="Blog Description"
//             {...register('description', { required: 'Description is required' })}
//             className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
//           />
//           {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//         </div>

//         <div className="mb-4">
//           <input
//             type="file"
//             {...register('file', { required: 'File is required' })}
//             className={`w-full ${errors.file ? 'border-red-500' : 'border-gray-300'} p-2 border rounded-md focus:outline-none`}
//           />
//           {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Add Blog
//         </button>
//       </form>

//       <div className="mt-10">
//         {blogs.map((blog) => (
//           <div key={blog.documentId} className="mb-6 p-4 border rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">{blog.title}</h2>
//             <p>{blog.description}</p>
//             {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className="mt-2" />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendData, getData, uploadImage } from '../Config/Firebase/firebasemethods';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth } from 'firebase/auth';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const userEmail = auth.currentUser.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { title, description, file } = data;
    let imageUrl = '';

    if (file[0]) {
      imageUrl = await uploadImage(file[0], userEmail);
    }

    const blogData = {
      title,
      description,
      imageUrl,
      uid: auth.currentUser.uid, // Add user ID
    };

    await sendData(blogData, 'blogs'); // Sending data to Firestore
    fetchBlogs(); // Refresh the blog list after adding a new blog
  };

  const fetchBlogs = async () => {
    setLoading(true);
    const fetchedBlogs = await getData('blogs', auth.currentUser.uid); // Fetch blogs for the current user
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when component mounts
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Blog Title"
            {...register('title', { required: 'Title is required' })}
            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-500`}
          />
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
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Blog
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">Your Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        blogs.map((blog, index) => (
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

export default Dashboard;
