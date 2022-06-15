import React, { useState } from "react";
import blogcrud from "../../../services/blogs";

function Write() {
  let [textarea, setTextArea] = useState("");
  let [blogList, setBlogList] = useState([]);
  let updateText = (e) => {
    setTextArea(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    let newBlog = {
      content: e.target[0].value,
      date: new Date(),
      important: Math.random() > 0.5 ? true : false,
    };
    blogcrud
      .createBlogs(newBlog)
      .then((res) => {
        setBlogList(blogList.concat(res.data));
      })
      .then(setTextArea(""));
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
    </div>
  );
}

export default Write;
