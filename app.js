import React  from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';

//food villa
// const SearchBar=()=>(<section>
//   <input placeholder="Search"></input>
// </section>)
// const Logo=()=><p>Logo</p>
// const Random=()=><p>Random</p>

// const App=()=>{
//   return (
//     <header>
//       <Logo/>
//       <SearchBar/>
//       <Random/>
//     </header>
//   );
// }
const Titile=()=><image alt="Logo" src=""/>

//composing components
const HeaderComponent=()=>{
return (
  <div className="header">
    <Titile/>
    <ul className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>contact</li>
      <li>cart</li>
    </ul>
  </div>
)
   

}

const Footer=()=>{
  return (
    <h1>Footer</h1>
  )
}

const config=[

]
const restoLitst=[

  {
  type: "restaurant",
  data: {
  type: "F",
  id: "30827",
  name: "McDonald's",
  uuid: "9ee9a777-6dc9-48a8-8191-4a292b27385b",
  city: "1",
  area: "Rajarajeshwari Nagar",
  totalRatingsString: "1000+ ratings",
  cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
  cuisines: [
  "Burgers",
  "Beverages",
  "Cafe",
  "Desserts"
  ],
  tags: [ ],
  costForTwo: 40000,
  costForTwoString: "₹400 FOR TWO",
  deliveryTime: 24,
  minDeliveryTime: 24,
  maxDeliveryTime: 24,
  slaString: "24 MINS",
  lastMileTravel: 3,
  slugs: {
  restaurant: "mcdonalds-arch-mall-rajarajeshwari-nagar",
  city: "bangalore"
  },
  cityState: "1",
  address: "Mc Donald's family restaurant,  Gopalan Arch mall Shop no 18/2, Raja Rajeshwari nagar, Nayandahalli , Mysore road, Bengaluru 560039",
  locality: "Gopalan Arcade",
  parentId: 630,
  unserviceable: false,
  veg: false,
  select: false,
  favorite: false,
  tradeCampaignHeaders: [ ],
  aggregatedDiscountInfo: {
  header: "50% off",
  shortDescriptionList: [
  {
  meta: "50% off | Use WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  descriptionList: [
  {
  meta: "50% off up to ₹100 | Use code WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  subHeader: "",
  headerType: 0,
  superFreedel: ""
  },
  aggregatedDiscountInfoV2: {
  header: "50% OFF",
  shortDescriptionList: [
  {
  meta: "Use WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  descriptionList: [
  {
  meta: "50% off up to ₹100 | Use code WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  subHeader: "",
  headerType: 0,
  superFreedel: ""
  },
  chain: [ ],
  feeDetails: {
  fees: [ ],
  totalFees: 0,
  message: "",
  title: "",
  amount: "",
  icon: ""
  },
  availability: {
  opened: true,
  nextOpenMessage: "",
  nextCloseMessage: ""
  },
  longDistanceEnabled: 0,
  rainMode: "NONE",
  thirdPartyAddress: false,
  thirdPartyVendor: "",
  adTrackingID: "",
  badges: {
  imageBased: [ ],
  textBased: [ ],
  textExtendedBadges: [ ]
  },
  lastMileTravelString: "3 kms",
  hasSurge: false,
  sla: {
  restaurantId: "30827",
  deliveryTime: 24,
  minDeliveryTime: 24,
  maxDeliveryTime: 24,
  lastMileTravel: 3,
  lastMileDistance: 0,
  serviceability: "SERVICEABLE",
  rainMode: "NONE",
  longDistance: "NOT_LONG_DISTANCE",
  preferentialService: false,
  iconType: "EMPTY"
  },
  promoted: false,
  avgRating: "4.3",
  totalRatings: 1000,
  new: false
  },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
  type: "F",
  id: "30648",
  name: "Nandhana Palace",
  uuid: "f7d4af70-57ad-4a74-800a-f18e8097e037",
  city: "1",
  area: "Rajarajeshwari Nagar",
  totalRatingsString: "1000+ ratings",
  cloudinaryImageId: "xuwjwbw1v0gaaguqnepl",
  cuisines: [
  "Biryani",
  "Andhra",
  "South Indian",
  "North Indian"
  ],
  tags: [ ],
  costForTwo: 50000,
  costForTwoString: "₹500 FOR TWO",
  deliveryTime: 29,
  minDeliveryTime: 29,
  maxDeliveryTime: 29,
  slaString: "29 MINS",
  lastMileTravel: 4.400000095367432,
  slugs: {
  restaurant: "nandhana-palace-rajarajeshwari-nagar-rajarajeshwari-nagar",
  city: "bangalore"
  },
  cityState: "1",
  address: "No.152, (Opp.to SBI) 5th Stage, BEML Layout, Channasandra Main Road, Bangalore 560098",
  locality: "BEML Layout 5th Stage",
  parentId: 2120,
  unserviceable: false,
  veg: false,
  select: false,
  favorite: false,
  tradeCampaignHeaders: [ ],
  aggregatedDiscountInfo: {
  header: "50% off",
  shortDescriptionList: [
  {
  meta: "50% off | Use WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  descriptionList: [
  {
  meta: "50% off up to ₹100 | Use code WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  subHeader: "",
  headerType: 0,
  superFreedel: ""
  },
  aggregatedDiscountInfoV2: {
  header: "50% OFF",
  shortDescriptionList: [
  {
  meta: "Use WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  descriptionList: [
  {
  meta: "50% off up to ₹100 | Use code WELCOME50",
  discountType: "Percentage",
  operationType: "RESTAURANT"
  }
  ],
  subHeader: "",
  headerType: 0,
  superFreedel: ""
  },
  ribbon: [
  {
  type: "PROMOTED"
  }
  ],
  chain: [ ],
  feeDetails: {
  fees: [ ],
  totalFees: 0,
  message: "",
  title: "",
  amount: "",
  icon: ""
  },
  availability: {
  opened: true,
  nextOpenMessage: "",
  nextCloseMessage: ""
  },
  longDistanceEnabled: 0,
  rainMode: "NONE",
  thirdPartyAddress: false,
  thirdPartyVendor: "",
  adTrackingID: "cid=5629413~p=13~eid=00000185-8b18-5cc2-0e89-f0c000e50d70",
  badges: {
  imageBased: [ ],
  textBased: [ ],
  textExtendedBadges: [ ]
  },
  lastMileTravelString: "4.4 kms",
  hasSurge: false,
  sla: {
  restaurantId: "30648",
  deliveryTime: 29,
  minDeliveryTime: 29,
  maxDeliveryTime: 29,
  lastMileTravel: 4.400000095367432,
  lastMileDistance: 0,
  serviceability: "SERVICEABLE",
  rainMode: "NONE",
  longDistance: "NOT_LONG_DISTANCE",
  preferentialService: false,
  iconType: "EMPTY"
  },
  promoted: true,
  avgRating: "4.3",
  totalRatings: 1000,
  new: false
  },
  subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
    type: "F",
    id: "4981",
    name: "Nandhini Deluxe",
    uuid: "b6f6ac30-4c6a-4d39-b4f6-f5a4b90d8c45",
    city: "1",
    area: "Banashankari",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "glrpeyam1cxsgpppgwcb",
    cuisines: [
    "North Indian",
    "Chinese",
    "Andhra",
    "Biryani"
    ],
    tags: [ ],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    slaString: "25 MINS",
    lastMileTravel: 2.5999999046325684,
    slugs: {
    restaurant: "nandhini-deluxe-banashankari",
    city: "bangalore"
    },
    cityState: "1",
    address: "304, 100 ft ring road, 4th Phase, 7th block, Banashankari 3rd Stage, Opp Apollo public school, Bangalore-560085",
    locality: "3rd Stage",
    parentId: 2451,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [ ],
    aggregatedDiscountInfo: {
    header: "40% off",
    shortDescriptionList: [
    {
    meta: "40% off | Use GUILTFREEJAN",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "40% off up to ₹100 | Use code GUILTFREEJAN",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    aggregatedDiscountInfoV2: {
    header: "40% OFF",
    shortDescriptionList: [
    {
    meta: "Use GUILTFREEJAN",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "40% off up to ₹100 | Use code GUILTFREEJAN",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    ribbon: [
    {
    type: "PROMOTED"
    }
    ],
    chain: [ ],
    feeDetails: {
    fees: [ ],
    totalFees: 0,
    message: "",
    title: "",
    amount: "",
    icon: ""
    },
    availability: {
    opened: true,
    nextOpenMessage: "",
    nextCloseMessage: ""
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=5700345~p=16~eid=00000185-8b18-5cc2-0e89-f0c100e51003",
    badges: {
    imageBased: [ ],
    textBased: [ ],
    textExtendedBadges: [ ]
    },
    lastMileTravelString: "2.5 kms",
    hasSurge: false,
    sla: {
    restaurantId: "4981",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    lastMileTravel: 2.5999999046325684,
    lastMileDistance: 0,
    serviceability: "SERVICEABLE",
    rainMode: "NONE",
    longDistance: "NOT_LONG_DISTANCE",
    preferentialService: false,
    iconType: "EMPTY"
    },
    promoted: true,
    avgRating: "4.0",
    totalRatings: 500,
    new: false
    },
    subtype: "basic"
    },
    {
    type: "restaurant",
    data: {
    type: "F",
    id: "47385",
    name: "Priyadarshini Grand",
    uuid: "cbca89ad-df12-4303-a7d2-baadc5700ff8",
    city: "1",
    area: "Basaveshwara Nagar",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "c9elzh8awx7jcx70cood",
    cuisines: [
    "South Indian",
    "North Indian",
    "Chaat",
    "Chinese",
    "Beverages"
    ],
    tags: [ ],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 41,
    minDeliveryTime: 41,
    maxDeliveryTime: 41,
    slaString: "41 MINS",
    lastMileTravel: 7.800000190734863,
    slugs: {
    restaurant: "priyadarshini-grand-basaveshwaranagar",
    city: "bangalore"
    },
    cityState: "1",
    address: "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
    locality: "Siddhaiah Puranik Road",
    parentId: 9727,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [ ],
    aggregatedDiscountInfo: {
    header: "50% off",
    shortDescriptionList: [
    {
    meta: "50% off | Use WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "50% off up to ₹100 | Use code WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    aggregatedDiscountInfoV2: {
    header: "50% OFF",
    shortDescriptionList: [
    {
    meta: "Use WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "50% off up to ₹100 | Use code WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    chain: [ ],
    feeDetails: {
    fees: [ ],
    totalFees: 0,
    message: "",
    title: "",
    amount: "",
    icon: ""
    },
    availability: {
    opened: true,
    nextOpenMessage: "",
    nextCloseMessage: ""
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
    imageBased: [ ],
    textBased: [ ],
    textExtendedBadges: [ ]
    },
    lastMileTravelString: "7.8 kms",
    hasSurge: false,
    sla: {
    restaurantId: "47385",
    deliveryTime: 41,
    minDeliveryTime: 41,
    maxDeliveryTime: 41,
    lastMileTravel: 7.800000190734863,
    lastMileDistance: 0,
    serviceability: "SERVICEABLE",
    rainMode: "NONE",
    longDistance: "NOT_LONG_DISTANCE",
    preferentialService: false,
    iconType: "EMPTY"
    },
    promoted: false,
    avgRating: "4.5",
    totalRatings: 1000,
    new: false
    },
    subtype: "basic"
    },
    {
    type: "restaurant",
    data: {
    type: "F",
    id: "33094",
    name: "Sai Prasadam",
    uuid: "57e418cb-b63e-4c6a-8764-c2fdbaef7611",
    city: "1",
    area: "Vijay Nagar",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "c9avtmayfq2xkak5avrh",
    cuisines: [
    "South Indian",
    "North Indian",
    "Jain",
    "Fast Food",
    "Chinese"
    ],
    tags: [ ],
    costForTwo: 25000,
    costForTwoString: "₹250 FOR TWO",
    deliveryTime: 28,
    minDeliveryTime: 28,
    maxDeliveryTime: 28,
    slaString: "28 MINS",
    lastMileTravel: 4.400000095367432,
    slugs: {
    restaurant: "sai-prasadham-vijay-nagar-test-prod-area",
    city: "bangalore"
    },
    cityState: "1",
    address: "#2193/27, 5th main road Rpc Layout. Vijaynagar Bengaluru- 560040",
    locality: "RPC Layout",
    parentId: 175359,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [ ],
    aggregatedDiscountInfo: {
    header: "50% off",
    shortDescriptionList: [
    {
    meta: "50% off | Use WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "50% off up to ₹100 | Use code WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    aggregatedDiscountInfoV2: {
    header: "50% OFF",
    shortDescriptionList: [
    {
    meta: "Use WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    descriptionList: [
    {
    meta: "50% off up to ₹100 | Use code WELCOME50",
    discountType: "Percentage",
    operationType: "RESTAURANT"
    }
    ],
    subHeader: "",
    headerType: 0,
    superFreedel: ""
    },
    chain: [ ],
    feeDetails: {
    fees: [ ],
    totalFees: 0,
    message: "",
    title: "",
    amount: "",
    icon: ""
    },
    availability: {
    opened: true,
    nextOpenMessage: "",
    nextCloseMessage: ""
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
    imageBased: [ ],
    textBased: [ ],
    textExtendedBadges: [ ]
    },
    lastMileTravelString: "4.4 kms",
    hasSurge: false,
    sla: {
    restaurantId: "33094",
    deliveryTime: 28,
    minDeliveryTime: 28,
    maxDeliveryTime: 28,
    lastMileTravel: 4.400000095367432,
    lastMileDistance: 0,
    serviceability: "SERVICEABLE",
    rainMode: "NONE",
    longDistance: "NOT_LONG_DISTANCE",
    preferentialService: false,
    iconType: "EMPTY"
    },
    promoted: false,
    avgRating: "4.2",
    totalRatings: 1000,
    new: false
    },
    subtype: "basic"
    },
];
const meghanas={
  name:"Meghanas Foods",
  image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0isknuhld1ltwxkjkcg",
  cousines:["Biryani","Andhra"],
  rating:"4.4"
}
function RestrauntCard({name,cuisines,maxDeliveryTime,cloudinaryImageId}){
  
  return <div className="card">
    <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+cloudinaryImageId}/>
    <h2>{name}</h2>
    <h3 className="cousins">{cuisines.join(',')}</h3>
    <h4>{maxDeliveryTime}min</h4>
  </div>
}
const Body=()=>{
  return <div className="resto-list">
  {
    restoLitst.map((e,index)=><RestrauntCard {...e.data} key={e.data?.cloudinaryImageId}/>)
  }
  </div>
}
const AppLayout=()=>{
  return(
    <>
    <>
    <HeaderComponent/>
    <Body/>
    </>
  
    <Footer/>
    </>
 
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);