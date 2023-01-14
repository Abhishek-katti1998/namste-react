import React, { useState } from 'react';
import {restaurentList} from  '../config.js';
import  RestrauntCard from './ResturentCard';

const filterData=(searchText,list)=> list.filter((el)=>el.data.name?.toLowerCase().startsWith(searchText.toLowerCase()))



const Body=()=>{


    const [searchText,setSearchText]=useState("");
    const [filtredData,setResturentData]=useState(restaurentList);
   
 
   console.log("rendered");
    return <>
    <div className='search-container'>
    <input placeholder='Search' type="text" className='search-input' value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);
        setResturentData(filterData(e.target.value,restaurentList));
        }}/>
   <button>Search</button>
    </div>
   <div className="resto-list">
    {
   
   filtredData?.map((e,index)=>e.data.name?<RestrauntCard {...e.data} key={e.data?.cloudinaryImageId}/>:"")
     

    }
    </div>
   </>
   
  }
  export default Body;