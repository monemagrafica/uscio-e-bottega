import React from 'react'
import {BiMenu, BiSearchAlt, BiCart} from 'react-icons/bi'

function Navbar() {
  return (
    <nav>
    <div className="trigger">
        <div className="icon">
            <BiMenu />
        </div>
    </div>
    <div className="search">
        <div className="icon">
            <BiSearchAlt />
        </div>
    </div>
    <div className="cart">
        <div className="icon">
            <BiCart />
        </div>
    </div>
</nav>
  )
}

export default Navbar