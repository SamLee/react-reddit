import React from 'react';
import './Posts.css';

import Post from './post';

const Posts: React.FC<any> = ({ posts }) => {
  return (
    <div className="posts">
      {
        posts?.map((post: any) => {
          return <Post
            key={post.data.id} 
            title={post.data.title} 
            selftext={post.data.is_self ? post.data.selftext : post.data.url} 
            isSelf={post.data.is_self} 
            isMedia={post.data.is_reddit_media_domain}
            isVideo={post.data.is_video}
            crossPost={post.data.crosspost_parent_list}
            url={post.data.is_video ? post.data.media.reddit_video.fallback_url : post.data.url}
            thumbnail={post.data.thumbnail}
          />
        })  
      }
    </div>
  );
}

export default Posts;


