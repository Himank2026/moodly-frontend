import React, { useState } from 'react'
import './gallery.css'
import GalleryItem from '../galleryItem/galleryItem'
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";



const fetchPins=async()=>{
   const res=await axios.get(`http://localhost:3001/pins`);
 
   return res.data;
}

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
  const fetchPins = async ({ pageParam,search }) => {
    const res = await axios.get(
      `http://localhost:3001/pins?cursor=${pageParam}&search=${
      search || ""}`
    );
    return res.data;
  };
  
  
    const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
      // queryKey: ["pins"],
      // FIXED QUERY KEY
      queryKey: ["pins",search],
      queryFn: ({ pageParam = 0 }) =>
        fetchPins({ pageParam,search }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    });
  
    // FIXED: ADD SKELETON LOADING
    // if (status === "pending") return "Loading...";
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
