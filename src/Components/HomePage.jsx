import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore();
  const postsCollectionRef = collection(db, 'posts');
  const auth = getAuth();
  const deletePost = async (postId) => {
    const docRef = doc(db, "posts", postId);
    await deleteDoc(docRef)
  };
  useEffect(() => {
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
    <>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {post.uid === auth.currentUser ?.uid &&(
          <button onClick={() => deletePost(post.id)}>削除</button>
        )}
      </div>
    ))}
    </>
  )
}

export default HomePage