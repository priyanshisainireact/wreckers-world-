import React from "react";
import { firestore } from "../../../../../firebase/firebase.utils";

const BlogArticle = () => {
  const [blogList, setBlogList] = React.useState([]);
  const [error, setError] = React.useState("");
  const fetchBlog = () => {
    firestore
      .collection("blogs")
      .get()
      .then((response) => {
        const fetchedBlog = [];
        response.docs.forEach((document) => {
          const fetched = {
            ...document.data(),
          };
          fetchedBlog.push(fetched);
        });
        setBlogList(fetchedBlog);
        console.log(blogList);
      })
      .catch((error) => {
        setError(error);
      });
  };
  React.useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <div className="row">
        <h2 class="news-heading">Latest Blog</h2>
      </div>
      {blogList.map((blog) => {
        return (
          <>
            <h5>{blog.title}</h5>
            <img
              src={blog.imageUrl}
              style={{ height: "300px", width: "100%" }}
            />
            <p className="p-1">{blog.description}</p>
          </>
        );
      })}
    </>
  );
};
export default BlogArticle;
