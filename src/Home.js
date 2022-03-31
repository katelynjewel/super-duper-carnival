import { useState, useEffect } from 'react'; 
import BlogDetails from './BlogDetails';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Friend or Best Friend?', body: 'lorem ipsum...', author: 'winston', id: 1 },
    { title: 'Toy party!', body: 'lorem ipsum...', author: 'teegan', id: 2 },
    { title: 'Beggine for more food tips', body: 'lorem ipsum...', author: 'dave', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran')
  });

  return ( 
    <div className="home">
      <BlogDetails blogs={blogs} handleDelete={handleDelete} title="All Blogs!"/>
    </div>
  );
}

export default Home;