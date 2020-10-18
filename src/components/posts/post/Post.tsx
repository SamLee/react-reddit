import React, { useState } from 'react';
import './Post.css';
import { ExpandLess, ExpandMore } from '@material-ui/icons/';
import ReactMarkdown from 'react-markdown';
import Info from './info';

type PostProps = {
  title: string,
  selftext: string,
  isSelf: boolean,
  isMedia: boolean,
  isVideo: boolean,
  crossPost: any,
  url: string,
  thumbnail: string,
  user: string,
  flairs: Array<{a?: string, e: string, u?: string, t?: string}>,
  comments: number,
  upvotes: number,
}

const Post: React.FC<PostProps> = ({ title, selftext, isSelf, isMedia, isVideo, crossPost, url, thumbnail, user, flairs, comments, upvotes }) => {
  const [isExpanded, toggleExpand] = useState(false);
  const handleToggleExpand = () => toggleExpand(!isExpanded);
  const content = () => {
    if (isSelf) return <ReactMarkdown source={selftext} className="markdown" />
    if (isMedia) {
     if (isVideo) return <video controls preload="metadata" poster={thumbnail}><source src={`${url}`} type="video/mp4" /></video>
     else return <img src={url} alt={title} loading="lazy"/>
    }
    if (crossPost) return <ReactMarkdown source={crossPost[0].selftext} />
    return <a href={url}>{url}</a> 
  };

  return (
    <div className="post">
      <div className="postHeader" onClick={handleToggleExpand}>
        <h2>{title}</h2>
        <div className="expand">{ isExpanded ? <ExpandLess /> : <ExpandMore /> }</div>
      </div>
      <div className="expandible" style={{display: isExpanded ? "flex" : "none"}}>
        { content() }
      </div>
      <Info user={user} flairs={flairs} comments={comments} upvotes={upvotes} /> 
    </div>
  );
}

export default Post;
