import "./navbar.scss";


export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">CTV <span>Radio</span></a>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className= {"topbar " + (menuOpen && "active")}>
<div className="wrapper">
  <div className="left">
    <a href="#intro" className="logo">Portfolio</a>
  </div>

  <div className="right">
    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
  </div>
</div>
</div> */
}

// import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import {Link} from 'react-router-dom'
// import '../navbar/Navbar.scss'

// const Navbar = () => {
//   const [nav, setNav] = useState(false)
//   const handleNav = () => setNav(!nav)

//   return (
//       <div name='top' className='navbar'>
//           <div className="container">
//               <div className="logo">
//                   <h1>CTV <span>Radio</span></h1>
//               </div>

//               <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//                   <li><Link to='/'>Home</Link></li>
//                   <li><Link to='/catalog'>Catalog</Link> </li>
//                   <li><Link to='#footer'>Contact</Link></li>
//                   <a href='https://beacons.ai/bestllc?fbclid=IwAR14xZXSDflVzS6z-65QLScEMg_-z2Zi8FS-XoOg5g4ySY3sJrCj7542Pxo'>
//                   <button>Sign Up</button>
//                   </a>
//               </ul>
//               <div className="hamburger" onClick={handleNav}>
//                   {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
//               </div>
//           </div>
//       </div>
//   )
// }

// export default Navbar
