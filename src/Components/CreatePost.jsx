import React, { useState } from 'react'
import { addDoc, collection, getFirestore, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./CreatePost.css"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] =useState("");
  const db = getFirestore();
  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    const newPost = {
      title,
      content,
      createdAt: new Date(),
      uid: auth.currentUser.uid
    }
    try {
      await addDoc(postsCollectionRef, newPost);
      alert("投稿完了しました！");
      setTitle(""),setContent("");
    } catch (error) {
      console.error(error);
    };
    navigate("/")
  }

  return (
    < >
    <form onSubmit={handleSubmit}>
      <div>
        <h1>投稿してみよう！</h1>
      </div>
      <div>
        <input
          onChange={(e) => {setTitle(e.target.value)}} 
          type="text"
          placeholder='タイトルを入力'
          value={title}/>
      </div>
      <div>
        <textarea
          onChange={(e) => {setContent(e.target.value)}} 
          placeholder="本文を入力"
          value={content}/>
      </div>
      <div>
        <button type="submit">投稿</button>
      </div>
    </form>
    </>
  )
}

export default CreatePost