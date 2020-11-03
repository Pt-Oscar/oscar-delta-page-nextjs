import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const NavBar = (props) => {
    const [one, setOne] = useState(false)
useEffect(()=>{
 console.log(props, 'sadk')
},[])
    return(
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link href="/"><a><img src="/Logo.png" className="logo-img"/></a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link href="/"><a className="nav-link">Home</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/projects"><a className="nav-link">My projects</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/projects"><a className="nav-link">Full CV</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/contact"><a className="nav-link">Contact</a></Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;