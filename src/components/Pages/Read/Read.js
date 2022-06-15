import React, { useEffect, useState } from "react";
import blogcrud from "../../../services/blogs";

function Read() {
  let [displayBlogs, setDisplayBlogs] = useState([]);

  let updatebtn = (e) => {
    let updateBlog = displayBlogs.find(
      (blog) => JSON.stringify(blog.id) === e.target.id
    );

    console.log(typeof e.target.id);
    let text = prompt("Enter the updated content");

    let obj = { ...updateBlog, content: text };

    console.log(updateBlog);

    blogcrud
      .updateBlogs(e.target.id, obj)
      .then((res) =>
        setDisplayBlogs(
          displayBlogs.map((blog) =>
            JSON.stringify(blog.id) !== e.target.id ? blog : res.data
          )
        )
      );
  };

  let deletebtn = (e) => {
    // axios
    //   .delete(`http://localhost:3001/blogs/${e.target.id}`)
    blogcrud
      .deleteBlogs(e.target.id)
      .then(
        setDisplayBlogs(
          displayBlogs.filter((blog) => JSON.stringify(blog.id) !== e.target.id)
        )
      )

      .then(console.log("Deleted " + e.target.id));
  };

  let renderBlogs = () => {
    // axios.get("http://localhost:3001/blogs")

    blogcrud.getAllBlogs().then((res) => {
      return setDisplayBlogs(res.data);
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
