import React from 'react'
import { NavLink } from 'react-router-dom';
import { links } from '../pages/pages';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      {links.map(item => (
        <NavLink 
          to={`${item.link.name}`}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}      
    </div>
  )
}

export default Navbar