import React from 'react'
import './galleryItem.css'
import{Link} from 'react-router'
import IosShareIcon from '@mui/icons-material/IosShare';
import Image from '../image/image.jsx'

const GalleryItem = (props) => {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(props.height/100)}`}}>
      <Image 
        src={props.image} 
        alt=''
        w={props.width} 
        h={props.height}
      />
      <Link to={`/pins/${props.id}`} className='overlay'></Link>
      <button className="saveButton" >Save</button> 
      <div className='overlayIcons'>
      <button  ><IosShareIcon style={{fontSize:"20px"}}/></button> 
      
      </div>
    </div>
  )
}

export default GalleryItem
