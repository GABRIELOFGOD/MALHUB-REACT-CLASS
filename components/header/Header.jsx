import React from 'react'
import './Header.css'
import Card from '../card/Card'

const Header = () => {
  // 'Home', 'About', 'Blog', 'Product', 'Contact', 'Name'
  const myList = [
    {
      id: 1,
      text: 'Home'
    },
    {
      id: 2,
      text: 'About'
    },
    {
      id: 3,
      text: 'Blog'
    },
    {
      id: 4,
      text: 'Product'
    },
    {
      id: 5,
      text: 'Contact'
    },
    {
      id: 6,
      text: 'Name'
    }
  ]
  
  return (
    <div className='header'>
      <div className="logo">MY LOGO</div>
      <ul className='nav-list'>
        {myList.map((list, index) => {
          return <Card key={index} name={list.text} />
        })}
      </ul>
      <div className='btns'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Header