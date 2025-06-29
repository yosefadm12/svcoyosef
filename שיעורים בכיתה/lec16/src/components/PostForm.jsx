import React, { useState } from "react";


export default function PostForm({ onAddPost, disabled }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAddPost({
        text,
        likes: 0,
        comments: 0
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="כתוב פוסט חדש..."
        disabled={disabled}
        className="post-input"
      />
      <button
        type="submit"
        disabled={disabled || text.trim() === ""}
        className="post-submit"
      >
        הוסף פוסט
      </button>
    </form>
  );
}
