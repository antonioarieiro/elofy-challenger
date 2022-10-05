import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function NavBar (){

  return (
    <div className='header'>
      <Link to='/'>
        home
      </Link>
      <Link to='/Blog'>
      Blog
      </Link>
      <Link to='/Notifications'>
      Notifications
      </Link>
    </div>
  )
}
