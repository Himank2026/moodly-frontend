import React from 'react'
import './postPage.css'
import PostComponent from '../../Components/postComponent/postComponent'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
// import axios from 'axios' // --- 1. REMOVED
import apiRequest from '../../utils/apiRequest' // --- 2. ADDED (Adjust path if needed)


const PostPage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    
    // --- 3. CORRECTED API CALL ---
    queryFn: () => 
      apiRequest.get(`/pins/${id}`).then((res) => res.data),
    
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Pin not found!";

 

  return (
    <div>
      <PostComponent data={data}/>
    </div>
  )
}

export default PostPage