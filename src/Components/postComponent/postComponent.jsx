import React from 'react'
import './postComponent.css'
import PostInteractions from '../postInteractions/postInteractions'
import { Link } from 'react-router'
import Comments from '../comments/comments'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PostComponent = ({data}) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Username inside PostComponent:", data?.user?.userName);
 
  return (
    <div className='postPage'> 
        <div className='postContainer'>
            <ArrowBackIcon/>
        <img src={data.media} alt="" className='resize'/>
        <div className="otherHalf">
            
           <PostInteractions />
           
           <Link to={`/${data.user.userName}`} className='postUser'>
           <img src={data.user.img} alt="Portrait of a person"/>

           <span>{data.user.displayName}</span>
           </Link>
           <div className="commentContainer">
           <Comments id={data._id} />
           </div>
          
        </div>
        </div>
      
    </div>
  )
}

export default PostComponent
