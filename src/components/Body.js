import React, { useEffect, useState } from 'react';
import {restaurentList,INITIAL_LOAD_URL,scrollUrl} from  '../config.js';
import  RestrauntCard from './ResturentCard';
import ShimmerUi from './ShimmerUi.js';
import { Link } from 'react-router-dom';

const filterData=(searchText,list)=> list.filter((el)=>el.data.name?.toLowerCase().startsWith(searchText.toLowerCase()))



const Body=()=>{


    const [searchText,setSearchText]=useState("");
    const [filtredData,setResturentData]=useState(restaurentList);
    const [loading,setLoading]=useState(false);
    const [error,setErrorMessage]=useState("");
    useEffect(()=>{
        //api call
        let offsetCnt=0;
        let apiOffset=0;
        getRestaurents(INITIAL_LOAD_URL);

    },[]);
   
 const getRestaurents=async(url)=>{
  try{
    setLoading(true);
    const {data}= await(await fetch(url)).json();
    setResturentData(data?.cards[2]?.data?.data?.cards)
    
  }catch(err){
    
    setErrorMessage(err.message);
  }finally{
    setLoading(false);
  }
   
    
 }
 const getRestaurentsOnScroll=async(url)=>{
    try{
        setLoading(true);
        const {data}= await(await fetch(url)).json();
        setResturentData(data?.cards)
        
      }catch(err){
        
        setErrorMessage(err.message);
      }finally{
        setLoading(false);
      }
 }

   
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
   loading?
   new Array(18).fill(0).map((e,i)=><ShimmerUi key={i}/>)
   :
   (error.length===0)
   ?(filtredData?.map((e,index)=>e.data.name?
   <Link to={'/restaurant/'+`${e.data?.id}`}><RestrauntCard {...e.data} key={e.data?.cloudinaryImageId}/></Link>
  :""))
   :

   <h1 className='error'>{`${error} ;(`}</h1>
     

    }
    </div>
   </>
   
  }
  export default Body;