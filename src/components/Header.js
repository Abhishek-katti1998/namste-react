import { Link } from "react-router-dom";
const Title=()=>
<a href="/">
  <image alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCqeboyqFU7vTgJHf7HvmDXvGwtOhQZ8WHLALq2HclYxpeMJm6F4qPTMvnXhIfGp2z7s&usqp=CAU" />
</a>

//composing components
const HeaderComponent=()=>{
  return (
    <div className="header">
      <Title/>
      <ul className="nav-items">
        <Link to={'/'}>
                <li>Home</li>
        </Link>
        <Link to={"/about"}>
             <li>About</li>
        </Link>
        <Link to={'/contact'}>
               <li>contact</li>
        </Link>
        <Link>
            <li>cart</li>
        </Link>
      </ul>
    </div>
  )
     
  
  }
export default HeaderComponent;