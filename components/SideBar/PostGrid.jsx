PostGrid.js
import PropTypes from 'prop-types'
import './PostGrid.css';

function PostGrid({ posts }) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt="Post" />
          <p>{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

PostGrid.propTypes = {
  posts: PropTypes.bool
}

export default PostGrid;
