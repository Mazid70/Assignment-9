import { useState, useEffect } from 'react';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  useEffect(() => {
    fetch("./blogs.json")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
    
  }, []);
  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-12 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Blog </h1>
      {/* Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map(blog => (
          <div key={blog.id} className="blog-card overflow-hidden rounded-lg shadow-md bg-white transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content.slice(0, 150)}...</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img src={blog.authorImage} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-gray-600">By {blog.author}</span>
                </div>
                <span className="text-gray-600">{blog.date}</span>
              </div>
              <div className="flex flex-wrap mt-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
