import BlogDetails from './BlogDetails';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading...</div>}
      {blogs && <BlogDetails blogs={blogs} title="All Blogs!"/>}
    </div>
  );
}

export default Home;