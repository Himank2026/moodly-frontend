import React from 'react'
import './postInteractions.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
        <div className='likeShare'>
          <div className='totalLikes' style={{display:"flex",alignItems:"center",gap:"5px"}}>
          <FavoriteIcon className='like'/>
          <span style={{userSelect:"none"}}>273</span>
          </div>
      
      <IosShareIcon className='share'/>
      </div>
      <button className='button'>Save</button>

    </div>
  )
}

export default PostInteractions
