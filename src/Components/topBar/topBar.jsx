import React from 'react'
import './topBar.css'
import UserButton from '../userButton/userButton'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';

const TopBar = () => {
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  };

  return (
    
      <div className='topBar'>
        <form onSubmit={handleSubmit} className='search'>
          <SearchIcon />
          <input spellCheck={false} type="text" placeholder='Search'/>
        </form>
        <div>
          <UserButton/>
        </div>
      </div>

  
  )
}

export default TopBar
