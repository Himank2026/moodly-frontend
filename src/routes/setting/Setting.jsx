import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setting.css'; // The CSS file
import useAuthStore from '../../utils/authStore'; // Import your store
import apiRequest from '../../utils/apiRequest'; // <-- 1. Import your 'apiRequest'

function Setting() {
  // 2. Get data and actions from your authStore
  const currentUser = useAuthStore((state) => state.currentUser);
  const updateCurrentUser = useAuthStore((state) => state.updateCurrentUser);

  const navigate = useNavigate();

  // 3. Set initial state from the store's user
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [userName, setUserName] = useState(currentUser.userName);
  const [file, setFile] = useState(null);
  
  const defaultImage = currentUser.img || 'https://i.imgur.com/6B6PS9K.png';
  const [preview, setPreview] = useState(defaultImage);

  // When user selects a new file, update the preview
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Show local preview
    }
  };

  // 4. Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('displayName', displayName);
    formData.append('userName', userName);
    if (file) {
      formData.append('profileImage', file);
    }

    try {
      // 5. Use 'apiRequest' (not 'axios') for the call
      const { data: updatedUser } = await apiRequest.patch(
        '/users/me', // Path is correct, 'apiRequest' adds the base URL
        formData, 
        { 
          headers: { 
            'Content-Type': 'multipart/form-data'
          } 
        }
      );

      // 6. On success, update the Zustand store
      updateCurrentUser(updatedUser);

      // 7. Go back to the homepage
      navigate('/'); 

    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message); // Show error (e.g., "Username already taken!")
      }
    }
  };

  // Render the form
  return (
    <div className="setting-page-container">
      <div className="setting-form-card">
        <form onSubmit={handleSubmit}>
          
          <h2>Edit Profile</h2>

          <div className="profile-pic-section">
            <img 
              src={preview}
              alt="Profile Preview" 
              className="profile-pic-preview"
            />
            <label htmlFor="file-upload" className="custom-file-upload">
              Change Picture
            </label>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="displayName">Display Name</label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Setting;