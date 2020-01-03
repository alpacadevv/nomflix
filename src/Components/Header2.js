import React, { useContext } from 'react'
import { UserContext } from './Context'

const Header2 = () => {
  const { user } = useContext(UserContext)
  return (
    <header>
      <a href="#">Home</a> Hello, {user.name}!
    </header>
  )
}

export default Header2
