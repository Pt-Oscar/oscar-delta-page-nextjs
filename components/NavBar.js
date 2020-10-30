import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const NavBar = (props) => {
    const [one, setOne] = useState(false)
useEffect(()=>{
 console.log(props, 'sadk')
},[])
    return(
        
    <div className="nav-bar-container">
<img src="/Logo.png" className="logo-img" />
<div className="navbar-links">
       <Link href="/"><a>Inicio</a></Link> 
        <Link href="/projects"><a>Proyectos</a></Link>
        <Link href="/contact"><a>Contacto</a></Link>
</div>
    </div>
    )
}

export default NavBar;