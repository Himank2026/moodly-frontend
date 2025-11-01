import React from 'react'
import './mainLayout.css'
import LeftBar from '../../Components/leftBar/leftBar';
import TopBar from '../../Components/topBar/topBar';

import { Outlet } from 'react-router';

const mainLayout = () => {
  return (
    <div className='mainLayout'>
      
       <LeftBar/>
       <div className="rightHome">
        <TopBar/>
        <Outlet/>
       </div>
   
    </div>
  );
}

export default mainLayout
