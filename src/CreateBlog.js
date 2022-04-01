import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('dave');
  const [pending, setPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setPending(false);
      history.push('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="winston">winston</option>
          <option value="tegan">tegan</option>
          <option value="dave">dave</option>
        </select>
        { !pending && <button>Add Blog</button> }
        { pending && <button>Adding Blog...</button> }
      </form>
    </div>
  );
}

export default CreateBlog;