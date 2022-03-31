import { useState, useEffect } from 'react'; 
import BlogDetails from './BlogDetails';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
  }, []);

  return ( 
    <div className="home">
      {/* <BlogDetails blogs={blogs} handleDelete={handleDelete} title="All Blogs!"/> */}
    </div>
  );
}

export default Home;