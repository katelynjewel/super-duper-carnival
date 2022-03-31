import { useState } from 'react'; 

const Home = () => {
  const [name, setName] = useState('winnie');
  const [age, setAge] = useState(15);

  const handleClick = () => {
    setName('winston');
    setAge(25);
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;