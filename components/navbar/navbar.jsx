import React, { useState, useEffect } from 'react'
import { BiMenu, BiSearchAlt, BiCart } from 'react-icons/bi'
import Link from 'next/link'
import Empty from './empty'
function Navbar({ setOpenCart, statoCarrello }) {

    const [animateC, setAnimateC] = useState(false)


    useEffect(() => {

            if (animateC) {
                setTimeout(() => setAnimateC(false), 2000)
            }
     
    }, [animateC]);

    const handleStatoCarrello = () => {
      if(statoCarrello){
        setOpenCart((prevState) => !prevState)
       }
        setAnimateC(true)}
    

    return (
        <nav>
            <div className="trigger">
                <div className="icon">
                    <BiMenu />
                </div>
            </div>
            <Link href="/search">
                <div className="search">
                    <div className="icon">
                        <BiSearchAlt />
                    </div>
                </div>
            </Link>
            <div className="cart" onClick={() => handleStatoCarrello()}>
                <div className="icon">
                    <BiCart />
                </div>
       <Empty animateC={animateC} statoCarrello={statoCarrello} />
            </div>
        </nav>
    )
}

export default Navbar