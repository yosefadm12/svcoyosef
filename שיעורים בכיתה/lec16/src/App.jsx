import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import './App.css';

export default function App() {
  const [posts, setPosts] = useState(
    [...Array(1).keys()].map((i) => ({
      text: `פוסט ${i + 1}`,
      likes: 0,
      comments: 0
    }))
  );

  const handleAddPost = (newPost) => {
    if (posts.length < 10) {
      setPosts([...posts, newPost]);
    } else {
      alert("הגעת למקסימום של 10 פוסטים 😅");
    }
  };

  return (
    <div className="container">
      <h1>פוסטים</h1>

      <PostForm onAddPost={handleAddPost} disabled={posts.length >= 10} />

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}


