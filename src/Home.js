import { useState } from 'react'; 

const Home = () => {
  const [blogs, setblogs] = useState([
    { title: 'Friend or Best Friend?', body: 'lorem ipsum...', author: 'Winston', id: 1 },
    { title: 'Toy party!', body: 'lorem ipsum...', author: 'Teegan', id: 2 },
    { title: 'Beggine for more food tips', body: 'lorem ipsum...', author: 'Dave', id: 3 }
  ]);

  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p> Written by: { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default Home;