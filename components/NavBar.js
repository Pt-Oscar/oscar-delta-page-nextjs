import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const NavBar = (props) => {
    const [one, setOne] = useState(false)
useEffect(()=>{
 console.log(props, 'sadk')
},[])
    return(
        
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src="/Logo.png" className="logo-img"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link href="/"><a class="nav-link">Home</a></Link>
      </li>
      <li class="nav-item">
        <Link href="/projects"><a class="nav-link">My projects</a></Link>
      </li>
      <li class="nav-item">
        <Link href="/projects"><a class="nav-link">Full CV</a></Link>
      </li>
      <li class="nav-item">
        <Link href="/contact"><a class="nav-link">Contact</a></Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;