
// import './PostGrid.css';

const posts = [
  { id: 1, imageUrl: 'https://source.unsplash.com/random/200x200?nature', caption: 'It’s golden, Ponyboy!' },
  { id: 2, imageUrl: 'https://source.unsplash.com/random/200x200?forest', caption: 'Into the wild' },
  { id: 3, imageUrl: 'https://source.unsplash.com/random/200x200?trees', caption: 'Breathe in nature' },
  { id: 4, imageUrl: 'https://source.unsplash.com/random/200x200?autumn', caption: 'Falling leaves' },
];

function PostGrid() {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.imageUrl} alt="Post" />
          <div className="caption">
            <p>{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostGrid;
