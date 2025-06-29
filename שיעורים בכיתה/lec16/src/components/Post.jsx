import React , {useState} from "react";

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (likes < 10) {
      setLikes(likes + 1);
    }
  };

  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="post">
      <p className="post-text">{post.text}</p>
      <p className="post-likes">❤️ לייקים: {likes}</p>
      <button onClick={handleLike} disabled={likes >= 10} className="like-button">
        לייק
      </button>

      <div className="comment-form">
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="כתוב תגובה..."
          className="comment-input"
        />
        <button onClick={handleAddComment} className="comment-button">
          שלח תגובה
        </button>
      </div>

      <div className="comment-list">
        {comments.map((c, i) => (
          <p key={i} className="comment-item">💬 {c}</p>
        ))}
      </div>
    </div>
  );
}
