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
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>cart</li>
      </ul>
    </div>
  )
     
  
  }
export default HeaderComponent;