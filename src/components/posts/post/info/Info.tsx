import React from 'react';
import './Info.css';

type InfoProps = {
  user: string,
  flairs: Array<{a?: string, e: string, u?: string, t?: string}>,
  comments: number,
  upvotes: number,
}

const Info: React.FC<InfoProps> = ({ user, flairs, comments, upvotes }) => {
  const processFlairs = () => {
    if (flairs.length === 0) { return; }
    return flairs.filter(flair => flair.hasOwnProperty('u')).map(flair => <img src={flair.u} alt={flair.u}/>);
  }
  
  return (
    <div className="info">
      <span>Posted by: {user} {processFlairs()}</span>
      <span>🠕{upvotes}</span>
      <span>💬{comments}</span>
    </div>
  );
}

export default Info;
