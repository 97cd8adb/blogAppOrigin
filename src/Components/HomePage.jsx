import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './HomePage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const auth = getAuth();
  const db = getFirestore();
  const deletePost = async (postId) => {
    const docRef = doc(db, "posts", postId);
    try{
      await deleteDoc(docRef)
     }
     catch (error) {
      console.error(error);
    };
  };
  useEffect(() => {
    const postsCollectionRef = collection(db, 'posts');
    const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id : doc.id,
        ...doc.data()
      }));
      setPosts(postsData)
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="posts-container">
    {posts.map(post => (
      <div key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {post.uid === auth.currentUser?.uid &&(
          <button onClick={() => deletePost(post.id)}>削除</button>
        )}
      </div>
    ))}
    </div>
  )
}

export default HomePage