import React, { useState } from 'react'
import { addDoc, collection, getFirestore,  } from 'firebase/firestore';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] =useState("");
  const db = getFirestore();
  const postsCollectionRef = collection(db, 'posts');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      content,
      createdAt: new Date(),
    }
    try {
      await addDoc(postsCollectionRef, newPost);
      alert("投稿完了しました！");
      setTitle(""),setContent("");
    } catch (error) {
      console.error(error);
    };
  }

  return (
    < >
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) => {setTitle(e.target.value)}} 
          type="text"
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