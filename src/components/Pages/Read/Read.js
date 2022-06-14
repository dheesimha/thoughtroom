import axios from "axios";
import React, { useEffect, useState } from "react";

function Read() {
  let [displayBlogs, setDisplayBlogs] = useState([]);

  let updatebtn = (e) => {
    let updateBlog = displayBlogs.find((blog) => blog.id === e.target.id);

    let text = prompt("Enter the updated content");

    let obj = { ...updateBlog, content: text };

    axios
      .put(`http://localhost:3001/blogs/${e.target.id}`, obj)
      .then((res) =>
        setDisplayBlogs(
          displayBlogs.map((blog) =>
            blog.id !== e.target.id ? blog : res.data
          )
        )
      );
  };

  let deletebtn = (e) => {
    let tempBlog = [];
    axios
      .delete(`http://localhost:3001/blogs/${e.target.id}`)
      .then(
        (tempBlog = displayBlogs.filter((blog) => blog.id !== e.target.id)),
        setDisplayBlogs(tempBlog),
        console.log(tempBlog)
      )

      .then(console.log("Deleted " + e.target.id));
  };

  let renderBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setDisplayBlogs(res.data);
    });

    console.log("Running useEffect Read");
  };

  useEffect(renderBlogs, []);

  return (
    <div className="blogs">
      {displayBlogs.map((blog) => {
        return (
          <p key={blog.id}>
            {blog.content}
            <button id={blog.id} onClick={updatebtn}>
              Update
            </button>
            <button id={blog.id} onClick={deletebtn}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Read;
