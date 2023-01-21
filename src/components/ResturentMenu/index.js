import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {LOAD_MENU,IMG_CDN_URL} from '../../config'
import MenuHeader from './menuHeader/index';
import ShimmerUi from '../ShimmerUi';

const RestaurentMenu=()=>{
const {id}=useParams();
const [menuData,setMenuData]=useState();
const [loading,setLoading]=useState(false);

useEffect(()=>{
fetchMenuDEtails();
},[]);


const fetchMenuDEtails=async()=>{
setLoading(true);
try{

let response=await fetch(LOAD_MENU+id);
let {data}=await response.json();
setMenuData(data);

}

catch(err){
console.error(err);
}
setLoading(false);
}

console.log(menuData);
return (
    <div>
        {
            loading===true?
            <ShimmerUi/>
            :
            <MenuHeader {...{
            name:menuData?.name,
            cousins:menuData?.cuisines,
            address:menuData?.area,
            averageRating:menuData?.avgRating,
            costforTwo:(menuData?.costForTwo/100),
            imageId:menuData?.cloudinaryImageId,
            delivaryTime:menuData?.sla?.minDeliveryTime
        }}/>
        }
        
        {/* <img alt={`${menuData?.slug} menu image`} src={IMG_CDN_URL+menuData?.cloudinaryImageId}></img> */}
    </div>
)

}

export default RestaurentMenu;