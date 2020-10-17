import React, { useState } from 'react';
import './Post.css';
import { ExpandLess, ExpandMore } from '@material-ui/icons/';
import ReactMarkdown from 'react-markdown';

type PostProps = {
  title: string,
  selftext: string,
  isSelf: boolean,
  isMedia: boolean,
  isVideo: boolean,
  crossPost: any,
  url: string,
  thumbnail: string
}

const Post: React.FC<PostProps> = ({ title, selftext, isSelf, isMedia, isVideo, crossPost, url, thumbnail }) => {
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
    <div className="post" style={{paddingBottom: isExpanded ? "1vw" : "0px"}}>
      <div className="postHeader" onClick={handleToggleExpand}>
        <h2>{title}</h2>
        <div className="expand">{ isExpanded ? <ExpandLess /> : <ExpandMore /> }</div>
      </div>
      <div className="expandible" style={{display: isExpanded ? "flex" : "none"}}>
        { content() }
      </div> 
    </div>
  );
}

export default Post;
