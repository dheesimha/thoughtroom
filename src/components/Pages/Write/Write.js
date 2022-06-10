import React, { useState } from "react";

function Write() {
  let [textarea, setTextArea] = useState("");
  let [blogs, setBlogs] = useState([]);

  let updateText = (e) => {
    setTextArea(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    setBlogs(blogs.concat(e.target[0].value));
    setTextArea("");
  };
  return (
    <div className="write">
      <form onSubmit={submitHandler}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={updateText}
          value={textarea}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className="blogs">
        {blogs.map((blog, index) => {
          return <p key={index}>{blog}</p>;
        })}

        {console.log(`Rendered ${blogs.length} blogs`)}
      </div>
    </div>
  );
}

export default Write;
