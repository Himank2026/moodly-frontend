import React, { useState } from 'react'
import './gallery.css'
import GalleryItem from '../galleryItem/galleryItem'
import { useInfiniteQuery } from '@tanstack/react-query';
// REMOVED UNUSED 'axios' IMPORT
import InfiniteScroll from "react-infinite-scroll-component";
import apiRequest from '../../utils/apiRequest'; // Assuming this path is correct

// --- REMOVED: UNUSED fetchPins FUNCTION ---

function single(temp){
  return(
    <GalleryItem 
      key={temp._id}
      id={temp._id}
      image={temp.media}
      height={temp.height}
      width={temp.width}
    />
  );
}

const Gallery = ({search}) => {
  
  // --- CORRECTED: REMOVED HARDCODED URL AND USED apiRequest ---
  const fetchPins = async ({ pageParam, search }) => {
    // This is the function being used by useInfiniteQuery
    const res = await apiRequest.get(
      // The base URL is now correctly set in apiRequest.js
      `/pins?cursor=${pageParam}&search=${
      search || ""}`
    );
    return res.data;
  };
  // -------------------------------------------------------------
  
  
    const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
      // FIXED QUERY KEY
      queryKey: ["pins",search],
      // The fetchPins function correctly receives pageParam and search
      queryFn: ({ pageParam = 0 }) =>
        fetchPins({ pageParam,search }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    });
  
    // FIXED: ADD SKELETON LOADING
    if (status === "pending") return "Loading....";
    if (status === "error") return "Something went wrong...";
  
    const allPins = data?.pages.flatMap((page) => page.pins) || [];  


  return (
    <InfiniteScroll
    dataLength={allPins.length}
    next={fetchNextPage}
    hasMore={!!hasNextPage}
    loader={<h4>Loading more pins</h4>}
    endMessage={<h3>All Posts Loaded!</h3>} >
    <div>
      <div className="gallery">
      {allPins && allPins.map(single)}
      </div>
    </div>
    </InfiniteScroll>
  )
}


export default Gallery