import React from 'react'
import './leftBar.css'
import { Link } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddBoxIcon from '@mui/icons-material/AddBox';

import SettingsIcon from '@mui/icons-material/Settings';


const leftBar = () => {
  return (
    
      <div className='leftBar'>
        <div className='menuIconsTop'>
          
            <Link to='/'  className='menuIcon'>
            <img   src='/general/webLogo.jpeg ' alt='' className='logoImage'/>
            </Link>
           
          
           
            <Link to='/' className='menuIcon' >
            <HomeIcon style={{color:"black",height:'35px', width:'35px'}} />
            </Link>
           


           
            <Link to='/'  className='menuIcon'>
            <ExploreIcon style={{color:"black",height:'35px', width:'35px'}}/>
            </Link>
           


           
           <Link  to='/create'  className='menuIcon'>
            <AddBoxIcon style={{color:"black",height:'35px', width:'35px'}}/>
            </Link>
           


          
            

           
            
           
           
        </div>
        <div className='menuIconsBottom'>
        <Link to='/setting' className='menuIcon'>
        <SettingsIcon style={{ color: "black", height: "35px", width: "35px" }} />
       </Link>
       </div>

        
      </div>
    
  )
}

export default leftBar
