import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import { auth, db } from "../firebase-config";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="App">
      <Form>
        <h1>Create A Post</h1>
        <div className="input">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
        </div>
        <Button onClick={createPost} name="Share" />
      </Form>
    </div>
  );
}

export default CreatePost;
